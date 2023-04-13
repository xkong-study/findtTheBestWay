"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Register;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _antdMobile = require("antd-mobile");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Register() {
  var navigate = (0, _reactRouterDom.useNavigate)();
  var _useState = (0, _react.useState)({
      name: '',
      password: ''
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    form = _useState2[0],
    setForm = _useState2[1];
  var handleChange = (0, _react.useCallback)(function (val, name) {
    setForm(function (preVal) {
      return _objectSpread(_objectSpread({}, preVal), {}, (0, _defineProperty2["default"])({}, name, val));
    });
    console.log(form);
  }, [form]);
  var submit = function submit() {
    if (form.password !== ('' || undefined) && form.name !== ('' || undefined)) {
      // axios({
      //     method: 'post',
      //     url: '/api/user/account/login',
      //     data: {
      //         username:form.name,
      //         password:form.password
      //     }
      // })
      //     .then(function (response) {
      // if(response.data.error_message == 'success'){
      navigate('../');
      window.location.reload();
      // }
      // });
    } else {
      alert("userName and password cannot be none");
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "w-full ma   x-w-md space-y-8",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          className: "mx-auto h-60 w-auto",
          src: "https://cdn.pixabay.com/photo/2017/09/29/08/42/gps-2798348_1280.png",
          alt: "Your Company"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "mt-6 text-center text-3xl font-bold tracking-tight text-gray-900",
          children: "Saga"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
        className: "mt-8 space-y-6",
        action: "#",
        method: "POST",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "hidden",
          name: "remember",
          value: "true"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "-space-y-px rounded-md shadow-sm",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.Form.Item, {
            name: "name",
            label: "username",
            rules: [{
              required: true
            }],
            style: {
              height: "10vh"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.Input, {
              style: {
                fontSize: "16px"
              },
              placeholder: "please inout your name",
              value: form.name,
              onChange: function onChange(val) {
                return handleChange(val, 'name');
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.Form.Item, {
            name: "address",
            label: "password",
            rules: [{
              required: true
            }],
            style: {
              height: "50%"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.PasscodeInput, {
              keyboard: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.NumberKeyboard, {}),
              value: form.password,
              onChange: function onChange(val) {
                return val.length == 6 && handleChange(val, 'password');
              }
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "flex items-center justify-between",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              id: "remember-me",
              name: "remember-me",
              type: "checkbox",
              className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              htmlFor: "remember-me",
              className: "ml-2 block text-sm text-gray-900",
              children: "Remember me"
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            type: "submit",
            onClick: submit,
            className: "group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "absolute inset-y-0 left-0 flex items-center pl-3",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
                className: "h-5 w-5 text-indigo-500 group-hover:text-indigo-400",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
                  fillRule: "evenodd",
                  d: "M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z",
                  clipRule: "evenodd"
                })
              })
            }), "back to Login"]
          })
        })]
      })]
    })
  });
}