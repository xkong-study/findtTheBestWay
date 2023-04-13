"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basicColumns = void 0;
exports["default"] = TimeSelector;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _antdMobile = require("antd-mobile");
var _reactRedux = require("react-redux");
var _reducer = require("../store/reducer");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var basicColumns = [[{
  label: 'Monday',
  value: 'Mon'
}, {
  label: 'Tuesday',
  value: 'Tues'
}, {
  label: 'Wednesday',
  value: 'Wed'
}, {
  label: 'Thursday',
  value: 'Thur'
}, {
  label: 'Friday',
  value: 'Fri'
}, {
  label: 'Saturday',
  value: 'Sat'
}, {
  label: 'Sunday',
  value: 'Sun'
}], [{
  label: '00',
  value: '00'
}, {
  label: '01',
  value: '01'
}, {
  label: '02',
  value: '02'
}, {
  label: '03',
  value: '03'
}, {
  label: '04',
  value: '04'
}, {
  label: '05',
  value: '05'
}, {
  label: '06',
  value: '06'
}, {
  label: '07',
  value: '07'
}, {
  label: '08',
  value: '08'
}, {
  label: '09',
  value: '09'
}, {
  label: '10',
  value: '10'
}, {
  label: '11',
  value: '11'
}, {
  label: '12',
  value: '12'
}, {
  label: '13',
  value: '13'
}, {
  label: '14',
  value: '14'
}, {
  label: '15',
  value: '15'
}, {
  label: '16',
  value: '16'
}, {
  label: '17',
  value: '17'
}, {
  label: '18',
  value: '18'
}, {
  label: '19',
  value: '19'
}, {
  label: '20',
  value: '20'
}, {
  label: '21',
  value: '21'
}, {
  label: '22',
  value: '22'
}, {
  label: '23',
  value: '23'
}], [{
  label: '00',
  value: '00'
}, {
  label: '01',
  value: '01'
}, {
  label: '02',
  value: '02'
}, {
  label: '03',
  value: '03'
}, {
  label: '04',
  value: '04'
}, {
  label: '05',
  value: '05'
}, {
  label: '06',
  value: '06'
}, {
  label: '07',
  value: '07'
}, {
  label: '08',
  value: '08'
}, {
  label: '09',
  value: '09'
}, {
  label: '10',
  value: '10'
}, {
  label: '11',
  value: '11'
}, {
  label: '12',
  value: '12'
}, {
  label: '13',
  value: '13'
}, {
  label: '14',
  value: '14'
}, {
  label: '15',
  value: '15'
}, {
  label: '16',
  value: '16'
}, {
  label: '17',
  value: '17'
}, {
  label: '18',
  value: '18'
}, {
  label: '19',
  value: '19'
}, {
  label: '20',
  value: '20'
}, {
  label: '21',
  value: '21'
}, {
  label: '22',
  value: '22'
}, {
  label: '23',
  value: '23'
}, {
  label: '24',
  value: '24'
}, {
  label: '25',
  value: '25'
}, {
  label: '26',
  value: '26'
}, {
  label: '27',
  value: '27'
}, {
  label: '28',
  value: '28'
}, {
  label: '29',
  value: '29'
}, {
  label: '30',
  value: '30'
}, {
  label: '31',
  value: '31'
}, {
  label: '32',
  value: '32'
}, {
  label: '33',
  value: '33'
}, {
  label: '34',
  value: '34'
}, {
  label: '35',
  value: '35'
}, {
  label: '36',
  value: '36'
}, {
  label: '37',
  value: '37'
}, {
  label: '38',
  value: '38'
}, {
  label: '39',
  value: '39'
}, {
  label: '40',
  value: '40'
}, {
  label: '41',
  value: '41'
}, {
  label: '42',
  value: '42'
}, {
  label: '43',
  value: '43'
}, {
  label: '44',
  value: '44'
}, {
  label: '45',
  value: '45'
}, {
  label: '46',
  value: '46'
}, {
  label: '47',
  value: '47'
}, {
  label: '48',
  value: '48'
}, {
  label: '49',
  value: '49'
}, {
  label: '50',
  value: '50'
}, {
  label: '51',
  value: '51'
}, {
  label: '52',
  value: '52'
}, {
  label: '53',
  value: '53'
}, {
  label: '54',
  value: '54'
}, {
  label: '55',
  value: '55'
}, {
  label: '56',
  value: '56'
}, {
  label: '57',
  value: '57'
}, {
  label: '58',
  value: '58'
}, {
  label: '59',
  value: '59'
}]];
exports.basicColumns = basicColumns;
var Day = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
var index = new Date().getDay();
var Week_day = Day[index].toString();
var Hour = new Date().getHours().toString();
var Minute = new Date().getMinutes().toString();
function TimeSelector() {
  var _useState = (0, _react.useState)([Week_day, Hour, Minute]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  console.log(value);
  var Show = (0, _reactRedux.useSelector)(function (state) {
    return state.user.value;
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var Cancel = function Cancel() {
    dispatch((0, _reducer.incrementByAmount)('hidden'));
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: Show == 'block' ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "w-full h-33 flex-none bg-white p-2 border-t-2 border-black",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_antdMobile.CapsuleTabs, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.CapsuleTabs.Tab, {
          title: "NowDay",
          className: "h-16",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.PickerView, {
            columns: basicColumns,
            value: [Week_day, Hour, Minute],
            className: "h-20 -mt-10"
          }, 0)
        }, 'NowDay'), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.CapsuleTabs.Tab, {
          title: "StartTime",
          className: "h-16",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.PickerView, {
            columns: basicColumns,
            value: value,
            onChange: function onChange(val, extend) {
              setValue(val);
              console.log('onChange', val, extend.items);
            },
            className: "h-20 -mt-10"
          }, 1)
        }, 'StartTime'), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.CapsuleTabs.Tab, {
          title: "ArriveTime",
          className: "h-16",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.PickerView, {
            columns: basicColumns,
            value: value,
            onChange: function onChange(val, extend) {
              setValue(val);
              console.log('onChange', val, extend.items);
            },
            className: "h-20 -mt-10"
          }, 2)
        }, 'ArriveTime')]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-row justify-between",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.Button, {
          className: "flex-1",
          onClick: Cancel,
          children: "cancel"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.Button, {
          className: "flex-1",
          children: "finish"
        })]
      })]
    }) : null
  });
}