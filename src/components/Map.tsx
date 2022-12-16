//import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./styles.css"

type Props = {
    latitude: number;
    longitude: number;
}

function Map (props: Props) {
    
    const latitudeProps = props.latitude as number;
    const longitudeProps = props.longitude as number;
    return(
        <div className="App">
            <MapContainer id="map" center={[latitudeProps, longitudeProps]} zoom={16} scrollWheelZoom={false}>
                <TileLayer
                    attribution='<a href="https://www.maptiler.com/copyright/">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright">&copy; OpenStreetMap</a> contributors'
                    url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=bHogJuecsH1hQB7JuPrG"
                />
                <Marker position={[latitudeProps, longitudeProps  ]} >
                    <Popup>
                    Você está aqui! <br /> Gama Academy.
                    </Popup>
                </Marker>
                
            </MapContainer>
        </div>  
    )
}

export default Map