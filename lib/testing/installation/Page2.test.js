"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = require("@testing-library/react");
var _page = _interopRequireDefault(require("../../pages/page2"));
var _jsxRuntime = require("react/jsx-runtime");
describe("Page2 component", function () {
  test("renders GoogleMap when isLoaded is true", function () {
    // Mock useJsApiLoader hook to return isLoaded as true
    jest.mock("use-js-api-loader", function () {
      return {
        __esModule: true,
        "default": function _default() {
          return {
            isLoaded: true
          };
        }
      };
    });
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_page["default"], {}));
    var mapElement = _react.screen.getByTestId("google-map");
    expect(mapElement).toBeInTheDocument();
  });
  test("opens slide panel when clicking the ChevronLeftIcon", function () {
    // Mock useJsApiLoader hook to return isLoaded as true
    jest.mock("use-js-api-loader", function () {
      return {
        __esModule: true,
        "default": function _default() {
          return {
            isLoaded: true
          };
        }
      };
    });
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_page["default"], {}));
    var chevronIcon = _react.screen.getByLabelText("Chevron Left Icon");
    _react.fireEvent.click(chevronIcon);
    var slidePanel = _react.screen.getByTestId("slide-panel");
    expect(slidePanel).toHaveClass("translate-x-0");
  });
});