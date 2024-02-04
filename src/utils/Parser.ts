/* eslint-disable max-lines-per-function */
import axios from 'axios';

interface PropertyInfo {
    type: string;
    description?: string;
    example?: string;
    /** type 为 object 时 */
    properties?: { [key: string]: PropertyInfo };
    /** type 为 array 时 */
    items?: { [key: string]: PropertyInfo };
    required?: string[];
}

interface ParameterInfo {
    name: string;
    in: string;
    description: string;
    required: boolean;
    /** 在请求的 parameters 中，schema里的数据均为基础类型数据  */
    schema: PropertyInfo;
}

type ParamInfo = { [key: string]: PropertyInfo };
interface SchemaInfo {
    type: string;
    properties: ParamInfo;
    // 必填参数列表
    required: string[];
}

interface PathInfo {
    // 协议名
    summary: string;
    description: string;
    deprecated: boolean;
    tags: string[];
    // get请求中的请求参数 (只解析其中一个，有parameters就是走get,有body就是走post)
    parameters: ParameterInfo[];
    // post请求中的请求参数 (只解析其中一个，有parameters就是走get,有body就是走post)
    requestBody: {
        content: { 'application/json': { schema: SchemaInfo } };
    };
    // 返回数据
    responses: { '200': { content: { 'application/json': { schema: SchemaInfo } } } };
}
interface JsonDataInfo {
    tags: { name: string }[];
    paths: { [key: string]: { [key: string]: PathInfo } };
}

// 基础数据类型
const basicDataTypes = ['string', 'number', 'integer', 'boolean', 'file'];
export class Parser {
    private readonly apiFilePath = `/Apis.ts`;
    private readonly interfaceFilePath = `/Interface.ts`;

    private apiJsonFile: JsonDataInfo | undefined = undefined;
    private requestDefineMap = new Map();
    private requestDefines = '';
    // Interface 文件
    private interfaceDefines = '';
    private allDefineMap = new Map(); // 做去重用
    private apiImports = '';

    private apiList: string[] = [];

    // 返回数据data的key  不设置则默认最外层
    private responseDataKey = '';

    // static get inst() {
    //     return Singleton.get(Parser);
    // }

    start(url?: string, jsonData?: JsonDataInfo, responseDataKey?: string) {
        this.responseDataKey = responseDataKey || '';

        if (url) {
            this.getJsonData(url);
            return;
        }

        if (jsonData) {
            this.apiJsonFile = jsonData;
            this.createModuleCodes();
        }
    }

    private createModuleCodes() {
        if (!this.apiJsonFile) return;
        console.log('createModuleCodes: ', this.apiJsonFile);

        // 解析出api列表
        this.apiList = Array.from(Object.keys(this.apiJsonFile.paths));
        this.apiList.forEach((api) => {
            const data = this?.apiJsonFile?.paths[api];
            if (data) {
                const reqMethod = Array.from(Object.keys(data))[0];
                const apidata = data[reqMethod];
                const apiname = this.createAPIName(api);
                this.interfaceDefines += this.parseRequestDefine(
                    apiname,
                    apidata?.parameters,
                    this.getValueByKey(apidata?.requestBody, 'schema') as SchemaInfo,
                );
                // console.log('解析request defines: ', api, this.interfaceDefines);
                this.interfaceDefines += this.parseResoneDefine(
                    apiname,
                    this.getValueByKey(apidata?.responses, 'schema') as SchemaInfo,
                );
                // console.log('开始解析====, response defines: ', this.interfaceDefines);
            }
        });
    }

    // 解析请求数据结构体
    private parseRequestDefine(api: string, parameters?: ParameterInfo[], requestBody?: SchemaInfo) {
        // console.log('parseRequestDefine: ', api, parameters, requestBody);

        let defines = '';

        // 读取 parameters 对象
        if (parameters?.length) {
            const params = parameters?.filter((val) => val?.in !== 'header'); // 放进header中的参数这边不解析
            // console.log(`解析: ${api}, parameters:`, params);
            for (let i = 0; i < params?.length; i += 1) {
                const obj = params[i];
                // parameters 里的参数只能配置基础数据类型，例如： string, number, boolean
                defines += this.createParam(obj.name, obj.description, obj.schema.type, obj.required);
            }
        }

        // 读取 requestBody 对象
        if (requestBody?.properties) {
            defines += this.parseObjectStruct(requestBody, api);
        }

        // console.log(`${api}Request`, defines);

        return `
        export interface ${api}Request {
            ${defines}
        }
        `;
    }

    // 解析返回数据结构体
    private parseResoneDefine(api: string, response: PropertyInfo) {
        console.log('parseResoneDefine: ', api, response);
        const defines = '';
        // const params =
        //     this.responseDataKey !== ''
        //         ? (response.properties as ParamInfo)[this.responseDataKey]
        //         : response.properties;
        // const defines = this.parseObjectStruct(params);
        return `
        export interface ${api}Respone {
            ${defines}
        }
        `;
    }

    private parseObjectStruct(param: SchemaInfo, api?: string) {
        const { properties } = param;
        const params = Object.keys(properties);
        if (!params.length) return '';

        let defines = '';
        params.forEach((key) => {
            const obj = properties[key];
            // 普通数据类型
            if (basicDataTypes.includes(obj.type)) {
                defines += this.createParam(
                    key,
                    `${obj.description} ${obj.example ? 'expamle: ' : ''}${obj.example || ''}`,
                    obj.type,
                    param?.required?.includes(key) || false,
                );
            } else {
                // 复杂数据格式， object 和 array ， 需要继续往下一层解析
                // if (obj.type === 'object') {
                //     defines += this.parseObjectStruct(obj);
                // }
            }
        });

        if (api === 'CompanyUserLogin') {
            console.log('parseObjectStruct', param, defines);
        }

        return defines;
    }

