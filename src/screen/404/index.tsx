import { FC } from 'react';
import notfoundImg from './assets/404.png';

export const NotFound: FC = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <p className="text-[24px]">页面离家出走啦</p>
            <img className="w-[800px] h-[600px]" src={notfoundImg} alt="" />
        </div>
    );
};
NotFound.displayName = 'NotFound';
