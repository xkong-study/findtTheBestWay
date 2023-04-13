"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Divider;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function Divider(_ref) {
  var dividerTitle = _ref.dividerTitle;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "absolute inset-0 flex items-center",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "w-full border-t border-gray-300"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "relative flex justify-center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "bg-white px-3 text-lg font-medium text-gray-900",
        children: dividerTitle
      })
    })]
  });
}