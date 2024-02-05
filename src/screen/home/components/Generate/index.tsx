/* eslint-disable prefer-regex-literals */
/* eslint-disable max-lines-per-function */
import { Button, Divider, Input, Message, Radio, Switch, Tooltip, Typography, Upload } from '@arco-design/web-react';
import { UploadItem } from '@arco-design/web-react/es/Upload';
import { IconPaste, IconQuestionCircle, IconShareExternal } from '@arco-design/web-react/icon';
import { open } from '@tauri-apps/api/dialog';
import { downloadDir } from '@tauri-apps/api/path';
import classNames from 'classnames';
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
        // console.log('fileExtension: ', fileExtension);
        return fileExtension === accept;
    }
    return !!file;
};

export const Generate: FunctionComponent = (): ReactElement => {
    const [savePath, setSavePath] = useState(cacheData?.savePath || '');
    const [jsonUrl, setJsonUrl] = useState(cacheData?.jsonUrl || '');
    const [jsonData, setJsonData] = useState<JsonDataInfo>({} as JsonDataInfo);
    const [exportType, setExportType] = useState<ExportType>(ExportType.URL);

    const [onlyDataExport, setOnlyDataExport] = useState(false);
    const [paramName, setparamName] = useState('data');

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

        if (!file) return;

        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = (fileReader) => {
            const fileData = fileReader?.target?.result;
            setJsonData(JSON.parse(fileData as string) as JsonDataInfo);
        };
    };

    const onCreateCodeClick = useCallback(() => {
        if (exportType === ExportType.URL) {
            parser.start(savePath, jsonUrl);
        } else parser.start(savePath, undefined, jsonData);
    }, [exportType, jsonData, jsonUrl, savePath]);

    useEffect(() => {
        parser.dataExport = { onlyDataExport, paramName };
    }, [paramName, onlyDataExport]);

    useEffect(() => {
        setDownloadDir();
    }, [setDownloadDir]);

    return (
        <div className="">
            {/* <p className="text-[--color-text-1] text-[16px] font-medium">生成代码文件</p> */}
            {/* <Divider /> */}

            <div className="my-6">
                <span className=" mr-2 w-20 inline-block ">生成目录: </span>
                <Input style={{ width: 460 }} value={savePath} className=" mr-4 " />
                <Button onClick={onSaveOutputDir}>浏览</Button>
            </div>

            <div className={classNames('flex items-center my-4 ', { 'text-[#87888F]': !onlyDataExport })}>
                <span className="  inline-block">返回数据字段名（默认data）:</span>
                <Input
                    style={{ width: 120 }}
                    defaultValue={paramName}
                    className="ml-1 mr-4"
                    onChange={(value) => setparamName(value)}
                    disabled={!onlyDataExport}
                />

                <Switch checked={onlyDataExport} onChange={(value) => setOnlyDataExport(value)} />

                <div className="flex items-center text-[#87888F] text-[12px]">
                    <p className="ml-2 mr-1 ">注： 打开此选项后，只生成实际的数据</p>
                    <Tooltip
                        content={
                            <div>
                                <div>
                                    <p>例如，如果接口返回了</p>
                                    <Typography.Text
                                        code
                                    >{`{"code": 0, "message": "success", "data": {"name": "wanpeng", "age": 25}}`}</Typography.Text>
                                    <p>,则只会导出</p>
                                    <Typography.Text code>{`{"name": "wanpeng", "age": 25}`}</Typography.Text>
                                </div>
                            </div>
                        }
                    >
                        <div className="cursor-pointer">
                            <IconQuestionCircle style={{ fontSize: 16, marginTop: 2 }} />
                        </div>
                    </Tooltip>
                </div>
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
                        placeholder="输入Swagger的JSON文件URL"
                        onChange={(value) => onSaveJsonUrl(value)}
                    />
                </div>
            ) : (
                <div className="w-full flex justify-center items-center ">
                    <Upload
                        drag
                        style={{ width: 380 }}
                        multiple={false}
                        // limit={1}
                        accept=".json"
                        directory={false}
                        showUploadList={false}
                        onDrop={(e) => {
                            const uploadFile = e.dataTransfer.files[0];
                            if (!isAcceptFile(uploadFile, 'json'))
                                Message.info('不接受的文件类型，请重新上传指定文件类型~');
                        }}
                        onChange={onFileUploaded}
                    >
                        <div className="w-[380px] h-[158px] flex flex-col justify-center items-center border border-dashed border-[var(--color-fill-4)] rounded text-center bg-[var(--color-fill-2)] ">
                            {!jsonData?.tags?.length ? (
                                <>
                                    <IconShareExternal style={{ fontSize: 24, color: '#3680E8' }} />
                                    <p className="whitespace-pre-wrap">点击或拖拽文件到此区域</p>
                                    <p className="text-[12px] text-[#87888F] mt-1">OpenAPI/Swagger的JSON文件</p>
                                </>
                            ) : (
                                <>
                                    <IconPaste style={{ fontSize: 24, color: '#3680E8' }} />
                                    <p className="mt-1 text-[12px]  text-[#87888F] ">点击或拖拽重新上传</p>
                                </>
                            )}
                        </div>
                    </Upload>
                </div>
            )}

            <div className="w-full flex justify-center items-center mt-10">
                <Button
                    disabled={
                        (exportType === ExportType.URL && !jsonUrl) ||
                        (exportType === ExportType.JSON && !jsonData.tags?.length)
                    }
                    type="primary"
                    size="large"
                    onClick={onCreateCodeClick}
                    className=" w-[100px] h-[38px]"
                >
                    生成
                </Button>
            </div>
        </div>
    );
};

Generate.displayName = 'Generate';
