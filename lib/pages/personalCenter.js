"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PersonalCenter;
var _react = _interopRequireDefault(require("react"));
var _antdMobile = require("antd-mobile");
var _all = require("react-icons/all");
var _reactRouterDom = require("react-router-dom");
var _antdMobileIcons = require("antd-mobile-icons");
var _jsxRuntime = require("react/jsx-runtime");
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
function PersonalCenter() {
  var navigate = (0, _reactRouterDom.useNavigate)();
  var location1 = (0, _reactRouterDom.useLocation)();
  var pathname = location1.pathname;
  var setRouteActive = function setRouteActive(value) {
    console.log(value);
    navigate("../".concat(value));
  };
  var url = localStorage.getItem("imageUrl");
  var familyName = localStorage.getItem("familyName");
  var givenName = localStorage.getItem("givenName");
  var colors = ['https://developers.google.com/static/maps/images/docs-landing-get-started-hero.png', 'https://nordvpn.com/wp-content/uploads/blog-social-line-vpn-ranking-country-map-1200x628-1.png', 'https://lh3.googleusercontent.com/gYE0KowUZ6rICF8vtgJTWAGv3tr6Nnxh4aaWDLVgQPU0gtU7xGwp0VYT9oDmrAInBRJODEV0SAXWMEboQ1vtsl7OzoF8XPeVmFfVQtk=w450', 'https://ps.w.org/gmap-embed/assets/icon-256x256.jpg?rev=2521598'];
  var items = colors.map(function (color, index) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.Swiper.Item, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "h-60 text-white flex justify-center items-center text-4xl select-none mt-4",
        style: {
          backgroundImage: "url(".concat(color, ")"),
          backgroundSize: "contain"
        },
        children: index + 1
      })
    }, index);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "h-[100vh] w-[100vw] bg-white",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.NavBar, {
      onBack: function onBack() {
        return navigate(-1);
      },
      children: "PersonalCenter"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "ml-5 flex",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: url,
        className: "rounded-full flex-initial w-20"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex-initial w-full ml-6 mt-2 text-xl",
        children: [familyName, givenName, /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          style: {
            color: "gray",
            fontSize: "1rem"
          },
          children: "level:1"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antdMobile.Swiper, {
      autoplay: true,
      children: items
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      src: "https://static.vecteezy.com/system/resources/previews/002/392/527/non_2x/cartoon-illustration-of-open-empty-parcel-box-free-vector.jpg",
      alt: "",
      style: {
        width: "50%",
        height: "30%",
        margin: "0 auto"
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      style: {
        color: "black",
        fontSize: "1rem",
        width: "8rem",
        height: "30%",
        margin: "0 auto"
      },
      children: "Nothing Posted"
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