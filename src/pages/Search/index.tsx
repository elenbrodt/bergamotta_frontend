import { useEffect, useState } from 'react';
import Map from '../../components/Map';
import { Title } from './styles';
import Header from "../../components/Header"
import Rating from "../../components/Rating"
function Home (){
    
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
            <Header/>
            <Title>Bergamotta</Title>
            <Rating/>         
            <Map latitude={latitude} longitude={longitude}
            />
        </div>
    )
}

export default Home