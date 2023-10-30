import { FC, ReactElement } from 'react';
import logoImg from '../../assets/images/logo.png';

const HeaderLogo = () => {
    return <img className="w-[138px] h-[35px]" src={logoImg} alt="" />;
};

export const AppLayOut: FC<{ children: ReactElement }> = ({ children }) => {
    return (
        <section className="relative">
            <div className="w-full h-[58px] bg-white flex items-center border border-solid border-[#E0E3EB]">
                <HeaderLogo />
            </div>
            <main>{children}</main>
        </section>
    );
};
AppLayOut.displayName = 'AppLayOut';
