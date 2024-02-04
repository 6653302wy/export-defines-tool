const fs = require('fs');
const apiJsonFile = require('./vgene.openapi.json');

let folderPrefix = './src';
let allDefines = '';
const allDefineMap = new Map(); // 做去重用
const apiFilePath = `${folderPrefix}/Apis.ts`;
let apiImports = '';
const interfaceFilePath = `${folderPrefix}/Interface.ts`;

const getApiPre = (tag) => {
    if (tag.includes('C端')) return { pre: '/client-web-api', suf: 'C' };
    if (tag.includes('B端')) return { pre: '/business-web-api', suf: 'B' };
    if (tag.includes('Track')) return { pre: '/track-web-api', suf: 'T' };
    if (tag.includes('User服务')) return { pre: '/user-server-api', suf: 'U' };
    if (tag.includes('开放平台')) return { pre: '/open-platform-server-api', suf: 'K' };
    if (tag.includes('数字人服务')) {
        return { pre: '/digital-human-server-api', suf: 'D' };
    }
    return { pre: '', suf: '' };
};

const touchCodeFile = (fileName, content) => {
    return new Promise((resolve) => {
        fs.writeFile(fileName, content, (err) => {
            if (err) {
                return console.error('文件创建出错==', err);
            }
            // console.log(`${fileName}文件创建成功`);
        });
        resolve('');
    });
};

const firstUpperCase = (str) => {
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
};

// 创建api文件
const touchAPIFile = (content) => {
    const final = `import { NetManager } from "@vgene/utils";
${apiImports}
${content}`;
    touchCodeFile(apiFilePath, final);
};

// 创建单个接口结构体定义
const touchDefines = (fileName, content) => {
    if (!content.content) return Promise.resolve('');

    let defines = `export type ${fileName} = {
    ${content.content}
}\n`;

    if (content.subs.length) {
        // console.log("content.subs: ", content.subs );
        content.subs.forEach((prop) => {
            const subDefines = `\nexport type ${prop.name} = {
        ${prop.subProps.content}
}\n`;
            if (allDefineMap.has(prop.name)) {
                console.log('有重复的定义类型', prop.name);
            } else {
                defines += subDefines;
            }
            allDefineMap.set(prop.name, subDefines);
        });
    }
    allDefines += defines;
    apiImports += `import { ${fileName} } from "./Interface";\n`;
};

// 解析api接口名
const parseApiName = (key) => {
    const api = key
        .split('/')
        .map((str) => {
            if (str.includes('-')) {
                return str
                    .split('-')
                    .map((subStr) => {
                        return firstUpperCase(subStr);
                    })
                    .join('');
            }
            return firstUpperCase(str);
        })
        .join('');

    return api;
};

const allApiList = [];
const defineApis = (path, api, type, desc, contentType, tag, responsesType, deprecated, singArrayType) => {
    const requestDefine = allDefines.includes(`${api}Request`) ? `${api}Request` : '{}';

    let responsesDefine = 'unknown';
    if (responsesType === 'array' && singArrayType !== '') {
        responsesDefine = `${singArrayType}[]`;
    } else {
        responsesDefine = allDefines.includes(`${api}Response`)
            ? `${api}Response${responsesType === 'array' ? '[]' : ''}`
            : normalTypes.includes(responsesType)
            ? responsesType
            : 'unknown';
    }

    const semanticByTag = getApiPre(tag);

    return `
  /** ${desc}
   * ${deprecated ? '@deprecated 接口已弃用' : ''}
   */
export const ${api} = (data${requestDefine === '{}' ? '?' : ''}: ${requestDefine}): Promise<${responsesDefine}> => {
  return Http.request('${semanticByTag.pre}${path}', '${type}', data, '${
        contentType || 'application/json;charset=utf-8'
    }');
}`;
};

