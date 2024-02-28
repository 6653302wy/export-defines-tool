import { Input, Switch } from '@arco-design/web-react';
import classNames from 'classnames';
import { FC, ReactElement, useContext } from 'react';
import { GlobalContext } from '../../../../../../store/globalStore';

export const CustomRequestOption: FC = (): ReactElement => {
    const { customRequest, updateCustomRequestInfo } = useContext(GlobalContext);

    return (
        <div>
            <div className="flex items-center mb-2">
                <p className="mr-2">自定义请求代码</p>
                <Switch checked={customRequest.opend} onChange={(value) => updateCustomRequestInfo({ opend: value })} />
                <p className="ml-2 text-[#87888F] text-[12px] ">
                    注：此选项可配置自己项目中的请求代码。默认不开启，并使用axios请求。
                </p>
            </div>

            <div
                className={classNames('flex items-center mb-4', {
                    'hidden text-[#87888F]': !customRequest.opend,
                    block: customRequest.opend,
                })}
            >
                <span className="mr-2 w-20">import代码</span>
                <Input
                    style={{ width: 460 }}
                    placeholder='import axios from "axios";'
                    className="ml-1 mr-4"
                    value={customRequest?.importCode || ''}
                    onChange={(value) => updateCustomRequestInfo({ importCode: value })}
                    disabled={!customRequest.opend}
                />
            </div>

            <div
                className={classNames('flex items-center mb-4', {
                    hidden: !customRequest.opend,
                    block: customRequest.opend,
                })}
            >
                <span className="mr-2 w-20">请求代码</span>
                <Input.TextArea
                    style={{ width: 460 }}
                    autoSize={{ minRows: 2, maxRows: 4 }}
                    placeholder={`axios({
                        url: @url,
                        method: @method,
                        data: @data,
                        headers: { 'content-type': @contentType },
                      })`}
                    value={customRequest?.requestCode || ''}
                    className="ml-1 mr-4"
                    onChange={(value) => updateCustomRequestInfo({ requestCode: value })}
                    disabled={!customRequest.opend}
                />
            </div>
        </div>
    );
};

CustomRequestOption.displayName = 'CustomRequestOption';
