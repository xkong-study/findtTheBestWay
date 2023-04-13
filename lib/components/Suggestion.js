"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _outline = require("@heroicons/react/24/outline");
var _reactRedux = require("react-redux");
var _reducer = require("../store/reducer");
var _antdMobile = require("antd-mobile");
var _jsxRuntime = require("react/jsx-runtime");
function Suggestion(props) {
  var dispatch = (0, _reactRedux.useDispatch)();
  var save = function save() {
    _antdMobile.Dialog.show({
      content: 'Locations categorized into',
      closeOnAction: true,
      actions: [{
        key: 'work',
        text: 'work'
      }, {
        key: 'home',
        text: 'home'
      }, [{
        key: 'cancel',
        text: 'cancel'
      }, {
        key: 'submit',
        text: 'submit',
        bold: true,
        danger: true
      }]],
      onAction: function onAction(event) {
        var clickedKey = event.key;
        if (clickedKey != 'cancel') {
          console.log(clickedKey);
          dispatch((0, _reducer.PlaceClassification)(clickedKey));
          dispatch((0, _reducer.SavePlace)(props.props));
        }
      }
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex items-center justify-between -mx-2",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex space-x-2",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_outline.ClockIcon, {
        className: "h-12 w-12 text-blue-600 p-2 bg-blue-100 rounded-full"
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_outline.HeartIcon, {
        className: "h-10 w-10 text-pink-600 p-2 bg-pink-100 ring-1 ring-pink-600 rounded-full mx-5 -mt-3",
        onClick: save
      })
    })]
  });
}
var _default = Suggestion;
exports["default"] = _default;