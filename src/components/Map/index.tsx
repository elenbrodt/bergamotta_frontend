//import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import "./styles.css"
import {Points, City} from "../../types"

type MapProps = {
    city: City;
    points: Points;
}

function Map (props: MapProps) {

    const {city, points} = props;   

    return(
        <div  >
            <MapContainer id="map" center={[city.lat, city.lng]} zoom={city.zoom} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=bHogJuecsH1hQB7JuPrG"
                />
                {points.map(point=>
                    <Marker position={[point.lat, point.lng]}>
                        <Popup>
                            {point.title}
                        </Popup>
                    </Marker>
                )}
                
            </MapContainer>
        </div>  
    )
}

export default Map