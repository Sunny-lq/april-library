import React from 'react';
interface Config {
    prefix?: string;
}
export declare const ConfigContext: React.Context<Config>;
declare function ConfigProvider(): React.JSX.Element;
export default ConfigProvider;
