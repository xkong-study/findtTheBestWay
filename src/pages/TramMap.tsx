import React, { useState, useRef, useCallback } from 'react';
import { GoogleMap, DirectionsRenderer, DirectionsService } from '@react-google-maps/api';
import Card from "../components/Card"

const libraries = ['places']
const containerStyle = {
  width: '100vw',
  height: '60vh'
};

function MapTram(props) {
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


  const times = []
  const Vehicle = []
  const Ways = []
  const Cos = []

  const [data, setData] = useState({
    Time: [],
    Veh: [],
    Way: [],
    CostTime:[],
  });
  const updateData = (newData) => {
    setData({
      ...data,
      ...newData
    });
  }
  function directionsCallback(response, status) {
    if (status === 'OK') {
      setResponse(response);
      const routes = response.routes;
      console.log()
      for(let i=0;i<routes.length;i++){
        const steps = routes[i].legs
        for(let i=0;i<steps.length;i++){
          let item = steps[i]
          times.push(item.duration.text)
          let arr = []
          let arr_name = []
          let Costs = []
          item.steps.forEach((i)=>{
            arr.push(i.travel_mode)
            Costs.push(i.duration.text)
            if(i.travel_mode=='TRANSIT') {
              arr_name.push(i.transit.line.short_name)
            }
          })
          Ways.push(arr)
          Vehicle.push(arr_name)
          Cos.push(Costs)
        }
      }
      updateData({
        Time:times,
        Veh: Vehicle,
        Way: Ways,
        CostTime : Cos
      });
    } else {
      console.log('cannot get tram info:', status);
    }
  }


  return (
    <div>
      <div>
        {
          data.Way.map((i,id) => (
            <Card duration={data.Time[id]} TrainNumber={i} icons={data.Veh[id]} costTime={data.CostTime[id]} key={id} bus={data.Veh[id]}/>
          ))
        }
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        options={options}
        onLoad={onMapLoad}
        key={6}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
          {destination !== '' && origin !== '' && (
            <DirectionsService
              options={{
                origin,
                destination,
                travelMode: 'TRANSIT',
                transitOptions: {
                  modes: ['TRAM'],
                  routingPreference: 'FEWER_TRANSFERS'
                },
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


export default MapTram;
