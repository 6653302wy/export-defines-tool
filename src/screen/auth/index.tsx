import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { RouterEnum } from '../../router/constans';

/** app的授权逻辑 */
export const Auth: FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(RouterEnum.HOME);
    });

    return <></>;
};
Auth.displayName = 'Auth';
