/**
 * 全局store
 */
import { FC, ReactElement, createContext, useState } from 'react';

type GlobalStoreType = {
    outputDir: string;
    setOutputDir: (str: string) => void;
};

export const GlobalContext = createContext({} as GlobalStoreType);

export const GlobalStore: FC<{ children: ReactElement }> = ({ children }) => {
    const [outputDir, setOutputDir] = useState('');

    return <GlobalContext.Provider value={{ outputDir, setOutputDir }}>{children}</GlobalContext.Provider>;
};
