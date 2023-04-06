import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState { // 定义初始化状态的类型
  value: string,
  content:string,
  time:string,
  bike:string,
  drive:string,
  bus:string,
  shortTime:number,
  arrive_Time:string,
  StopName:string,
  BusStop:any,
  save:string,
  classification:string,
  route:object
}
const initialState: CounterState = { // 初始化状态
  value: 'hidden',
  content:'true',
  time: '0分钟',
  bike:"0分钟",
  drive:"0分钟",
  bus:"0分钟",
  shortTime:0,
  arrive_Time:"11:20",
  StopName:"",
  BusStop:[],
  save:"",
  classification:"",
  route:null
}

export const counterSlice = createSlice({
  name: 'hidden',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    incrementByHidden: (state, action: PayloadAction<string>) => {
      state.content = action.payload
    },
    Walking:(state,action:PayloadAction<string>)=>{
      state.time = action.payload
    },
    Bicycling:(state,action:PayloadAction<string>)=>{
      state.bike = action.payload
    },
    Driving:(state,action:PayloadAction<string>)=>{
      state.drive = action.payload
    },
    Bus:(state,action:PayloadAction<string>)=>{
      state.bus = action.payload
    },
    Short_name:(state,action:PayloadAction<string>)=>{
      state.shortTime = action.payload
    },
    Arrive_Time:(state,action:PayloadAction<string>)=>{
      state.arrive_Time = action.payload
    },
    StopName:(state,action:PayloadAction<string>)=>{
      state.StopName = action.payload
    },
    BusStop:(state,action:PayloadAction<any>)=>{
      state.BusStop = action.payload
    },
    SavePlace:(state,action:PayloadAction<string>)=>{
      state.save = action.payload
    },
    PlaceClassification:(state,action:PayloadAction<string>)=>{
      state.classification = action.payload
    },
    Route:(state,action:PayloadAction<string>)=>{
      state.route = action.payload
    }
  }
})

export const { incrementByAmount, incrementByHidden,Walking,Bicycling,Driving,Bus,Short_name,Arrive_Time,StopName,BusStop,SavePlace,PlaceClassification,Route } = counterSlice.actions // 导出操作state的喊出
export default counterSlice.reducer // 导出当前reducer在store/index.ts中记性全局挂载（这种也可以不用挂载到全局）
