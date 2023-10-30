import { ReactElement, ReactNode } from 'react';
import { NotFound } from '../screen/404';
import { Home } from '../screen/home';
import { Login } from '../screen/login';
import { Register } from '../screen/register';
import { RouterEnum } from './constans';

interface RouterInfo {
    path: string;
    title?: string;
    icon?: ReactNode;
    element: ReactElement;
    children?: RouterInfo[];
}
interface RouterType {
    [key: string]: RouterInfo[];
}

export const RoutersMap: RouterType = {
    /** 没有统一layout的路由页面 */
    single: [
        {
            path: RouterEnum.REGISTER,
            element: <Register />,
        },
        {
            path: RouterEnum.LOGIN,
            element: <Login />,
        },
        {
            path: RouterEnum.HOME,
            element: <Home />,
        },
        {
            path: RouterEnum.NOT_FOUND,
            element: <NotFound />,
        },
    ],
    layout: [],
};
