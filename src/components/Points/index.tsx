import { useEffect, useState } from "react";
import { listPlace } from "../../services/MainApi/search";
import Markers from "../Markers";

interface Place {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  image_link: string;
  average_ticket_price: number;
  opening_hours: string;
  phone: string;
  social_media: string;
}

function Points() {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await listPlace();
        setPlaces(response.data);
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getData();
  }, [setPlaces]);

  return (
    <>
      <Markers points={places} />
    </>
  );
}
export default Points;
