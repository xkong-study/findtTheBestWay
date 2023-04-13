"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FavouriteLocation = void 0;
var _react = _interopRequireDefault(require("react"));
var _outline = require("@heroicons/react/24/outline");
var _solid = require("@heroicons/react/24/solid");
var _utils = require("../utils/utils");
var _jsxRuntime = require("react/jsx-runtime");
var FavouriteLocation = function FavouriteLocation(_ref) {
  var name = _ref.name,
    time = _ref.time,
    distance = _ref.distance,
    className = _ref.className;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _utils.classNames)("w-full text-left bg-sky-200 p-2 rounded-lg flex flex-col space-y-2", className !== null && className !== void 0 ? className : ""),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: "inline-flex justify-between",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "text-blue-900 truncate text-ellipsis w-8/12",
        children: name
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "text-blue-900 w-4/12",
        children: " - ".concat(time)
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex w-full justify-between items-center ",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: "p-1 rounded-full inline-flex items-center space-x-1 bg-white ring-2 ring-blue-700",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "Start"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_outline.MapPinIcon, {
          className: "h-6 w-6 rounded-full text-blue-700"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: "inline-flex space-x-3",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_outline.MapIcon, {
          className: "h-6 w-6 p-1 bg-white ring-2 ring-emerald-500 rounded-full text-emerald-500"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_solid.HeartIcon, {
          className: "h-6 w-6 p-1 bg-white ring-2 ring-pink-500 rounded-full text-pink-500"
        })]
      })]
    })]
  });
};
exports.FavouriteLocation = FavouriteLocation;