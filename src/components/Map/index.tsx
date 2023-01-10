//import { useState } from 'react';
import { MapContainer, TileLayer} from 'react-leaflet'
import "./styles.css"
import Points from '../Points';
type City = {
    title: string;
    lat: number;
    lng: number;
    zoom: number;
  };
type MapProps = {
    city: City;
}

function Map (props: MapProps) {

    const {city} = props;   

    return(
        <div  >
            <MapContainer id="map" center={[city.lat, city.lng]} zoom={city.zoom} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=bHogJuecsH1hQB7JuPrG"
                />
                <Points/>
            </MapContainer>
        </div>  
    )
}

export default Map