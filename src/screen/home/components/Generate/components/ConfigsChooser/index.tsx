import { useTimer } from '@6653302wy/ts-utils';
import { Button, Select, Tooltip } from '@arco-design/web-react';
import { IconPlusCircle } from '@arco-design/web-react/icon';
import { FC, ReactElement, useCallback, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../../../../store/globalStore';
import { Setting } from '../../../Setting';

export const ConfigsChooser: FC = (): ReactElement => {
    const { curConfig, allConfig, switchConfig, savePath, jsonUrl, customRequest, onlyDataExport, serviceList } =
        useContext(GlobalContext);
    const [showSaveConfigModal, setshowSaveConfigModal] = useState(false);
    const [saving, setsaving] = useState(false);
    const { timerOnce } = useTimer();

    const onSaceConfigClick = useCallback(() => {
        setshowSaveConfigModal(true);
    }, [setshowSaveConfigModal]);

    const onSelectChange = useCallback(
        (value: string) => {
            switchConfig(value);
        },
        [switchConfig],
    );

    useEffect(() => {
        setsaving(true);
        timerOnce(() => {
            setsaving(false);
            // Message.info('配置已自动保存！');
        }, 500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [savePath, jsonUrl, customRequest, onlyDataExport, serviceList]);

    return (
        <>
            {showSaveConfigModal && <Setting onClose={() => setshowSaveConfigModal(false)} />}
            <div className="mt-2 ml-3">
                <span className=" mr-2 ">当前配置</span>
                <Select
                    className="mr-2"
                    size={'default'}
                    defaultValue={curConfig}
                    value={curConfig}
                    onChange={onSelectChange}
                    style={{ width: 130 }}
                >
                    {allConfig.map((item) => (
                        <Select.Option key={item} value={item}>
                            {item}
                        </Select.Option>
                    ))}
                </Select>

                <Tooltip content="保存至新配置">
                    <Button
                        onClick={onSaceConfigClick}
                        loading={saving}
                        icon={<IconPlusCircle style={{ fontSize: 16 }} />}
                    ></Button>
                </Tooltip>
            </div>
        </>
    );
};

ConfigsChooser.displayName = 'ConfigsChooser';
