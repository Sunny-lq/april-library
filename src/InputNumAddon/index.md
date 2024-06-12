---
nav:
  title: Components
  path: /components
group: { title: 基础组件, order: 2 }
---


## InputNumAddon

自定义 InputNumber 的前缀和后缀。

```jsx
import React from 'react';
import { InputNumAddon } from 'april-library';

export default () => {
  return <InputNumAddon addonBefore="币种" addonAfter="￥" width="200px" />;
};
```

## api

| 参数        | 说明               | 类型                | 默认值 |
| :---------- | :----------------- | :------------------ | :----- |
| addonBefore | InputNumber 的前缀 | string \| ReactNode | -      |
| addonBefore | InputNumber 的后缀 | string \| ReactNode | -      |
| width       | InputNumber 宽度   | string              | -      |
