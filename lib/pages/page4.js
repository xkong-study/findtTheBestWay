"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _solid = require("@heroicons/react/20/solid");
var _ai = require("react-icons/ai");
var _all = require("react-icons/all");
var _TimeSelector = _interopRequireDefault(require("../components/TimeSelector"));
var _reactRedux = require("react-redux");
var _reducer = require("../store/reducer");
var _fc = require("react-icons/fc");
var _antdMobile = require("antd-mobile");
var _moment = _interopRequireDefault(require("moment"));
var _reactRouterDom = require("react-router-dom");
var _PlaceSearch = _interopRequireDefault(require("./PlaceSearch"));
var _api = require("@react-google-maps/api");
var _Load = _interopRequireDefault(require("./Load"));
var _BikeMap = _interopRequireDefault(require("./BikeMap"));
var _DrivingMap = _interopRequireDefault(require("./DrivingMap"));
var _BusMap = _interopRequireDefault(require("./BusMap"));
var _OtherOption = _interopRequireDefault(require("../components/OtherOption"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var libraries = ['places'];
function SearchPlace(props) {
  var hidden = (0, _reactRedux.useSelector)(function (state) {
    return state.user.value;
  });
  var navigate = (0, _reactRouterDom.useNavigate)();
  (0, _react.useEffect)(function () {
    if (hidden == 'hidden') {
      setVisible_bg(false);
      console.log(visible_bg);
    } else {
      setVisible_bg(true);
      console.log(visible_bg);
    }
  }, [hidden]);
  var location = (0, _reactRouterDom.useLocation)();
  var placeHolder;
  if (location.state != null) {
    placeHolder = location.state.name;
  } else {
    placeHolder = 'choose destination';
  }
  var _useState = (0, _react.useState)( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "w-3 h-3 bg-blue-500 rounded-full border-2"
    })),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    icons = _useState2[0],
    setIcons = _useState2[1];
  var _useState3 = (0, _react.useState)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_solid.MapPinIcon, {
      className: "bg-red w-4 h-4 mt-2 -mx-0.5"
    })),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    icon2 = _useState4[0],
    setIcon2 = _useState4[1];
  var _useState5 = (0, _react.useState)('none'),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    show = _useState6[0],
    setShow = _useState6[1];
  var _useState7 = (0, _react.useState)('none'),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    visible = _useState8[0],
    setVisible = _useState8[1];
  var _useState9 = (0, _react.useState)('none'),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    visible1 = _useState10[0],
    setVisible1 = _useState10[1];
  var _useState11 = (0, _react.useState)('none'),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    visible2 = _useState12[0],
    setVisible2 = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    visible_bg = _useState14[0],
    setVisible_bg = _useState14[1];
  var _useState15 = (0, _react.useState)('none'),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    MapShow = _useState16[0],
    setMapShow = _useState16[1];
  var _useState17 = (0, _react.useState)(''),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    tab = _useState18[0],
    setTab = _useState18[1];
  var _useState19 = (0, _react.useState)(true),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    flag = _useState20[0],
    setFlag = _useState20[1];
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useState21 = (0, _react.useState)(0),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    id = _useState22[0],
    setId = _useState22[1];
  var ChangeTab = function ChangeTab(props) {
    setId(props);
    setMapShow('none');
    console.log(props);
  };
  var Timer = function Timer() {
    hidden == 'hidden' ? dispatch((0, _reducer.incrementByAmount)('block')) : dispatch((0, _reducer.incrementByAmount)('hidden'));
    if (hidden == 'hidden') {
      setVisible_bg(true);
      dispatch((0, _reducer.incrementByHidden)('true'));
    } else {
      setVisible_bg(false);
      dispatch((0, _reducer.incrementByHidden)('false'));
    }
  };
  var exchange = function exchange() {
    console.log(origin);
    if (origin == origin) {
      console.log(origin);
      setOrigin(destination);
      setDestination(origin);
    } else {
      setOrigin(origin);
      setDestination(destination);
    }
    if (flag == true) {
      setFlag(false);
      setIcons( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "w-3 h-3 bg-white-500 rounded-full border-2"
      }));
      setIcon2( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "w-3 h-3 bg-blue-500 rounded-full border-2 mt-3"
      }));
    }
    if (flag != true) {
      setFlag(true);
      setIcons( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "w-3 h-3 bg-blue-500 rounded-full border-2"
      }));
      setIcon2( /*#__PURE__*/(0, _jsxRuntime.jsx)(_solid.MapPinIcon, {
        className: "bg-red w-4 h-4 mt-2 -mx-0.5"
      }));
    }
  };
  var choose = function choose() {
    if (show == 'none') {
      setShow('block');
    } else {
      setShow('none');
    }
  };
  (0, _react.useEffect)(function () {
    console.log(tab);
  }, [tab]);
  var Selector = function Selector(props) {
    if (visible == 'none') {
      setVisible('block');
      setTab(props);
    } else {
      setVisible('none');
    }
  };
  var Selector1 = function Selector1(props) {
    if (visible1 == 'none') {
      setVisible1('block');
      setTab(props);
    } else {
      setVisible1('none');
    }
  };
  var Selector2 = function Selector2(props) {
    if (visible2 == 'none') {
      setVisible2('block');
      setTab(props);
    } else {
      setVisible2('none');
    }
  };
  var Show = (0, _reactRedux.useSelector)(function (state) {
    return state.user.time;
  });
  var Bike = (0, _reactRedux.useSelector)(function (state) {
    return state.user.bike;
  });
  var Drive = (0, _reactRedux.useSelector)(function (state) {
    return state.user.drive;
  });
  var Bus = (0, _reactRedux.useSelector)(function (state) {
    return state.user.bus;
  });
  var BusNumber = (0, _reactRedux.useSelector)(function (state) {
    return state.user.shortTime;
  });
  var arrive_Time = (0, _reactRedux.useSelector)(function (state) {
    return state.user.arrive_Time;
  });
  var StopName = (0, _reactRedux.useSelector)(function (state) {
    return state.user.StopName;
  });
  var BusStop = (0, _reactRedux.useSelector)(function (state) {
    return state.user.BusStop;
  });
  console.log(BusStop);
  var original;
  if (placeHolder != null) {
    original = placeHolder;
  } else {
    original = 'Origin';
  }
  var _useState23 = (0, _react.useState)('Origin'),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    origin = _useState24[0],
    setOrigin = _useState24[1];
  var _useState25 = (0, _react.useState)(original),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    destination = _useState26[0],
    setDestination = _useState26[1];
  var _useState27 = (0, _react.useState)({}),
    _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
    geocodeOrigin = _useState28[0],
    setGeocodeOrigin = _useState28[1];
  var _useState29 = (0, _react.useState)([]),
    _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
    geocodeDestination = _useState30[0],
    setGeocodeDestination = _useState30[1];
  var _useState31 = (0, _react.useState)(0),
    _useState32 = (0, _slicedToArray2["default"])(_useState31, 2),
    route = _useState32[0],
    setRoute = _useState32[1];
  var array_Time = [];
  var stations = [];
  var busNumber = [];
  var arriveTime = [];
  var walking = [];
  BusStop.map(function (item) {
    console.log(item);
    var walks = [];
    var route = item;
    var leg = route.legs[0];
    var duration = item.legs[0].duration.text;
    array_Time.push(duration);
    var steps = leg.steps;
    for (var i = 0; i < steps.length; i++) {
      if (steps[i].travel_mode == 'TRANSIT') {
        var transit = steps[i].transit;
        stations.push(transit.departure_stop.name);
        busNumber.push(transit.line.short_name);
        arriveTime.push(transit.arrival_time.text);
      }
      if (steps[i].travel_mode == 'WALKING') {
        var walk = steps[i].duration;
        walks.push(walk);
      }
    }
    walking.push(walks);
  });
  var WalkingTotal = 0;
  var regex = /\d+/g;
  var number = null;
  walking.map(function (item, id) {
    var cur = Number(item[0].text.match(regex)) + Number(item[1].text.match(regex));
    if (cur > WalkingTotal) {
      WalkingTotal = cur;
      number = id;
    }
  });
  var LessWalking = Infinity;
  var walking_id = null;
  walking.map(function (item, id) {
    var cur = Number(item[0].text.match(regex)) + Number(item[1].text.match(regex));
    if (cur < LessWalking) {
      LessWalking = cur;
      walking_id = id;
    }
  });
  var showRoute = function showRoute(params) {
    console.log(params);
    setRoute(params);
    if (MapShow == 'none') {
      setMapShow('show');
    } else {
      setMapShow('none');
    }
    console.log(show);
  };
  // ------------- required google places setting -----------
  var _useLoadScript = (0, _api.useLoadScript)({
      googleMapsApiKey: 'AIzaSyBnkc7Kgh9u8ctUta_eHExYGyAyRSqfXzg',
      libraries: libraries
    }),
    isLoaded = _useLoadScript.isLoaded,
    loadError = _useLoadScript.loadError;
  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';
  var getOrigin = function getOrigin(ref) {
    console.log('ref origin', ref);
    if (ref) {
      setGeocodeOrigin(ref);
    }
  };
  var getDestination = function getDestination(ref) {
    console.log('ref Destination', ref);
    if (ref) {
      setGeocodeDestination(ref);
    }
  };
  var date = new Date();
  var currentMinutes = date.getMinutes();
  var newMinutes = currentMinutes + parseInt(Show.replace(/[^0-9]/g, ""));
  date.setMinutes(newMinutes);
  var dateBike = new Date();
  var newBikeMinutes = currentMinutes + parseInt(Bike.replace(/[^0-9]/g, ""));
  dateBike.setMinutes(newBikeMinutes);
  var dateDrive = new Date();
  var newDriveMinutes = currentMinutes + parseInt(Drive.replace(/[^0-9]/g, ""));
  dateDrive.setMinutes(newDriveMinutes);
  var dateBus = new Date();
  var newBusMinutes = currentMinutes + parseInt(Bus.replace(/[^0-9]/g, ""));
  dateBus.setMinutes(newBusMinutes);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "w-full h-36 bg-white-500 top-0 border border-b-2 border-collapse",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.Mask, {
        visible: visible_bg,
        opacity: "thin",
        className: "z-index: 10 !important absolute !important"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex top-0",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_solid.ChevronLeftIcon, {
            className: "h-10 w-5",
            onClick: function onClick() {
              return navigate(-1);
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "mt-4 mx-4",
            children: [icons, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "w-1 h-1 bg-black rounded-full mx-1 mt-2"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "w-1 h-1 bg-black rounded-full mx-1 mt-1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "w-1 h-1 bg-black rounded-full mx-1 mt-1"
            }), icon2]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-col",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "relative mt-2 mx-1",
              style: {
                width: "60rem"
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PlaceSearch["default"], {
                place: origin,
                setPlace: setOrigin,
                getPlace: getOrigin,
                style: {
                  fontColor: "black"
                }
              }, 1)
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "relative mt-2 mx-1",
              style: {
                width: "60rem"
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PlaceSearch["default"], {
                place: destination,
                setPlace: setDestination,
                getPlace: getDestination
              }, 2)
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_solid.ArrowsUpDownIcon, {
              className: "h-5 w-5 mt-10",
              style: {
                marginLeft: "-41rem",
                cursor: "pointer"
              },
              onClick: exchange
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex flex-row justify-around mt-5",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiFillCar, {
            className: "w-4 h-4 mx-6",
            onClick: function onClick() {
              return ChangeTab(0);
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_all.BiWalk, {
            className: "w-4 h-4 mx-6",
            onClick: function onClick() {
              return ChangeTab(1);
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_all.TbBike, {
            className: "w-4 h-4 mx-6",
            onClick: function onClick() {
              return ChangeTab(2);
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_all.BsBusFrontFill, {
            className: "w-4 h-4 mx-6",
            onClick: function onClick() {
              return ChangeTab(3);
            }
          })]
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "w-full h-14 bg-white-500 top-0 border border-b-2 border-collapse",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-row justify-between",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex flex-row",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "mx-5 mt-4 cursor-pointer",
            onClick: Timer,
            children: [(0, _moment["default"])().calendar().split(' ')[2], " leave"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_solid.ChevronDownIcon, {
            className: "h-5 w-5 mt-4 cursor-pointer -ml-5",
            onClick: Timer
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "mx-5 mt-4 cursor-pointer",
          onClick: choose,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-blue-600",
            children: "route choose"
          })
        })]
      })
    }), show == 'block' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "w-full h-14 bg-white-500 top-0 border border-b-2 border-collapse",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-row justify-start",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "mx-5 mt-4 cursor-pointer",
          onClick: function onClick() {
            return Selector('best');
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: "best route"
          })
        }), visible == 'block' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_fc.FcCheckmark, {
          className: "h-4 w-4 mt-4 -ml-3",
          "aria-hidden": "true"
        }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "mx-5 mt-4 cursor-pointer -mr-0",
          onClick: function onClick() {
            return Selector1('sustainable');
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: "sustainable"
          })
        }), visible1 == 'block' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_fc.FcCheckmark, {
          className: "h-4 w-4 mt-4 ml-2",
          "aria-hidden": "true"
        }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "mx-5 mt-4 cursor-pointer",
          onClick: function onClick() {
            return Selector2('least');
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: "least walk"
          })
        }), visible2 == 'block' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_fc.FcCheckmark, {
          className: "h-4 w-4 mt-4 -ml-3",
          "aria-hidden": "true"
        }) : null]
      })
    }) : null, id == 1 || tab == 'sustainable' && visible1 == 'block' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      onClick: function onClick() {
        return showRoute(1);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "w-full h-36 bg-white-500 border border-b-2 border-collapse",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "mx-5 mt-2",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              children: "Recommend Route"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "mt-2",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex flex-row justify-between",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "flex flex-row mt-5",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_all.BiWalk, {
                  className: "w-4 h-4 mx-5 mr-3"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "mr-5",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                  children: Show
                })
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "mx-5 mt-5",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              children: [(0, _moment["default"])().calendar().split(' ')[2], "-", date.toTimeString()]
            })
          })]
        })
      })
    }) : null, id == 0 && tab != 'sustainable' || tab == 'least' && visible2 == 'block' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      onClick: function onClick() {
        return showRoute(0);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "w-full h-36 bg-white-500 border border-b-2 border-collapse",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "mx-5 mt-2",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              children: "Recommend Route"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "mt-2",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex flex-row justify-between",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "flex flex-row mt-5",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiFillCar, {
                  className: "w-4 h-4 mx-6",
                  onClick: function onClick() {
                    return ChangeTab(0);
                  }
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "mr-5",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                  children: Drive
                })
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "mx-5 mt-5",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              children: [(0, _moment["default"])().calendar().split(' ')[2], "-", dateDrive.toTimeString()]
            })
          })]
        })
      })
    }) : null, id == 2 || tab == 'sustainable' && visible1 == 'block' || tab == 'least' && visible2 == 'block' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      onClick: function onClick() {
        return showRoute(2);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "w-full h-36 bg-white-500 border border-b-2 border-collapse",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "mx-5 mt-2",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              children: "Recommend Route"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "mt-2",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex flex-row justify-between",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "flex flex-row mt-5",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_all.TbBike, {
                  className: "w-4 h-4 mx-6",
                  onClick: function onClick() {
                    return ChangeTab(2);
                  }
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "mr-5",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                  children: Bike
                })
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "mx-5 mt-5",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              children: [(0, _moment["default"])().calendar().split(' ')[2], "-", dateBike.toTimeString()]
            })
          })]
        })
      })
    }) : null, tab == 'sustainable' && visible1 == 'block' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      onClick: function onClick() {
        return showRoute(3);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_OtherOption["default"], {
        duration: array_Time[number],
        station: stations[number],
        busNumber: busNumber[number],
        arriveTime: arriveTime[number],
        walkingTime: walking[number]
      })
    }) : null, tab == 'least' && visible2 == 'block' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      onClick: function onClick() {
        return showRoute(3);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_OtherOption["default"], {
        duration: array_Time[walking_id],
        station: stations[walking_id],
        busNumber: busNumber[walking_id],
        arriveTime: arriveTime[walking_id],
        walkingTime: walking[walking_id]
      })
    }) : null, id == 3 ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      onClick: function onClick() {
        return showRoute(3);
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "mx-5 mt-2",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: "Recommend Route"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "mt-2",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "flex flex-row justify-between",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_all.BsBusFrontFill, {
              className: "w-4 h-4 mx-6 mb-3",
              onClick: function onClick() {
                return ChangeTab(3);
              }
            })
          })
        })]
      }), array_Time.map(function (i, id) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_OtherOption["default"], {
          duration: i,
          station: stations[id],
          busNumber: busNumber[id],
          arriveTime: arriveTime[id],
          walkingTime: walking[id]
        });
      })]
    }) : null, route == 0 && MapShow == 'show' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_DrivingMap["default"], {
      origin: origin,
      destination: destination,
      style: {
        width: "100vw",
        fontColor: "black"
      }
    }) : null, route == 1 && MapShow == 'show' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Load["default"], {
      origin: origin,
      destination: destination,
      style: {
        width: "100vw"
      }
    }) : null, route == 2 && MapShow == 'show' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_BikeMap["default"], {
      origin: origin,
      destination: destination,
      style: {
        width: "100vw"
      }
    }) : null, route == 3 && MapShow == 'show' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_BusMap["default"], {
      origin: origin,
      destination: destination,
      style: {
        width: "100vw"
      }
    }) : null, hidden != 'hidden' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "absolute h-30 w-full z-40 bottom-0",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TimeSelector["default"], {})
    }) : null]
  });
}
var _default = SearchPlace;
exports["default"] = _default;