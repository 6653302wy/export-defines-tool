// access the pre-bundled global API functions(用配置的withGlobalTauri来使用invoke)
// const { invoke } = window.__TAURI__.tauri
import { FC, Suspense, lazy, useMemo, useState } from 'react';
import { LazyLoading } from '../../components/LazyLoading';

const Generate = lazy(() =>
    import('./components/Generate').then((module) => {
        return { default: module.Generate };
    }),
);

// const Setting = lazy(() =>
//     import('./components/Setting').then((module) => {
//         return { default: module.Setting };
//     }),
// );

export const Home: FC = () => {
    const [curMenu, setCurMenu] = useState('1');

    // const onMenuClick = useCallback((key: string) => {
    //     setCurMenu(key);
    // }, []);

    const MenuPane = useMemo(() => {
        switch (curMenu) {
            case '1':
                return Generate;
            // case '2':
            //     return Setting;

            default:
                return Generate;
        }
    }, [curMenu]);

    // useEffect(() => {
    //     invoke('greet', { name: 'World, this is from react ' })
    //         // `invoke` returns a Promise
    //         .then((response) => console.log(response));
    // }, []);

    return (
        <div
            style={{
                background:
                    'radial-gradient(33% 55% at 93% 18%, rgba(77, 108, 246, 0.15) 0%, rgba(223, 228, 250, 0) 100%), radial-gradient(26% 42% at 4% 87%, rgba(116, 214, 253, 0.2) 4%, rgba(223, 228, 250, 0) 100%), linear-gradient(180deg, rgba(232, 235, 241, 0) 0%, #E8EBF1 20%, #E8EBF1 100%)',
            }}
            className=" w-screen h-screen flex "
        >
            {/* <Menu
                style={{ width: 120, backgroundColor: '#F6F7F9' }}
                mode="vertical"
                defaultSelectedKeys={['1']}
                onClickMenuItem={onMenuClick}
            >
                <Menu.Item key="1">生成</Menu.Item>
                <Menu.Item key="2">配置</Menu.Item>
            </Menu> */}
            <section className="flex-1 pt-2 px-6">
                <Suspense fallback={<LazyLoading />}>
                    <MenuPane />
                </Suspense>
            </section>
        </div>
    );
};
Home.displayName = 'Home';
