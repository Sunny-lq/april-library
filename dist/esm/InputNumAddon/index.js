function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["addonBefore", "addonAfter"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { InputNumber } from 'antd';
import "./index.less";
export default function InputNumAddon(props) {
  var addonBefore = props.addonBefore,
    addonAfter = props.addonAfter,
    restPops = _objectWithoutProperties(props, _excluded);
  var addonBeforeNode = addonBefore ? /*#__PURE__*/React.createElement("span", {
    className: "inputAddon addonBefore"
  }, addonBefore) : null;
  var addonAfterNode = addonAfter ? /*#__PURE__*/React.createElement("span", {
    className: "inputAddon addonAfter"
  }, addonAfter) : null;
  var styleAddon = {};
  if (addonBefore) {
    styleAddon.beforeAddon = {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    };
  }
  if (addonAfter) {
    styleAddon.afterAddon = {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    };
  }
  return /*#__PURE__*/React.createElement("span", {
    className: "groupWrapper",
    style: {
      width: props.width
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "addonWrapper"
  }, addonBeforeNode, /*#__PURE__*/React.createElement(InputNumber, _extends({
    precision: 2,
    min: 0,
    max: 1000000000
  }, restPops, {
    style: _objectSpread(_objectSpread({
      width: '100%'
    }, styleAddon.beforeAddon), styleAddon.afterAddon)
  })), addonAfterNode));
}