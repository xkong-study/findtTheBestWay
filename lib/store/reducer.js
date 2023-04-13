"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.incrementByHidden = exports.incrementByAmount = exports["default"] = exports.counterSlice = exports.Walking = exports.StopName = exports.Short_name = exports.SavePlace = exports.Route = exports.PlaceClassification = exports.Driving = exports.BusStop = exports.Bus = exports.Bicycling = exports.Arrive_Time = void 0;
var _toolkit = require("@reduxjs/toolkit");
var initialState = {
  // 初始化状态
  value: 'hidden',
  content: 'true',
  time: '0分钟',
  bike: "0分钟",
  drive: "0分钟",
  bus: "0分钟",
  shortTime: 0,
  arrive_Time: "11:20",
  StopName: "",
  BusStop: [],
  save: "",
  classification: "",
  route: null
};
var counterSlice = (0, _toolkit.createSlice)({
  name: 'hidden',
  initialState: initialState,
  reducers: {
    incrementByAmount: function incrementByAmount(state, action) {
      state.value = action.payload;
    },
    incrementByHidden: function incrementByHidden(state, action) {
      state.content = action.payload;
    },
    Walking: function Walking(state, action) {
      state.time = action.payload;
    },
    Bicycling: function Bicycling(state, action) {
      state.bike = action.payload;
    },
    Driving: function Driving(state, action) {
      state.drive = action.payload;
    },
    Bus: function Bus(state, action) {
      state.bus = action.payload;
    },
    Short_name: function Short_name(state, action) {
      state.shortTime = action.payload;
    },
    Arrive_Time: function Arrive_Time(state, action) {
      state.arrive_Time = action.payload;
    },
    StopName: function StopName(state, action) {
      state.StopName = action.payload;
    },
    BusStop: function BusStop(state, action) {
      state.BusStop = action.payload;
    },
    SavePlace: function SavePlace(state, action) {
      state.save = action.payload;
    },
    PlaceClassification: function PlaceClassification(state, action) {
      state.classification = action.payload;
    },
    Route: function Route(state, action) {
      state.route = action.payload;
    }
  }
});
exports.counterSlice = counterSlice;
var _counterSlice$actions = counterSlice.actions,
  incrementByAmount = _counterSlice$actions.incrementByAmount,
  incrementByHidden = _counterSlice$actions.incrementByHidden,
  Walking = _counterSlice$actions.Walking,
  Bicycling = _counterSlice$actions.Bicycling,
  Driving = _counterSlice$actions.Driving,
  Bus = _counterSlice$actions.Bus,
  Short_name = _counterSlice$actions.Short_name,
  Arrive_Time = _counterSlice$actions.Arrive_Time,
  StopName = _counterSlice$actions.StopName,
  BusStop = _counterSlice$actions.BusStop,
  SavePlace = _counterSlice$actions.SavePlace,
  PlaceClassification = _counterSlice$actions.PlaceClassification,
  Route = _counterSlice$actions.Route; // 导出操作state的喊出
exports.Route = Route;
exports.PlaceClassification = PlaceClassification;
exports.SavePlace = SavePlace;
exports.BusStop = BusStop;
exports.StopName = StopName;
exports.Arrive_Time = Arrive_Time;
exports.Short_name = Short_name;
exports.Bus = Bus;
exports.Driving = Driving;
exports.Bicycling = Bicycling;
exports.Walking = Walking;
exports.incrementByHidden = incrementByHidden;
exports.incrementByAmount = incrementByAmount;
var _default = counterSlice.reducer; // 导出当前reducer在store/index.ts中记性全局挂载（这种也可以不用挂载到全局）
exports["default"] = _default;