// 解析接口定义数据结构
const parseDataDefine = (api, requires, body, params) => {
    // console.log("api requires: ", api, body);
    const createProp = (name, type, desc, required, value) => {
        let subProps = {}; // 嵌套的子属性结构体
        let valType = type;
        switch (type) {
            case 'integer':
                valType = 'number';
                break;
            case 'array':
                if (value?.items?.type === 'object') {
                    const paramLen = Object.keys(value?.items?.properties)?.length;
                    valType = paramLen ? `${api}${firstUpperCase(name)}[]` : 'any[]';
                    if (paramLen) {
                        subProps = parseDataDefine(api, value?.items?.required, value?.items.properties);
                        subs.push({
                            name: `${api}${firstUpperCase(name)}`,
                            subProps,
                            valType,
                        });
                        if (subProps?.subs?.length) {
                            subProps.subs.forEach((val) => {
                                const subsubName =
                                    val.name === `${api}${firstUpperCase(name)}` ? `${val.name}Children` : val.name;
                                const subProp = { name: subsubName, subProps: val.subProps };
                                subs.push(subProp);
                            });
                        }
                    } else {
                        valType = `${value?.items?.type === 'integer' ? 'number' : value?.items?.type}[]`;
                        console.log('普通类型的参数===', value, valType);
                    }
                } else {
                    valType = `${value?.items?.type === 'integer' ? 'number' : value?.items?.type}[]`;
                }
                break;
            case 'object':
                const props = value?.properties;
                if (props && Object.keys(props)?.length) {
                    valType = `${api}${firstUpperCase(name)}`;
                    subProps = parseDataDefine(api, value?.required ?? [], props);
                    subs.push({ name: valType, subProps });
                    if (subProps?.subs?.length) {
                        subProps.subs.forEach((val) => {
                            const subsubName =
                                val.name === `${api}${firstUpperCase(name)}` ? `${val.name}Children` : val.name;
                            const subProp = { name: subsubName, subProps: val.subProps };
                            subs.push(subProp);
                        });
                    }
                } else valType = 'any';
                break;
            default:
                if (name === 'file') valType = 'File';
                else valType = type;
        }

        return {
            main: `
      /** ${desc ?? ''} */
    ${name}${!required ? '?' : ''}: ${valType};\n`,
        };
    };

    let content = '';
    let defines;
    let subs = [];
    if (body) {
        for (const [key, value] of Object.entries(body)) {
            defines = createProp(key, value.type, value?.description, requires?.includes(key), value);
            content += defines.main;
        }
    }

    if (params?.length) {
        content = '';
        subs = [];
        for (let i = 0; i < params.length; i++) {
            const param = params[i];
            if (param.in === 'header') continue;

            defines = createProp(
                param.name,
                param.schema.type,
                param?.description,
                param?.required,
                param?.schema ?? param,
            );

            content += defines.main;
        }
    }

    return { content, subs };
};

const parseRequsetDefine = (api, apiValue) => {
    let defines = '';
    // 有requestBody
    if (apiValue?.requestBody) {
        const headerContentType = Object.keys(apiValue.requestBody.content)[0];
        const props = apiValue.requestBody.content[headerContentType]?.schema?.properties;
        if (props && Object.keys(props).length) {
            defines = parseDataDefine(api, apiValue.requestBody.content[headerContentType]?.schema?.required, props);
        }
    } else {
        // 没有requestBody 就读parameters
        const params = apiValue.parameters?.filter((val) => val?.in !== 'header');
        // console.log(`解析: ${api}, parameters:`, params);
        if (params?.length) defines = parseDataDefine(api, [], null, params);
    }
    return defines;
};

const normalTypes = ['string', 'boolean', 'number'];
// 解析reponse数据结构体
const parseReponseDefine = (api, apiValue) => {
    const props = apiValue.responses['200'].content['application/json'].schema.properties;

    if (!props || !Object.keys(props).length) return '';

    // 包了data
    if (Object.keys(props).includes('data')) {
        // 判断data是不是一个结构体
        const { data } = props;
        if (data.type === 'object' || data.type === 'array') {
            return parseDataDefine(
                api,
                data.type === 'object' ? data.required : data.items.required,
                data.type === 'object' ? data.properties : data.items.properties,
            );
        } else return '';
    }
    // 没有包data,直接解析
    return parseDataDefine(api, props.required, props);
};

const createModuleCodes = async () => {
    // api接口文件
    let apis = '';
    for (const [key, value] of Object.entries(apiJsonFile.paths)) {
        const keyType = Object.keys(value)?.[0];
        const apiValue = value[keyType];
        const apiName = parseApiName(key);

        // 生成request对应的接口定义文件
        touchDefines(`${apiName}Request`, parseRequsetDefine(apiName, apiValue));

        // 生成reponse接口定义文件
        touchDefines(`${apiName}Response`, parseReponseDefine(apiName, apiValue));

        // 生成api调用文件
        let headerContentType = apiValue?.requestBody ? Object.keys(apiValue?.requestBody?.content)?.[0] : '';
        headerContentType = keyType === 'post' && !apiValue?.requestBody ? 'multipart/form-data' : headerContentType;

        const respdata = apiValue.responses['200'].content['application/json'].schema?.properties?.data;
        const responsesType = respdata?.type;
        let singArrayType = '';
        if (responsesType === 'array' && normalTypes.includes(respdata?.items?.type)) {
            singArrayType = respdata?.items?.type;
        }

        const apiContent = defineApis(
            key,
            apiName,
            keyType,
            apiValue?.summary,
            headerContentType,
            apiValue?.tags?.[0] || '',
            responsesType,
            apiValue.deprecated,
            singArrayType,
        );

        apis += apiContent;
    }
    await touchAPIFile(apis);
    await touchCodeFile(interfaceFilePath, allDefines);
    console.log('接口生成完成~');
};

const start = () => {
    const folderPath = folderPrefix;
    if (!fs.existsSync(folderPath)) {
        fs.mkdir(folderPath, (err) => {
            if (err) {
                console.log(err);
                return false;
            }
            // console.log(`${folderPath} 目录创建成功!`);

            //创建代码文件
            createModuleCodes();
        });
    } else {
        // console.log(`${folderPath} 目录已存在`);
        // 已存在目录，直接创建文件
        createModuleCodes();
    }
};

start();
