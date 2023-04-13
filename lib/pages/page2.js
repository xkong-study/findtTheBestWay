"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Page2;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _api = require("@react-google-maps/api");
var _solid = require("@heroicons/react/24/solid");
var _reactSwipeable = require("react-swipeable");
var _utils = require("../utils/utils");
var _ListContainer = _interopRequireDefault(require("../components/ListContainer"));
var _FavouriteLocation = require("../components/FavouriteLocation");
var _Divider = _interopRequireDefault(require("../components/Divider"));
var _solid2 = require("@heroicons/react/20/solid");
var _reactRouterDom = require("react-router-dom");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var SlidePanelState = /*#__PURE__*/function (SlidePanelState) {
  SlidePanelState[SlidePanelState["Open"] = 0] = "Open";
  SlidePanelState[SlidePanelState["Midway"] = 1] = "Midway";
  return SlidePanelState;
}(SlidePanelState || {});
var slidePanelStateToTranslate = function slidePanelStateToTranslate(state) {
  switch (state) {
    case SlidePanelState.Open:
      return "translate-y-[10%]";
    case SlidePanelState.Midway:
      return "translate-y-[70%]";
  }
};
function Page2() {
  var _useJsApiLoader = (0, _api.useJsApiLoader)({
      id: 'd07532df77f9d9a5',
      googleMapsApiKey: 'AIzaSyBnkc7Kgh9u8ctUta_eHExYGyAyRSqfXzg',
      libraries: ['geometry', 'drawing']
    }),
    isLoaded = _useJsApiLoader.isLoaded;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var _useState = (0, _react.useState)(SlidePanelState.Midway),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    slidePanelState = _useState2[0],
    setSlidePanelState = _useState2[1];
  var panelRef = (0, _react.useRef)(null);
  var handlers = (0, _reactSwipeable.useSwipeable)({
    onSwipedUp: function onSwipedUp() {
      return slidePanelState === SlidePanelState.Midway && setSlidePanelState(SlidePanelState.Open);
    },
    onSwipedDown: function onSwipedDown() {
      return slidePanelState === SlidePanelState.Open && setSlidePanelState(SlidePanelState.Midway);
    }
  });
  var refPassthrough = function refPassthrough(el) {
    handlers.ref(el);
    panelRef.current = el;
  };
  var containerStyle = {
    width: screen.width,
    height: screen.height
  };
  var center = {
    lat: 53.49332,
    lng: -6.31718
  };
  var options = _objectSpread(_objectSpread({}, {
    zoomControl: true,
    streetViewControl: false
  }), {}, {
    language: "en-GB"
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "relative h-[100vh] w-full overflow-hidden",
    children: [isLoaded && /*#__PURE__*/(0, _jsxRuntime.jsx)(_api.GoogleMap, {
      mapContainerStyle: containerStyle,
      center: center,
      zoom: 10,
      options: options
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({}, handlers), {}, {
      className: (0, _utils.classNames)("absolute top-0 h-full w-full rounded-t-3xl bg-white", "transition-transform duration-500 ease-in-out", slidePanelStateToTranslate(slidePanelState)),
      ref: refPassthrough,
      id: "dropbox",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "w-6 h-2 bg-gray-500 rounded mx-auto my-2"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "px-4",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "w-full space-y-1",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-col",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_solid2.ChevronLeftIcon, {
              className: "h-10 w-8",
              "aria-hidden": "true",
              onClick: function onClick() {
                return navigate(-1);
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              className: "inline-flex space-x-2 items-baseline my-2",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
                className: "text-black text-left text-xl",
                children: "Favourites"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "p-[0.8px] rounded-full ring-2 ring-amber-300 ",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_solid.SparklesIcon, {
                  className: "h-4 w-4 text-amber-500"
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-sm text-gray-400 -translate-y-2",
              children: "Locations you saved as favourites"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex justify-between space-x-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FavouriteLocation.FavouriteLocation, {
              name: "Bachelors Walk",
              time: "18:43",
              distance: "2.4"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FavouriteLocation.FavouriteLocation, {
              name: "Stephen's Green",
              time: "19:02",
              distance: "1.7"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider["default"], {
            dividerTitle: "Suggestions"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListContainer["default"], {})]
        })
      })]
    }))]
  });
}