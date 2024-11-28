import { Input, Message, Modal } from '@arco-design/web-react';
import { FC, ReactElement, useCallback, useContext, useState } from 'react';
import { GlobalContext } from '../../../../store/globalStore';

export const Setting: FC<{ onClose: () => void }> = ({ onClose }): ReactElement => {
    const { setCurConfig, addConfig } = useContext(GlobalContext);
    const [configName, setconfigName] = useState('');

    const onNameInputChange = useCallback((value: string) => {
        if (!value) {
            Message.info('请输入一个名称');
            return;
        }
        setconfigName(value);
    }, []);

    const onSaveConfig = useCallback(() => {
        setCurConfig(configName);
        addConfig(configName);
        onClose();
    }, [addConfig, configName, onClose, setCurConfig]);

    return (
        <Modal
            title="添加配置"
            visible={true}
            onOk={onSaveConfig}
            onCancel={onClose}
            autoFocus={true}
            escToExit={false}
            maskClosable={false}
        >
            <p>配置名称：</p>
            <Input placeholder="输入一个名称" onChange={onNameInputChange} />
        </Modal>
    );
};

Setting.displayName = 'Setting';
