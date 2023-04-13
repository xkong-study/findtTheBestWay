"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyCombobox;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@headlessui/react");
var _antdMobile = require("antd-mobile");
var _solid = require("@heroicons/react/20/solid");
var _all = require("react-icons/all");
var _api = require("@react-google-maps/api");
var _reactRouterDom = require("react-router-dom");
var _antdMobileIcons = require("antd-mobile-icons");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var location = [{
  id: 1,
  name: 'Trinity College, 学院绿地 Dublin 2, 爱尔兰'
}, {
  id: 2,
  name: 'Hamilton Building, Westland Row, Dublin 2, 爱尔兰'
}, {
  id: 3,
  name: 'Dorset Street Upper, 都柏林爱尔兰'
}, {
  id: 4,
  name: 'Phoenix Park, Dublin 8, 爱尔兰'
}, {
  id: 5,
  name: 'Dublin Airport (DUB), 都柏林爱尔兰'
}, {
  id: 6,
  name: 'Dublin Zoo, Saint James\' (part of Phoenix Park), Dublin 8, 爱尔兰'
}];
var tabs = [{
  key: 'home',
  title: 'findWay',
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_all.BiMap, {}),
  badge: _antdMobile.Badge.dot
}, {
  key: 'Page2',
  title: 'goOut',
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_all.BiBus, {}),
  badge: '5'
}, {
  key: 'Page3',
  title: 'SaveRoute',
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_all.AiOutlineSave, {}),
  badge: '99+'
}, {
  key: 'personalCenter',
  title: 'Mine',
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobileIcons.UserOutline, {})
}];
function MyCombobox() {
  var navigate = (0, _reactRouterDom.useNavigate)();
  var _useJsApiLoader = (0, _api.useJsApiLoader)({
      id: 'd07532df77f9d9a5',
      googleMapsApiKey: 'AIzaSyBnkc7Kgh9u8ctUta_eHExYGyAyRSqfXzg',
      libraries: ['geometry', 'drawing']
    }),
    isLoaded = _useJsApiLoader.isLoaded;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    query = _useState4[0],
    setQuery = _useState4[1];
  var location1 = (0, _reactRouterDom.useLocation)();
  var pathname = location1.pathname;
  var setRouteActive = function setRouteActive(value) {
    console.log(value);
    navigate("../".concat(value));
  };
  if ((0, _typeof2["default"])(selected) == "object") {
    navigate('/Page4', {
      state: {
        id: "".concat(selected.id),
        name: "".concat(selected.name)
      }
    });
  }
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
    language: "en-GB" // 设置地图的语言为中文
  });

  var filteredLocation = query === '' ? location : location.filter(function (location) {
    return location.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''));
  });
  var Delete = function Delete(value) {
    console.log(value);
  };
  var jump = function jump(props) {
    if (props == 1) {
      navigate('/Page2');
    }
    if (props == 2) {
      navigate('/Page4');
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "h-[100vh] w-[100vw] bg-white",
    children: [isLoaded && /*#__PURE__*/(0, _jsxRuntime.jsx)(_api.GoogleMap, {
      mapContainerStyle: containerStyle,
      center: center,
      zoom: 10,
      options: options
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "fixed top-16 w-full py-2 pl-3 pr-3",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Combobox, {
        value: selected,
        onChange: setSelected,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "relative mt-1",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex space-x-2 ",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_solid.ChevronLeftIcon, {
                className: "h-10 w-5"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Combobox.Input, {
                className: "w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0",
                displayValue: function displayValue(person) {
                  return person.name;
                },
                onChange: function onChange(event) {
                  return setQuery(event.target.value);
                },
                placeholder: "search here"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Combobox.Button, {
              className: "absolute inset-y-0 right-0 flex items-center pr-2",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_solid.MagnifyingGlassIcon, {
                className: "h-5 w-5 text-gray-400",
                "aria-hidden": "true"
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Transition, {
            as: _react.Fragment,
            leave: "transition ease-in duration-100",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            afterLeave: function afterLeave() {
              return setQuery('');
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.Combobox.Options, {
              className: "absolute mt-1 h-800 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex space-x-20 px-10 pb-2 pt-2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
                  className: "w-60",
                  children: "My current location"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_solid.MapIcon, {
                  className: "h-5 w-5",
                  "aria-hidden": "true"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "w-full h-0.5 bg-gray-500 rounded mx-auto my-2"
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex space-x-20 px-10 pb-2 pt-2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
                  className: "w-60",
                  children: "Choose from the map"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Combobox.Button, {
                  className: "h-5 w-5",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_solid.MapPinIcon, {
                    className: "h-5 w-5",
                    "aria-hidden": "true"
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "w-full h-0.5 bg-gray-500 rounded mx-auto my-2"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
                className: "w-60 px-5",
                children: "History/Suggested"
              }), filteredLocation.length === 0 && query !== '' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "relative cursor-default select-none py-2 px-5 text-gray-700 h-full",
                children: "Nothing found."
              }) : filteredLocation.map(function (location) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Combobox.Option, {
                  className: function className(_ref) {
                    var active = _ref.active;
                    return "relative cursor-default select-none py-2  pr-4 ".concat(active ? 'bg-white text-black' : 'text-black');
                  },
                  value: location,
                  children: function children(_ref2) {
                    var selected = _ref2.selected,
                      active = _ref2.active;
                    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        className: "flex space-x-5 px-10 pb-2 pt-2",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_solid.ClockIcon, {
                          className: "h-5 w-5 space-x-3",
                          "aria-hidden": "true"
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          className: "block truncate w-60 ".concat(selected ? 'font-medium' : 'font-normal'),
                          children: location.name
                        }), selected ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          className: "absolute inset-y-0 left-0 flex items-center pl-3 w-200".concat(active ? 'text-white' : 'text-teal-600')
                        }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_solid.XMarkIcon, {
                          className: "h-5 w-5 right-0",
                          "aria-hidden": "true",
                          onClick: function onClick() {
                            return Delete(location.id);
                          }
                        })]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                        className: "w-full h-0.5 bg-gray-500 rounded mx-auto my-2"
                      })]
                    });
                  }
                }, location.id);
              })]
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "rounded-full bg-blue-600 absolute right-6 w-16 h-16 z-10 mt-80 top-32",
        onClick: function onClick() {
          return navigate('/Page4');
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "bg-white w-4 h-4 z-20 rotate-45 mx-auto",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_all.FiCornerUpRight, {
            className: " w-3 h-3 z-30 mx-auto -rotate-45"
          })
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.TabBar, {
      className: "absolute h-30 w-full z-50 bottom-0 bg-white cursor-pointer",
      activeKey: pathname,
      onChange: function onChange(value) {
        return setRouteActive(value);
      },
      children: tabs.map(function (item) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.TabBar.Item, {
          icon: item.icon,
          title: item.title
        }, item.key);
      })
    })]
  });
}