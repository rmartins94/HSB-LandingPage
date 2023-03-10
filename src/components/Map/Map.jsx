import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { MapDiv } from "./MapStyle";

const Map = () => {

    const position = {
        lat: -15.789369167711802,
        lng: -47.885143228835325
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_HSB_MAP_API_KEY,
    })

    return <MapDiv>
        {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width:'100%', height:'100%'}}
        center={position}
        zoom={15}
      >
        <Marker position={position}/>
        <></>
      </GoogleMap>
  ) : <></>}
    </MapDiv>
        
    
};

export default Map;

