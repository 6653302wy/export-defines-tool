import { Message } from '@arco-design/web-react';
import { exists, removeFile, writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';

const saveTextFile = async (filePath: string, content: string) => {
    // console.log('saveTextFile: ', filePath);
    if (!/^[a-zA-Z]:\\/.test(filePath)) {
        Message.error({
            content: '不支持的文件路径',
            showIcon: true,
            position: 'bottom',
        });
        return;
    }
    const isExist = await exists(filePath, { dir: BaseDirectory.AppData });
    if (isExist) await removeFile(filePath, { dir: BaseDirectory.AppConfig });
    else {
        Message.error({
            content: '文件路径不存在',
            showIcon: true,
            position: 'bottom',
        });
        return;
    }

    await writeTextFile(filePath, content, { dir: BaseDirectory.AppConfig });
};

export const FilerUtils = {
    saveTextFile,
};