    private createParam(key: string, desc: string, dataType: string, required: boolean) {
        let datatype = dataType;
        switch (dataType) {
            case 'integer':
                datatype = 'number';
                break;
            case 'file':
                datatype = 'File';
                break;
            default:
        }
        return `/** ${desc || ''} */
        ${key}${required ? '' : '?'}: ${datatype};\n`;
    }

    // private parseDataDefine(apiname: string, requires: string[], params?: ParameterInfo[], body?: DataBodyInfo) {
    //     const createProp = (name, type, desc, required, value) => {
    //         let subProps = {}; // 嵌套的子属性结构体
    //         let valType = type;
    //         switch (type) {
    //             case 'integer':
    //                 valType = 'number';
    //                 break;
    //             case 'array':
    //                 if (value?.items?.type === 'object') {
    //                     const paramLen = Object.keys(value?.items?.properties)?.length;
    //                     valType = paramLen ? `${api}${firstUpperCase(name)}[]` : 'any[]';
    //                     if (paramLen) {
    //                         subProps = parseDataDefine(api, value?.items?.required, value?.items.properties);
    //                         subs.push({
    //                             name: `${api}${firstUpperCase(name)}`,
    //                             subProps,
    //                             valType,
    //                         });
    //                         if (subProps?.subs?.length) {
    //                             subProps.subs.forEach((val) => {
    //                                 const subsubName =
    //                                     val.name === `${api}${firstUpperCase(name)}` ? `${val.name}Children` : val.name;
    //                                 const subProp = { name: subsubName, subProps: val.subProps };
    //                                 subs.push(subProp);
    //                             });
    //                         }
    //                     } else {
    //                         valType = `${value?.items?.type === 'integer' ? 'number' : value?.items?.type}[]`;
    //                         console.log('普通类型的参数===', value, valType);
    //                     }
    //                 } else {
    //                     valType = `${value?.items?.type === 'integer' ? 'number' : value?.items?.type}[]`;
    //                 }
    //                 break;
    //             case 'object':
    //                 const props = value?.properties;
    //                 if (props && Object.keys(props)?.length) {
    //                     valType = `${api}${firstUpperCase(name)}`;
    //                     subProps = parseDataDefine(api, value?.required ?? [], props);
    //                     subs.push({ name: valType, subProps });
    //                     if (subProps?.subs?.length) {
    //                         subProps.subs.forEach((val) => {
    //                             const subsubName =
    //                                 val.name === `${api}${firstUpperCase(name)}` ? `${val.name}Children` : val.name;
    //                             const subProp = { name: subsubName, subProps: val.subProps };
    //                             subs.push(subProp);
    //                         });
    //                     }
    //                 } else valType = 'any';
    //                 break;
    //             default:
    //                 if (name === 'file') valType = 'File';
    //                 else valType = type;
    //         }

    //         return {
    //             main: `
    //       /** ${desc ?? ''} */
    //     ${name}${!required ? '?' : ''}: ${valType};\n`,
    //         };
    //     };

    //     let content = '';
    //     let defines;
    //     let subs = [];
    //     if (body) {
    //         for (const [key, value] of Object.entries(body)) {
    //             defines = createProp(key, value.type, value?.description, requires?.includes(key), value);
    //             content += defines.main;
    //         }
    //     }

    //     if (params?.length) {
    //         content = '';
    //         subs = [];
    //         for (let i = 0; i < params.length; i++) {
    //             const param = params[i];
    //             if (param.in === 'header') continue;

    //             defines = createProp(
    //                 param.name,
    //                 param.schema.type,
    //                 param?.description,
    //                 param?.required,
    //                 param?.schema ?? param,
    //             );

    //             content += defines.main;
    //         }
    //     }

    //     return { content, subs };
    // }

    // 将 'user/login' 类型的接口名解析成驼峰式 UserLogin
    private createAPIName(api: string) {
        const apiname = api
            .split('/')
            .map((str) => {
                if (str.includes('-')) {
                    return str
                        .split('-')
                        .map((subStr) => {
                            return this.firstUpperCase(subStr);
                        })
                        .join('');
                }
                return this.firstUpperCase(str);
            })
            .join('');

        return apiname;
    }

    private getJsonData(url: string) {
        axios
            .get(url)
            .then((response) => {
                // 检查HTTP响应状态
                if (response.status === 200) {
                    // 响应数据包含在response.data中，它已经是JSON格式的对象
                    const jsonData = response.data;
                    this.apiJsonFile = jsonData;
                    this.createModuleCodes();
                } else {
                    console.error('Failed to download JSON file. HTTP Status:', response.status);
                }
            })
            .catch((error) => {
                console.error('Error downloading JSON file:', error);
            });
    }

    private firstUpperCase(str: string) {
        return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
    }

    private getValueByKey<T>(obj: { [key: string]: T }, targetKey: string): unknown {
        if (!obj) return '';
        let result;
        // 检查当前对象是否包含目标 key
        if (obj[targetKey]) {
            return obj[targetKey];
        }

        // 遍历对象的所有属性
        const keys = Array.from(Object.keys(obj));
        for (let i = 0; i < keys.length; i += 1) {
            const key = keys[i];
            if (Object.hasOwn(obj, key) && typeof obj[key] === 'object') {
                // 如果属性的值是一个对象，则进行递归调用
                result = this.getValueByKey(obj[key] as { [key: string]: T }, targetKey);
                // 如果找到目标值，立即返回
                if (result !== undefined) break;
            }
        }

        // 如果未找到目标值，返回 undefined
        return result;
    }
}
