import React, { useState, useRef, useCallback } from 'react';
import { GoogleMap, DirectionsRenderer, DirectionsService } from '@react-google-maps/api';
import { useDispatch,useSelector } from 'react-redux'
import {Arrive_Time, Bus, BusStop, Short_name, StopName} from "../store/reducer";
import {RootState} from "../store";

const libraries = ['places']
const containerStyle = {
  width: '100vw',
  height: '60vh'
};

function MapBus(props) {
  const { origin, destination } = props;
  const [response, setResponse] = useState(null);

  const center = {
    lat: 53.350140,
    lng: -6.266155
  };

  const options = {
    // styles: mapStyle,
    disableDefaultUI: true
  }

  const mapRef = useRef();
  const onMapLoad = useCallback(map => {
    mapRef.current = map;
  }, []);
  const dispatch = useDispatch()

  const Route = useSelector((state: RootState) => state.user.BusStop)
  console.log(Route)

  const directionsCallback = (googleResponse) => {
    if (googleResponse) {
          setResponse(() => googleResponse)
          dispatch((BusStop(googleResponse.routes)))
          const route = googleResponse.routes[0];
          const leg = route.legs[0];
          const duration = leg.duration.text;
          dispatch((Bus(duration)))
          let steps = googleResponse.routes[0].legs[0].steps;
          console.log(steps)
          for (let i = 0; i < steps.length; i++) {
            if (steps[i].travel_mode == 'TRANSIT') {
              let transit = steps[i].transit;
              dispatch((Short_name(transit.line.short_name)))
              dispatch((Arrive_Time(transit.arrival_time.text)))
              dispatch((StopName(transit.departure_stop.name)))
              console.log('车站：' + transit.departure_stop.name);
              console.log('线路：' + transit.line.short_name);
              console.log('到站时间：' + transit.arrival_time.text);
            }
          }
        } else {
          console.log('response: ', googleResponse)
        }
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        options={options}
        onLoad={onMapLoad}
        key={1}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
          {destination !== '' && origin !== '' && (
            <DirectionsService
              options={{
                origin,
                destination,
                travelMode: 'TRANSIT',
                provideRouteAlternatives: true
              }}
              callback={directionsCallback}
            />
          )}

          {response !== null && (
            <DirectionsRenderer
              options={{
                directions: response
              }}
            />
          )}
        </>
      </GoogleMap>
    </div>
  );
}


export default MapBus;
