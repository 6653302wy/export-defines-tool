import { open } from '@tauri-apps/api/shell';
import classNames from 'classnames';
import { FC } from 'react';
import GithubIcon from '../../../../../assets/images/github-mark.png';

export const OpenBrowser: FC<{ url: string; classname?: string }> = ({ url, classname }) => {
    return (
        <button style={{ position: 'absolute', bottom: 0, left: 24 }} onClick={async () => open(url)}>
            <img src={GithubIcon} className={classNames('w-6 h-6', classname)} alt="" />
        </button>
    );
};
