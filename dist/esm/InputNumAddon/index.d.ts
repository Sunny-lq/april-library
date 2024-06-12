import React from 'react';
import type { InputNumberProps } from 'antd/lib/input-number';
import './index.less';
interface InputNumAddonProps extends InputNumberProps {
    addonBefore?: string | React.ReactNode;
    addonAfter?: string | React.ReactNode;
    style?: React.CSSProperties;
}
export default function InputNumAddon(props: InputNumAddonProps): React.JSX.Element;
export {};
