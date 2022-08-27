import React,{useState} from 'react'
import { GoogleMap, useLoadScript,Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100vw',
  height: '100vh',
}

const center = {
  lat: 25.027356299498226,
  lng: 121.52512521339065,
}

function MyComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  })
  const [marker,setMarker]=useState([]);

  return isLoaded ? (
    <GoogleMap 
      mapContainerStyle={containerStyle} 
      center={center} 
      zoom={17}
      onClick={(e)=>{
        setMarker(current=>{
          return [...current,{
            lat:e.latLng.lat(),
            lng:e.latLng.lng(),
            time:new Date()
          }]
        })     
      }}
    >
      {/* {marker.map(marker=>
      <Marker key={} />
      )} */}
    
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(MyComponent)
