/* eslint-disable prefer-regex-literals */
/* eslint-disable max-lines-per-function */
import { Button, Divider, Input, Message, Radio, Upload } from '@arco-design/web-react';
import { UploadItem } from '@arco-design/web-react/es/Upload';
import { open } from '@tauri-apps/api/dialog';
import { downloadDir } from '@tauri-apps/api/path';
import { FunctionComponent, ReactElement, useCallback, useEffect, useState } from 'react';
import { JsonDataInfo, Parser } from '../../../../utils/Parser';

interface Cache {
    jsonUrl?: string;
    savePath?: string;
}

const parser = new Parser();
const cache = localStorage.getItem('cache');
let cacheData = cache ? (JSON.parse(cache) as Cache) : ({} as Cache);
// console.log('cacheData: ', cacheData);
const saveInLocalCache = () => {
    localStorage.setItem('cache', JSON.stringify(cacheData));
};

enum ExportType {
    JSON = 'JSON',
    URL = 'URL',
}

const isAcceptFile = (file: File, accept: string) => {
    if (accept && file) {
        // const accepts = Array.isArray(accept)
        //     ? accept
        //     : accept
        //           .split(',')
        //           .map((x) => x.trim())
        //           .filter((x) => x);
        const fileExtension = file.name.indexOf('.') > -1 ? file.name.split('.').pop() : '';
        console.log('fileExtension: ', fileExtension);
        return fileExtension === accept;
    }
    return !!file;
};

export const Generate: FunctionComponent = (): ReactElement => {
    const [savePath, setSavePath] = useState(cacheData?.savePath || '');
    const [jsonUrl, setJsonUrl] = useState(cacheData?.jsonUrl || '');
    const [jsonData, setJsonData] = useState<JsonDataInfo>({} as JsonDataInfo);
    const [exportType, setExportType] = useState<ExportType>(ExportType.URL);

    const onSaveOutputDir = useCallback(async () => {
        const filePath = await open({
            directory: true,
            multiple: false,
            title: '请选择文件导出目录',
            defaultPath: await downloadDir(),
        });
        setSavePath((filePath as string) || '');
        cacheData = { ...cacheData, savePath: filePath as string };
        saveInLocalCache();
    }, []);

    const onSaveJsonUrl = useCallback((value: string) => {
        setJsonUrl(value);
        cacheData = { ...cacheData, jsonUrl: value };
        saveInLocalCache();
    }, []);

    const setDownloadDir = useCallback(async () => {
        if (savePath) return;
        setSavePath((await downloadDir()) || '');
    }, [savePath]);

    const onFileUploaded = (files: UploadItem[]) => {
        const file = files[0]?.originFile;
        console.log('onFileUploaded: ', file);
        if (!file) return;

        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = (fileReader) => {
            const fileData = fileReader?.target?.result;
            // console.log(JSON.parse(fileData as string));
            // console.log(JSON.parse(reader.result as string));
            // 上面的两个输出相同
            setJsonData(JSON.parse(fileData as string) as JsonDataInfo);
        };
    };

    const onCreateCodeClick = useCallback(() => {
        if (exportType === ExportType.URL) {
            parser.start(savePath, jsonUrl);
        } else parser.start(savePath, undefined, jsonData);
    }, [exportType, jsonData, jsonUrl, savePath]);

    useEffect(() => {
        setDownloadDir();
    }, [setDownloadDir]);

    return (
        <div className="">
            {/* <p className="text-[--color-text-1] text-[16px] font-medium">生成代码文件</p> */}
            {/* <Divider /> */}

            <div className="my-4">
                <span className=" mr-2 w-20 inline-block ">导出目录: </span>
                <Input style={{ width: 420 }} value={savePath} className=" mr-2 " />
                <Button onClick={onSaveOutputDir}>浏览</Button>
            </div>

            <Divider />

            <Radio.Group
                value={exportType}
                options={[
                    { label: '从URL里生成', value: ExportType.URL },
                    { label: '从Json文件生成', value: ExportType.JSON },
                ]}
                onChange={(value) => setExportType(value as ExportType)}
                className="mb-6"
            />

            {exportType === ExportType.URL ? (
                <div>
                    <span className=" mr-2 w-20 inline-block">JSON URL:</span>
                    <Input
                        style={{ width: 420 }}
                        className=" mr-2 "
                        defaultValue={jsonUrl}
                        onChange={(value) => onSaveJsonUrl(value)}
                    />
                </div>
            ) : (
                <Upload
                    drag
                    multiple={false}
                    accept=".json"
                    directory={false}
                    showUploadList={false}
                    action="/"
                    onDrop={(e) => {
                        const uploadFile = e.dataTransfer.files[0];
                        if (!isAcceptFile(uploadFile, 'json'))
                            Message.info('不接受的文件类型，请重新上传指定文件类型~');
                    }}
                    onChange={onFileUploaded}
                />
            )}

            <div className="flex items-center">
                <Button type="primary" size="large" onClick={onCreateCodeClick} className="mt-4">
                    生成
                </Button>
                <span className="ml-4">返回数据只导出实际的data</span>
            </div>
        </div>
    );
};

Generate.displayName = 'Generate';
