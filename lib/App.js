"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;
var _react = _interopRequireDefault(require("react"));
var _page = _interopRequireDefault(require("./pages/page5"));
var _reactRouterDom = require("react-router-dom");
var _Login = _interopRequireDefault(require("../src/pages/Login"));
var _Register = _interopRequireDefault(require("./pages/Register"));
var _page2 = _interopRequireDefault(require("./pages/page2"));
var _page3 = _interopRequireDefault(require("./pages/page3"));
var _page4 = _interopRequireDefault(require("./pages/page4"));
var _index = _interopRequireDefault(require("./store/index"));
var _reactRedux = require("react-redux");
var _ScrollToTop = _interopRequireDefault(require("./ScrollToTop"));
var _personalCenter = _interopRequireDefault(require("./pages/personalCenter"));
var _jsxRuntime = require("react/jsx-runtime");
function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRedux.Provider, {
    store: _index["default"],
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.BrowserRouter, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ScrollToTop["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Routes, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
          path: "/home",
          element: document.cookie ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_page["default"], {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Login["default"], {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
          path: "/Page2",
          element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_page2["default"], {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
          path: "/Page3",
          element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_page3["default"], {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
          path: "/Page4",
          element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_page4["default"], {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
          path: "/personalCenter",
          element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_personalCenter["default"], {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
          index: true,
          path: "/",
          element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Login["default"], {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
          index: true,
          path: "/register",
          element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Register["default"], {})
        })]
      })]
    })
  });
}