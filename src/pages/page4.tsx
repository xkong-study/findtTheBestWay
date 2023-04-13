import React, {useEffect, useState} from "react";
import {
  ChevronLeftIcon,
  MapPinIcon,
  ArrowsUpDownIcon,
  ChevronDownIcon,
} from '@heroicons/react/20/solid'
import {AiFillCar} from "react-icons/ai";
import {BiWalk, BsBusFrontFill, TbBike,BiTrain, MdTram} from "react-icons/all"
import TimeSelector from "../components/TimeSelector";
import {useDispatch, useSelector} from 'react-redux'
import { incrementByAmount, incrementByHidden } from "../store/reducer";
import {RootState} from "../store";
import {FcCheckmark} from "react-icons/fc";
import {Mask} from 'antd-mobile'
import moment from "moment";
import {useLocation, useNavigate} from "react-router-dom";
import PlaceSearch from "./PlaceSearch";
import {useLoadScript} from "@react-google-maps/api";
import MapWalking from "./Load";
import BikeMap from "./BikeMap";
import DrivingMap from "./DrivingMap";
import BusMap from "./BusMap";
import OtherOption from "../components/OtherOption";
import TrainMap from "./TrainMap";
import TramMap from "./TramMap";

const libraries = ['places']
function SearchPlace(props) : JSX.Element {
  const hidden = useSelector((state: RootState) => state.user.value)
  const navigate = useNavigate()
  useEffect(() => {
    if (hidden == 'hidden') {
      setVisible_bg(false)
      console.log(visible_bg)
    } else {
      setVisible_bg(true)
      console.log(visible_bg)
    }
  }, [hidden])
  const location = useLocation()
  let placeHolder: string
  if (location.state != null) {
    placeHolder = location.state.name
  } else {
    placeHolder = 'choose destination'
  }
  const [icons, setIcons] = useState(<div className="w-3 h-3 bg-blue-500 rounded-full border-2"></div>)
  const [icon2, setIcon2] = useState(<MapPinIcon className="bg-red w-4 h-4 mt-2 -mx-0.5"/>)
  const [show, setShow] = useState('none');
  const [visible, setVisible] = useState('none');
  const [visible1, setVisible1] = useState('none');
  const [visible2, setVisible2] = useState('none');
  const [visible_bg, setVisible_bg] = useState(false)
  const [MapShow, setMapShow] = useState('none')
  const [tab,setTab] = useState('')
  const [flag,setFlag] = useState(true)
  const dispatch = useDispatch()
  const [id, setId] = useState(0)
  const ChangeTab = (props) => {
    setId(props)
    setMapShow('none')
    console.log(props)
  }

  const Timer = () => {
    hidden == 'hidden' ? dispatch(incrementByAmount('block')) : dispatch(incrementByAmount('hidden'))
    if (hidden == 'hidden') {
      setVisible_bg(true)
      dispatch((incrementByHidden('true')))
    } else {
      setVisible_bg(false)
      dispatch((incrementByHidden('false')))
    }
  }

  const exchange = () => {
    console.log(origin)
    if (origin==origin) {
      console.log(origin)
      setOrigin(destination)
      setDestination(origin)
    }
    else{
      setOrigin(origin)
      setDestination(destination)
    }
    if(flag==true){
      setFlag(false)
      setIcons(<div className="w-3 h-3 bg-white-500 rounded-full border-2"></div>)
      setIcon2(<div className="w-3 h-3 bg-blue-500 rounded-full border-2 mt-3"></div>)
    }
    if(flag!=true){
      setFlag(true)
      setIcons(<div className="w-3 h-3 bg-blue-500 rounded-full border-2"></div>)
      setIcon2(<MapPinIcon className="bg-red w-4 h-4 mt-2 -mx-0.5"/>)
    }
  }
  const choose = () => {
    if (show == 'none') {
      setShow('block')
    } else {
      setShow('none')
    }
  }

  useEffect(()=>{
    console.log(tab)
  },[tab])

  const Selector = (props) => {
    if (visible == 'none') {
      setVisible('block')
      setTab(props)
    } else {
      setVisible('none')
    }
  }

  const Selector1 = (props) => {
    if (visible1 == 'none') {
      setVisible1('block')
      setTab(props)
    } else {
      setVisible1('none')
    }
  }

  const Selector2 = (props) => {
    if (visible2 == 'none') {
      setVisible2('block')
      setTab(props)
    } else {
      setVisible2('none')
    }
  }

  const Show = useSelector((state: RootState) => state.user.time)
  const Bike = useSelector((state: RootState) => state.user.bike)
  const Drive = useSelector((state: RootState) => state.user.drive)
  const Bus = useSelector((state: RootState) => state.user.bus)
  const BusNumber = useSelector((state: RootState) => state.user.shortTime)
  const arrive_Time = useSelector((state: RootState) => state.user.arrive_Time)
  const StopName = useSelector((state: RootState) => state.user.StopName)
  const BusStop = useSelector((state: RootState) => state.user.BusStop)
  console.log(BusStop)

  let original:string
  if(placeHolder!=null){
    original = placeHolder
  }
  else{
    original = 'Origin'
  }
  const [origin, setOrigin] = useState('Origin');
  const [destination, setDestination] = useState(original);
  const [geocodeOrigin, setGeocodeOrigin] = useState({});
  const [geocodeDestination, setGeocodeDestination] = useState([]);
  const [route, setRoute] = useState(0)
  const array_Time = []
  const stations = []
  const busNumber = []
  const arriveTime = []
  const walking = []
  BusStop.map((item) => {
    console.log(item)
    let walks = []
    const route = item;
    const leg = route.legs[0];
    const duration = item.legs[0].duration.text;
    array_Time.push(duration)
    let steps = leg.steps;
    for (let i = 0; i < steps.length; i++) {
      if (steps[i].travel_mode == 'TRANSIT') {
        let transit = steps[i].transit;
        stations.push(transit.departure_stop.name)
        busNumber.push(transit.line.short_name)
        arriveTime.push(transit.arrival_time.text)
      }
      if (steps[i].travel_mode == 'WALKING') {
        let walk = steps[i].duration;
        walks.push(walk)
      }
    }
    walking.push(walks)
  })

  let WalkingTotal = 0
  const regex = /\d+/g
  let number = null
  walking.map((item,id)=>{
     let cur = Number(item[0].text.match(regex))+Number(item[1].text.match(regex))
     if( cur > WalkingTotal){
       WalkingTotal = cur
       number = id
     }
  })

  let LessWalking = Infinity
  let walking_id  = null
  walking.map((item,id)=>{
    let cur = Number(item[0].text.match(regex))+Number(item[1].text.match(regex))
    if(cur<LessWalking){
      LessWalking = cur
      walking_id = id
    }
  })



  const showRoute = (params) => {
    console.log(params)
    setRoute(params)
    if (MapShow == 'none') {
      setMapShow('show')
    } else {
      setMapShow('none')
    }
    console.log(show)
  }
  // ------------- required google places setting -----------
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: 'AIzaSyBnkc7Kgh9u8ctUta_eHExYGyAyRSqfXzg',
    libraries,
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  const getOrigin = (ref) => {
    console.log('ref origin', ref)
    if (ref) {
      setGeocodeOrigin(ref);
    }
  }

  const getDestination = (ref) => {
    console.log('ref Destination', ref)
    if (ref) {
      setGeocodeDestination(ref);
    }
  }
  let date = new Date();
  let currentMinutes = date.getMinutes();
  let newMinutes = currentMinutes + parseInt(Show.replace(/[^0-9]/g, ""));
  date.setMinutes(newMinutes);

  let dateBike = new Date();
  let newBikeMinutes = currentMinutes + parseInt(Bike.replace(/[^0-9]/g, ""));
  dateBike.setMinutes(newBikeMinutes);

  let dateDrive = new Date();
  let newDriveMinutes = currentMinutes + parseInt(Drive.replace(/[^0-9]/g, ""));
  dateDrive.setMinutes(newDriveMinutes)

  let dateBus = new Date();
  let newBusMinutes = currentMinutes + parseInt(Bus.replace(/[^0-9]/g, ""));
  dateBus.setMinutes(newBusMinutes)

  return (
    <div>
      <div className="w-full h-36 bg-white-500 top-0 border border-b-2 border-collapse">
        <Mask
          visible={visible_bg}
          opacity='thin'
          className="z-index: 10 !important absolute !important"
        />
        <div>
          <div className="flex top-0">
            <ChevronLeftIcon className="h-10 w-5" onClick={() => navigate(-1)}/>
            <div className="mt-4 mx-4">
              {icons}
              <div className="w-1 h-1 bg-black rounded-full mx-1 mt-2"></div>
              <div className="w-1 h-1 bg-black rounded-full mx-1 mt-1"></div>
              <div className="w-1 h-1 bg-black rounded-full mx-1 mt-1"></div>
              {icon2}
            </div>
            <div className="flex flex-col">
              <div className="relative mt-2 mx-1" style={{width: "60rem"}}>
                <PlaceSearch place={origin} setPlace={setOrigin} getPlace={getOrigin} key={1} style={{fontColor:"black"}}/>
              </div>
              <div className="relative mt-2 mx-1" style={{width: "60rem"}}>
                <PlaceSearch place={destination} setPlace={setDestination} getPlace={getDestination} key={2}/>
              </div>
            </div>
            <div>
              <ArrowsUpDownIcon className="h-5 w-5 mt-10" style={{marginLeft: "-41rem",cursor:"pointer"}} onClick={exchange}/>
            </div>
          </div>
          <div className="flex flex-row justify-around mt-5 overflow-x-auto">
            <AiFillCar className="w-6 h-6 mx-6" onClick={() => ChangeTab(0)}/>
            <BiWalk className="w-6 h-6 mx-6" onClick={() => ChangeTab(1)}/>
            <TbBike className="w-6 h-6 mx-6" onClick={() => ChangeTab(2)}/>
            <BsBusFrontFill className="w-6 h-6 mx-6" onClick={() => ChangeTab(3)}/>
            <BiTrain className="w-6 h-6 mx-6" onClick={() => ChangeTab(4)}/>
            <MdTram className="w-6 h-6 mx-6" onClick={() => ChangeTab(5)}/>
          </div>
        </div>
      </div>
      <div className="w-full h-14 bg-white-500 top-0 border border-b-2 border-collapse">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div className="mx-5 mt-4 cursor-pointer" onClick={Timer}>
              {moment().calendar().split(' ')[2]} leave
            </div>
            <ChevronDownIcon className="h-5 w-5 mt-4 cursor-pointer -ml-5" onClick={Timer}/>
          </div>
          <div className="mx-5 mt-4 cursor-pointer" onClick={choose}><p className="text-blue-600">route choose</p></div>
        </div>
      </div>
      {
        show == 'block' ?
          <div className="w-full h-14 bg-white-500 top-0 border border-b-2 border-collapse">
            <div className="flex flex-row justify-start">
              <div className="mx-5 mt-4 cursor-pointer" onClick={()=>Selector('best')}>
                <p>best route</p>
              </div>
              {visible == 'block' ? <FcCheckmark className="h-4 w-4 mt-4 -ml-3" aria-hidden="true"/> : null}
              <div className="mx-5 mt-4 cursor-pointer -mr-0" onClick={()=>Selector1('sustainable')}>
                <p>sustainable</p>
              </div>
              {visible1 == 'block' ? <FcCheckmark className="h-4 w-4 mt-4 ml-2" aria-hidden="true"/> : null}
              <div className="mx-5 mt-4 cursor-pointer" onClick={()=>Selector2('least')}>
                <p>least walk</p>
              </div>
              {visible2 == 'block' ? <FcCheckmark className="h-4 w-4 mt-4 -ml-3" aria-hidden="true"/> : null}
            </div>
          </div> : null
      }


      {/*// 走路*/}
      {id == 1 || (tab=='sustainable'&& visible1=='block')?
        <div onClick={() => showRoute(1)}>
          <div className="w-full h-36 bg-white-500 border border-b-2 border-collapse">
            <div className="flex flex-col">
              <div className="mx-5 mt-2"><p>Recommend Route</p></div>
              <div className="mt-2">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row mt-5">
                    <BiWalk className="w-4 h-4 mx-5 mr-3"/>
                  </div>
                  <div className="mr-5"><p>{Show}</p></div>
                </div>
              </div>
              <div className="mx-5 mt-5"><p>{moment().calendar().split(' ')[2]}-{date.toTimeString()}</p>
              </div>
            </div>
          </div>
        </div> : null
      }


      {id == 0 && tab!='sustainable'|| (tab=='least'&& visible2=='block')?
        <div onClick={() => showRoute(0)}>
          <div className="w-full h-36 bg-white-500 border border-b-2 border-collapse">
            <div className="flex flex-col">
              <div className="mx-5 mt-2"><p>Recommend Route</p></div>
              <div className="mt-2">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row mt-5">
                    <AiFillCar className="w-4 h-4 mx-6" onClick={() => ChangeTab(0)}/>
                  </div>
                  <div className="mr-5"><p>{Drive}</p></div>
                </div>
              </div>
              <div className="mx-5 mt-5"><p>{moment().calendar().split(' ')[2]}-{dateDrive.toTimeString()}</p>
              </div>
            </div>
          </div>
        </div> : null
      }

      {id == 2 || (tab=='sustainable'&& visible1=='block')||(tab=='least'&& visible2=='block')?
        <div onClick={() => showRoute(2)}>
          <div className="w-full h-36 bg-white-500 border border-b-2 border-collapse">
            <div className="flex flex-col">
              <div className="mx-5 mt-2"><p>Recommend Route</p></div>
              <div className="mt-2">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row mt-5">
                    <TbBike className="w-4 h-4 mx-6" onClick={() => ChangeTab(2)}/>
                  </div>
                  <div className="mr-5"><p>{Bike}</p></div>
                </div>
              </div>
              <div className="mx-5 mt-5"><p>{moment().calendar().split(' ')[2]}-{dateBike.toTimeString()}</p>
              </div>
            </div>
          </div>
        </div> : null
      }

      {tab=='sustainable'&&visible1=='block' ?
        <div onClick={() => showRoute(3)}>
          <OtherOption duration={array_Time[number]} station={stations[number]} busNumber={busNumber[number]} arriveTime={arriveTime[number]} walkingTime={walking[number]}/>
        </div> : null
      }

      {
        tab=='least'&&visible2=='block'?
          <div onClick={() => showRoute(3)}>
            <OtherOption duration={array_Time[walking_id]} station={stations[walking_id]} busNumber={busNumber[walking_id]} arriveTime={arriveTime[walking_id]} walkingTime={walking[walking_id]}/>
          </div> : null
      }

      {id == 3?
        <div onClick={() => showRoute(3)}>
          <div className="flex flex-col">
            <div className="mx-5 mt-2"><p>Recommend Route</p></div>
            <div className="mt-2">
              <div className="flex flex-row justify-between">
                  <BsBusFrontFill className="w-4 h-4 mx-6 mb-3" onClick={() => ChangeTab(3)}/>
                </div>
              </div>
          </div>
          {
            array_Time.map((i,id) => (
              <OtherOption duration={i} station={stations[id]} busNumber={busNumber[id]} arriveTime={arriveTime[id]} walkingTime={walking[id]}/>
            ))
          }
        </div> : null
      }

      {id == 4?
        <div onClick={() => showRoute(4)}>
          <div className="flex flex-col">
            <div className="mx-5 mt-2"><p>Recommend Route</p></div>
            <div className="mt-2">
              <div className="flex flex-row justify-between">
                <BiTrain className="w-4 h-4 mx-6 mb-3" onClick={() => ChangeTab(4)}/>
              </div>
            </div>
          </div>
        </div> : null
      }

      {id == 5?
        <div onClick={() => showRoute(5)}>
          <div className="flex flex-col">
            <div className="mx-5 mt-2"><p>Recommend Route</p></div>
            <div className="mt-2">
              <div className="flex flex-row justify-between">
                <MdTram className="w-4 h-4 mx-6 mb-3" onClick={() => ChangeTab(5)}/>
              </div>
            </div>
          </div>
        </div> : null
      }

      {
        route == 0 && MapShow == 'show' ?
          <DrivingMap
            origin={origin}
            destination={destination}
            style={{width: "100vw",fontColor:"black"}}
          /> : null
      }
      {
        route == 1 && MapShow == 'show' ?
          <MapWalking
            origin={origin}
            destination={destination}
            style={{width: "100vw"}}
          /> : null
      }
      {
        route == 2 && MapShow == 'show' ?
          <BikeMap
            origin={origin}
            destination={destination}
            style={{width: "100vw"}}
          /> : null
      }
      {
        route == 3 && MapShow == 'show' ?
          <BusMap
            origin={origin}
            destination={destination}
            style={{width: "100vw"}}
          />:null
      }

      {
        route == 4 && MapShow == 'show' ?
          <TrainMap
            origin={origin}
            destination={destination}
            style={{width: "100vw"}}
          />:null
      }

      {
        route == 5 && MapShow == 'show' ?
          <TramMap
            origin={origin}
            destination={destination}
            style={{width: "100vw"}}
          />:null
      }


      {
        hidden != 'hidden' ?
          <div className="absolute h-30 w-full z-40 bottom-0">
            <TimeSelector/>
          </div> : null
      }
    </div>
  )
}
export default SearchPlace;
