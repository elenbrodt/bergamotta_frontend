import { byIdPlace } from '../../services/MainApi/restaurant';
import { useEffect, useState } from "react";

interface Place {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    opening_hours: string;
    image_link: string;
    average_ticket_price: number;
  }

export default function RestaurantComponent(id:string) {
    
    const [place, setPlace] = useState<Place>()

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await byIdPlace(id);
            setPlace (response.data)
          } catch (error) {
            alert("Deu algo errado no catch");
          }
        };
        getData();
      }, [setPlace,  id]);
  return (
    <h3>
      {place?.name} 
    </h3>
    
  );
}
