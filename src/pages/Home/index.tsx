import RatingMui from '@mui/material/Rating';
import { useEffect, useState } from 'react';
import Map from '../../components/Map';
import { Title } from './styles';

function Home (){
    const [value, setValue] = useState<number | null>(1);
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            //console.log("Latitude is :", position.coords.latitude);
            //console.log("Longitude is :", position.coords.longitude);
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            console.log("Latitude2 is :", latitude);
            console.log("Longitude2 is :", longitude);
          });
      }, );

    
      
    return(
        <div className="App">
            <Title>Bergamotta</Title>
            <RatingMui
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />            
            <Map latitude={latitude} longitude={longitude}
            />
        </div>
    )
}

export default Home