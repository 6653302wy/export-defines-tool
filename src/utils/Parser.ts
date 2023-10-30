import axios from 'axios';

interface ParameterInfo {
    name: string;
    in: string;
    description: string;
    required: boolean;
    schema: {
        type: string;
    };
}

interface PropertyInfo {
    type: string;
    properties: { [key: string]: { type: string } };
    // 必填参数
    required: string[];
}

interface DataBodyInfo {
    schema: PropertyInfo;
}

interface PostInfo {
    // 协议名
    summary: string;
    description: string;
    deprecated: boolean;
    tags: string[];
    // header中的请求参数 (只解析其中一个，有header就是走get,有body就是走post)
    parameters: ParameterInfo[];
    // body中的请求参数 (只解析其中一个，有header就是走get,有body就是走post)
    requestBody: {
        content: { 'application/json': DataBodyInfo };
    };
    // 返回数据
    responses: { '200': { content: { 'application/json': DataBodyInfo } } };
}
interface JsonDataInfo {
    tags: { name: string }[];
    paths: { [key: string]: { [key: string]: PostInfo } };
}

export class Parser {
    private readonly apiFilePath = `/Apis.ts`;
    private readonly interfaceFilePath = `/Interface.ts`;

    private apiJsonFile: JsonDataInfo | undefined = undefined;
    private allDefines = '';
    private allDefineMap = new Map(); // 做去重用
    private apiImports = '';

    private apiList: string[] = [];

    // static get inst() {
    //     return Singleton.get(Parser);
    // }

    start(url?: string, jsonData?: JsonDataInfo) {
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
        // console.log('createModuleCodes: ', this.apiJsonFile);

        // 解析出api列表
        this.apiList = Array.from(Object.keys(this.apiJsonFile.paths));
        this.apiList.forEach((api) => {
            const data = this?.apiJsonFile?.paths[api];
            if (data) {
                const reqMethod = Array.from(Object.keys(data))[0];
                const apidata = data[reqMethod];
                this.parseRequestDefine(
                    api,
                    reqMethod,
                    apidata.parameters,
                    apidata.requestBody.content['application/json'],
                );
                this.parseResoneDefine(api, apidata.responses['200'].content['application/json']);
            }
        });
    }

    private parseRequestDefine(api: string, method: string, headerParams: ParameterInfo[], bodyParams: DataBodyInfo) {
        console.log('parseRequestDefine: ', api, method, headerParams, bodyParams.schema);
    }

    private parseResoneDefine(api: string, response: DataBodyInfo) {
        console.log('parseResoneDefine: ', api, response.schema);
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
}
