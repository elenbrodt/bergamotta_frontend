import { Title, Wrapper } from "./styles";
import { listPlace } from "../../services/MainApi/search";
import { useEffect, useState } from "react";
import CardPlace from "../CardPlace";
import "./styles.css"
import { useUser } from '../../store/modules/user';

interface Place {
  id:string;
  name: string;
  latitude: number;
  longitude: number;
  opening_hours: string;
  image_link: string;
  average_ticket_price: number;
}

export default function SideList() {
  const user = useUser();
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
    <Wrapper>
      <Title>Lista de Restaurantes</Title>
      {!user.isLogged && places.slice(0,4).map((place, index) => (
        <CardPlace
          id={place.id}
          key={index}
          name={place.name}
          opening_hours={place.opening_hours}
          image_link={place.image_link}
          average_ticket_price = {place.average_ticket_price}
        />
      ))}
      {user.isLogged && places.map((place, index) => (
        <CardPlace
          id={place.id}
          key={index}
          name={place.name}
          opening_hours={place.opening_hours}
          image_link={place.image_link}
          average_ticket_price = {place.average_ticket_price}
        />
      ))}
      
    </Wrapper>
  );
}
