import { Button, Divider, Input } from '@arco-design/web-react';
import { open } from '@tauri-apps/api/dialog';
import { downloadDir } from '@tauri-apps/api/path';
import { FunctionComponent, ReactElement, useCallback, useEffect, useState } from 'react';
import { Parser } from '../../../../utils/Parser';

interface Cache {
    jsonUrl?: string;
    savePath?: string;
}

const parser = new Parser();
const cache = localStorage.getItem('cache');
let cacheData = cache ? (JSON.parse(cache) as Cache) : ({} as Cache);
console.log('cacheData: ', cacheData);
const saveInLocalCache = () => {
    localStorage.setItem('cache', JSON.stringify(cacheData));
};
export const Generate: FunctionComponent = (): ReactElement => {
    const [savePath, setSavePath] = useState(cacheData?.savePath || '');
    const [jsonUrl, setJsonUrl] = useState(cacheData?.jsonUrl || '');

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

    useEffect(() => {
        setDownloadDir();
    }, [setDownloadDir]);

    return (
        <div className="">
            <p className="text-[--color-text-1] text-[16px] font-medium">生成代码文件</p>
            <Divider />

            <div className="mb-4">
                <span className=" mr-2 w-20 inline-block ">导出目录: </span>
                <Input style={{ width: 420 }} value={savePath} className=" mr-2 " />
                <Button onClick={onSaveOutputDir}>浏览</Button>
            </div>
            <div>
                <span className=" mr-2 w-20 inline-block">JSON URL:</span>
                <Input style={{ width: 420 }} className=" mr-2 " onChange={(value) => onSaveJsonUrl(value)} />
            </div>

            <Button type="primary" size="large" onClick={() => parser.start(jsonUrl)} className="mt-4">
                生成
            </Button>
        </div>
    );
};

Generate.displayName = 'Generate';
