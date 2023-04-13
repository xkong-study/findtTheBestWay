"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _api = require("@react-google-maps/api");
var _reactRedux = require("react-redux");
var _reducer = require("../store/reducer");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var libraries = ['places'];
var containerStyle = {
  width: '100vw',
  height: '60vh'
};
function MapWalking(props) {
  console.log(props);
  var origin = props.origin,
    destination = props.destination;
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    response = _useState2[0],
    setResponse = _useState2[1];
  var center = {
    lat: 53.350140,
    lng: -6.266155
  };
  var options = {
    // styles: mapStyle,
    disableDefaultUI: true
  };
  var mapRef = (0, _react.useRef)();
  var onMapLoad = (0, _react.useCallback)(function (map) {
    mapRef.current = map;
  }, []);
  var dispatch = (0, _reactRedux.useDispatch)();
  var directionsCallback = function directionsCallback(googleResponse) {
    if (googleResponse) {
      if (response) {
        if (googleResponse.status === 'OK' && googleResponse.routes.overview_polyline !== response.routes.overview_polyline) {
          setResponse(function () {
            return googleResponse;
          });
        } else {
          console.log('response: ', googleResponse);
        }
      } else {
        if (googleResponse.status === 'OK') {
          setResponse(function () {
            return googleResponse;
          });
          var route = googleResponse.routes[0];
          var leg = route.legs[0];
          var duration = leg.duration.text;
          dispatch((0, _reducer.Walking)(duration));
          console.log(duration);
        } else {
          console.log('response: ', googleResponse);
        }
      }
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_api.GoogleMap, {
      mapContainerStyle: containerStyle,
      center: center,
      zoom: 8,
      options: options,
      onLoad: onMapLoad,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [destination !== '' && origin !== '' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_api.DirectionsService, {
          options: {
            origin: origin,
            destination: destination,
            travelMode: 'WALKING'
          },
          callback: directionsCallback
        }), response !== null && /*#__PURE__*/(0, _jsxRuntime.jsx)(_api.DirectionsRenderer, {
          options: {
            directions: response
          }
        })]
      })
    }, 0)
  });
}
var _default = MapWalking;
exports["default"] = _default;