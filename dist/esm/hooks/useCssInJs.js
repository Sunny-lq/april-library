import { useStyleRegister } from '@ant-design/cssinjs';
import { theme } from 'antd';
var useToken = theme.useToken;
export var useCssInJs = function useCssInJs(params) {
  var _useToken = useToken(),
    theme = _useToken.theme,
    token = _useToken.token,
    hashId = _useToken.hashId;
  // @ts-ignore
  var ss = theme;
  var wrapSSR = useStyleRegister({
    theme: ss,
    token: token,
    hashId: hashId,
    path: ["".concat(params === null || params === void 0 ? void 0 : params.prefix)]
  }, function () {
    var _params$styleFun;
    return [params === null || params === void 0 || (_params$styleFun = params.styleFun) === null || _params$styleFun === void 0 ? void 0 : _params$styleFun.call(params, params === null || params === void 0 ? void 0 : params.prefix, token)];
  });
  return {
    hashId: hashId,
    wrapSSR: wrapSSR
  };
};