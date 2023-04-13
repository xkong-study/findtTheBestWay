"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactUnicons = require("@iconscout/react-unicons");
var _reactRouterDom = require("react-router-dom");
var _jsxRuntime = require("react/jsx-runtime");
function Work_Home(props) {
  console.log(props);
  var navigate = (0, _reactRouterDom.useNavigate)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex items-center justify-between -mx-2",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex space-x-2",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactUnicons.UilCompass, {
        className: "h-12 w-12 text-blue-600 p-2 bg-blue-100 rounded-full",
        onClick: function onClick() {
          return navigate('/Page4', {
            state: {
              id: 1,
              name: "".concat(props.props)
            }
          });
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("dt", {
          className: " text-base",
          style: {
            width: "13rem"
          },
          children: props.props
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("dl", {
          className: " text-sm text-gray-500",
          children: "Capel Street,Rotunda"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {})]
  });
}
var _default = Work_Home;
exports["default"] = _default;