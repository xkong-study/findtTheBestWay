"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = OtherOption;
var _all = require("react-icons/all");
var _solid = require("@heroicons/react/20/solid");
var _moment = _interopRequireDefault(require("moment"));
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function OtherOption(_ref) {
  var _walkingTime$;
  var duration = _ref.duration,
    station = _ref.station,
    busNumber = _ref.busNumber,
    arriveTime = _ref.arriveTime,
    walkingTime = _ref.walkingTime;
  var dateBus = new Date();
  var currentMinutes = dateBus.getMinutes();
  var newBusMinutes = currentMinutes + parseInt(duration === null || duration === void 0 ? void 0 : duration.replace(/[^0-9]/g, ""));
  dateBus.setMinutes(newBusMinutes);
  var regex = /\d+/g;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: walkingTime != undefined ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "w-full h-40 bg-white-500 border border-b-8 border-t-8 border-collapse",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "mx-5 mt-2",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: "Options"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "mt-2",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-row justify-between",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex flex-row mt-5",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_all.BiWalk, {
                className: "w-4 h-4 mx-5 mr-3"
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
                style: {
                  backgroundColor: "yellow"
                },
                children: [walkingTime[0].text.match(regex), "min"]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_solid.ChevronRightIcon, {
                className: "h-4 w-4",
                "aria-hidden": "true"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_all.BsBusFrontFill, {
                className: "w-4 h-4 mx-3"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                style: {
                  backgroundColor: "yellow"
                },
                children: busNumber
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_solid.ChevronRightIcon, {
                className: "h-4 w-4",
                "aria-hidden": "true"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_all.BiWalk, {
                className: "w-4 h-4 mx-3"
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
                style: {
                  backgroundColor: "yellow"
                },
                children: [(_walkingTime$ = walkingTime[1]) === null || _walkingTime$ === void 0 ? void 0 : _walkingTime$.text.match(regex), "min"]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "mr-5",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                children: duration
              })
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "mx-5 mt-5",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            children: [(0, _moment["default"])().calendar().split(' ')[2], "-", dateBus.toTimeString()]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "mx-5 mt-1",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            children: ["Arrive time:", arriveTime, " Stop:", station]
          })
        })]
      })
    }) : null
  });
}