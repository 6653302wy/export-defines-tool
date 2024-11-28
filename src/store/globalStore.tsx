/* eslint-disable max-lines-per-function */
/**
 * 全局store
 */
import { LocalStorage } from '@6653302wy/ts-utils';
import { Message, Modal } from '@arco-design/web-react';
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

export interface ServiceInfo {
    name: string;
    url: string;
    desc?: string;
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

    serviceList: ServiceInfo[];
    updateServiceList: (info: ServiceInfo, index: number, isDelet?: boolean) => void;

    saveInLocalCache: (info: Partial<GlobalStoreType>) => void;

    /** 所有配置 */
    allConfig: string[];
    addConfig: (str: string) => void;
    /** 当前配置 */
    curConfig: string;
    setCurConfig: (str: string) => void;
    /** 切换配置 */
    switchConfig: (name: string) => void;
};

export const GlobalContext = createContext({} as GlobalStoreType);

const defalutConfigName = 'default';

const oldCacheData = LocalStorage.inst.getObj('cache') as GlobalStoreType;

export const GlobalStore: FC<{ children: ReactElement }> = ({ children }) => {
    const [curConfig, setCurConfig] = useState(LocalStorage.inst.getStr('curConfig') || defalutConfigName);
    let defalutData = LocalStorage.inst.getObj(curConfig) as GlobalStoreType;
    // 兼容之前的缓存
    if (oldCacheData && !defalutData) {
        LocalStorage.inst.setObj('default', oldCacheData);
        defalutData = oldCacheData;
    }
    const cacheData = defalutData;
    // console.log('cacheData', cacheData);

    const [savePath, setSavePath] = useState(cacheData?.savePath || '');
    const [jsonUrl, setJsonUrl] = useState(cacheData?.jsonUrl || '');
    const [onlyDataExport, setonlyDataExport] = useState({
        opend: cacheData?.onlyDataExport?.opend || false,
        paramName: 'data',
    });
    const [customRequest, setcustomRequest] = useState({
        opend: cacheData?.customRequest?.opend || false,
        importCode: cacheData?.customRequest.importCode || '',
        requestCode: cacheData?.customRequest.requestCode || '',
    });
    const [serviceList, setServiceList] = useState<ServiceInfo[]>(cacheData?.serviceList || []);

    const [allConfig, setAllConfig] = useState(
        (LocalStorage.inst.getObj('allConfig') as string[]) || [defalutConfigName],
    );

    const updateServiceList = useCallback((info: ServiceInfo, index: number, isDelet?: boolean) => {
        setServiceList((pre) => {
            const newlist = [...pre];
            if (isDelet && index !== -1) {
                newlist.splice(index, 1);
                return newlist;
            }

            if (index >= 0) newlist[index] = info;
            else newlist.push(info);
            return newlist;
        });
    }, []);

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

    const saveInLocalCache = useCallback(
        (info: Partial<GlobalStoreType>) => {
            const curCache = LocalStorage.inst.getObj(curConfig) as GlobalStoreType;
            LocalStorage.inst.setObj(curConfig, { ...curCache, ...info });
        },
        [curConfig],
    );

    const addConfig = useCallback(
        (name: string) => {
            const list = [...allConfig];
            if (allConfig.includes(name)) {
                Message.warning('该配置已存在');
            } else {
                list.push(name);
                setAllConfig(list);
            }
        },
        [allConfig],
    );

    const switchConfig = useCallback(
        (name: string) => {
            setCurConfig(name);
            const curCache = LocalStorage.inst.getObj(name) as GlobalStoreType;
            setcustomRequest(curCache.customRequest);
            setonlyDataExport(curCache.onlyDataExport);
            setSavePath(curCache.savePath);
            setServiceList(curCache.serviceList);
        },
        [setCurConfig],
    );

    useEffect(() => {
        LocalStorage.inst.setObj('allConfig', allConfig);
    }, [allConfig]);

    useEffect(() => {
        LocalStorage.inst.setStr('curConfig', curConfig || defalutConfigName);
    }, [curConfig]);

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

    useEffect(() => {
        saveInLocalCache({ serviceList });
    }, [saveInLocalCache, serviceList]);

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
                serviceList,
                updateServiceList,
                curConfig,
                setCurConfig,
                allConfig,
                addConfig,
                switchConfig,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
