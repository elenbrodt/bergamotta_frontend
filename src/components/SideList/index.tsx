import { Title } from "./styles";
import { listPlace } from "../../services/MainApi/search";
import { useEffect, useState } from "react";
import CardPlace from "../CardPlace";

interface Place {
  name: string;
  latitude: number;
  longitude: number;
  opening_hours: string;
  image_link: string;
  average_ticket_price: number;
}

export default function SideList() {
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
    <div>
      <Title>Lista de Restaurantes</Title>
      {places.map((place, index) => (
        <CardPlace
          key={index}
          name={place.name}
          opening_hours={place.opening_hours}
          image_link={place.image_link}
          average_ticket_price = {place.average_ticket_price}
        />
      ))}
    </div>
  );
}
