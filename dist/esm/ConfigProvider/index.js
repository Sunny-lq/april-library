/*
 * @Description: 
 * @Author: April
 * @Date: 2024-05-29 17:21:55
 * @LastEditors: April
 * @LastEditTime: 2024-05-29 17:24:24
 */
import React, { createContext } from 'react';
var defaultConfig = {
  prefix: 'april'
};
export var ConfigContext = /*#__PURE__*/createContext(defaultConfig);
function ConfigProvider() {
  return /*#__PURE__*/React.createElement("div", null, "ConfigProvider");
}
export default ConfigProvider;