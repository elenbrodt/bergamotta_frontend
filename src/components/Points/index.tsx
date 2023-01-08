import { useEffect, useState } from "react";
import { listPlace } from "../../services/MainApi/search";
import Markers from "../Markers";

interface Place {
    name: string;
    latitude: number;
    longitude: number;
  }

function Points (){

    const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await listPlace();
        setPlaces(response.data);
        console.log(response.data);
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getData();
  }, [setPlaces]);

  return (
    <>
        <Markers points={places}/>
    </>
  )
}
export default Points