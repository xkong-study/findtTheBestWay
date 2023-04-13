"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ListContainer;
var _react = _interopRequireDefault(require("react"));
var _Suggestion = _interopRequireDefault(require("./Suggestion"));
var _jsxRuntime = require("react/jsx-runtime");
function ListContainer() {
  var position = ['Trinity College, 学院绿地 Dublin 2, 爱尔兰', 'Hamilton Building, Westland Row, Dublin 2, 爱尔兰', 'Dorset Street Upper, 都柏林爱尔兰', 'Phoenix Park, Dublin 8, 爱尔兰', 'Dublin Airport (DUB), 都柏林爱尔兰', 'Dublin Zoo, Saint James\' (part of Phoenix Park), Dublin 8, 爱尔兰'];
  var suggestions = position.map(function (item) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
      className: "px-4 py-4 sm:px-6",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Suggestion["default"], {
        props: item
      }, item)
    }, item);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
    role: "list",
    className: "divide-y divide-gray-200",
    children: suggestions
  });
}