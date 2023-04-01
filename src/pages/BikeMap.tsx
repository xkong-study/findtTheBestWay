import React, { useState, useRef, useCallback } from 'react';
import { GoogleMap, DirectionsRenderer, DirectionsService } from '@react-google-maps/api';
import { useDispatch } from 'react-redux'
import {Bicycling} from "../store/reducer";

const libraries = ['places']
const containerStyle = {
  width: '100vw',
  height: '60vh'
};

function MapBike(props) {
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
  const directionsCallback = (googleResponse) => {
    if (googleResponse) {
      if(response) {
        if (googleResponse.status === 'OK' && googleResponse.routes.overview_polyline !== response.routes.overview_polyline) {
          setResponse(() => googleResponse)
        } else {
          console.log('response: ', googleResponse)
        }
      } else {
        if (googleResponse.status === 'OK') {
          setResponse(() => googleResponse)
          const route = googleResponse.routes[0];
          const leg = route.legs[0];
          const duration = leg.duration.text;
          dispatch((Bicycling(duration)))
          console.log(duration)
        } else {
          console.log('response: ', googleResponse)
        }
      }
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
                travelMode: 'BICYCLING'
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


export default MapBike;
