import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, DirectionsRenderer } from 'google-maps-react';
import { useDispatch, useSelector } from 'react-redux'
import {RootState} from "../store";
import {BusStop, Route} from "../store/reducer";
function BusDirections(props) {
  const [directions, setDirections] = useState(null);
  const dispatch = useDispatch()
  useEffect(() => {
    const directionsService = new props.google.maps.DirectionsService();

    const request = {
      origin: "San Francisco Downtown", // 起点
      destination: "San Francisco International Airport", // 终点
      travelMode: "TRANSIT", // 交通方式为公共交通
      transitOptions: {
        modes: ["BUS"], // 指定公交模式
      },
    };

    directionsService.route(request, function (result, status) {
      if (status == "OK") {
        dispatch((BusStop(result.routes)))
        const busRoute = result.routes[0]; // 获取第一条路线
        console.log(busRoute);
      } else {
        // 处理错误信息
        console.error("Directions request failed due to " + status);
      }
    });
  }, []);
  const Route = useSelector((state: RootState) => state.user.BusStop)
  console.log(Route)
  return (
    <Map google={props.google} zoom={14}>
      {directions && (
        <DirectionsRenderer
          directions={directions}
          options={{
            polylineOptions: {
              strokeColor: '#007bff',
              strokeOpacity: 0.7,
              strokeWeight: 5,
            },
            markerOptions: {
              visible: true,
            },
            preserveViewport: true,
          }}
        />
      )}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBnkc7Kgh9u8ctUta_eHExYGyAyRSqfXzg',
})(BusDirections);
