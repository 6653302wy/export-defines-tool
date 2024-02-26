/**
 * 全局store
 */
import { LocalStorage } from '@6653302wy/ts-utils';
import { FC, ReactElement, createContext, useCallback, useEffect, useState } from 'react';

export interface CustomRequest {
    opend: boolean;
    importCode: string;
    requestCode: string;
}

export interface OnlyDataExport {
    opend: boolean;
    paramName: string;
}

type GlobalStoreType = {
    savePath: string;
    setSavePath: (str: string) => void;

    jsonUrl: string;
    setJsonUrl: (str: string) => void;

    onlyDataExport: OnlyDataExport;
    updateOnlyDataExportInfo: (info: Partial<OnlyDataExport>) => void;

    customRequest: CustomRequest;
    updateCustomRequestInfo: (info: Partial<CustomRequest>) => void;

    saveInLocalCache: (info: Partial<GlobalStoreType>) => void;
};

export const GlobalContext = createContext({} as GlobalStoreType);

const cacheData = LocalStorage.inst.getObj('cache') as GlobalStoreType;

export const GlobalStore: FC<{ children: ReactElement }> = ({ children }) => {
    const [savePath, setSavePath] = useState(cacheData?.savePath || '');
    const [jsonUrl, setJsonUrl] = useState(cacheData?.jsonUrl || '');
    const [onlyDataExport, setonlyDataExport] = useState({
        opend: true,
        paramName: 'data',
    });
    const [customRequest, setcustomRequest] = useState({
        opend: cacheData?.customRequest?.opend || false,
        importCode: '',
        requestCode: '',
    });

    const updateOnlyDataExportInfo = useCallback((info: Partial<OnlyDataExport>) => {
        setonlyDataExport((pre) => {
            return { ...pre, ...info };
        });
    }, []);

    const updateCustomRequestInfo = useCallback((info: Partial<CustomRequest>) => {
        setcustomRequest((pre) => {
            return { ...pre, ...info };
        });
    }, []);

    const saveInLocalCache = useCallback((info: Partial<GlobalStoreType>) => {
        const curCache = LocalStorage.inst.getObj('cache') as GlobalStoreType;
        LocalStorage.inst.setObj('cache', { ...curCache, ...info });
    }, []);

    useEffect(() => {
        saveInLocalCache({ savePath });
    }, [saveInLocalCache, savePath]);

    useEffect(() => {
        saveInLocalCache({ jsonUrl });
    }, [jsonUrl, saveInLocalCache]);

    useEffect(() => {
        saveInLocalCache({ onlyDataExport });
    }, [saveInLocalCache, onlyDataExport]);

    useEffect(() => {
        saveInLocalCache({ customRequest });
    }, [saveInLocalCache, customRequest]);

    return (
        <GlobalContext.Provider
            value={{
                savePath,
                setSavePath,
                jsonUrl,
                setJsonUrl,
                onlyDataExport,
                updateOnlyDataExportInfo,
                customRequest,
                updateCustomRequestInfo,
                saveInLocalCache,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
