import { Title, Wrapper, ResetFilter, Container } from "./styles";
import { listPlace } from "../../services/MainApi/search";
import { useEffect, useState } from "react";
import CardPlace from "../CardPlace";
import "./styles.css";
import { useUser } from "../../store/modules/user";
import { filters } from "../../services/MainApi/filter";
import { removeFilter, useFilter } from "../../store/modules/filter";
import { useDispatch } from "react-redux";

interface Place {
  id: string;
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

  const filter = useFilter();
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const response = await listPlace();
      setPlaces(response.data);
    } catch (error) {
      alert("Deu algo errado no catch");
    }
  };

  const getDataFilter = async (
    place_types_ids: any,
    food_types_ids: any,
    place_profiles_ids: any
  ) => {
    const req = {
      place_types_ids: place_types_ids,
      food_types_ids: food_types_ids,
      place_profiles_ids: place_profiles_ids,
    };

    try {
      const response = await filters(req);
      setPlaces(response.data);
      console.log(response.data);
    } catch (error) {
      alert("Deu algo errado no catch");
    }
  };

  useEffect(() => {
    if (!filter.isFiltered) {
      getData();
    }
    if (filter.isFiltered) {
      getDataFilter(
        filter.place_types_ids,
        filter.food_types_ids,
        filter.place_profiles_ids
      );
    }
  }, [filter]);

  const handleClcik = () => {
    dispatch(removeFilter({}));
  };

  return (
    <Wrapper>
      {filter.isFiltered && (
        <Container>
          <ResetFilter onClick={(e) => handleClcik()}>
            Limpar filtro
          </ResetFilter>
        </Container>
      )}
      <Title>Lista de Restaurantes</Title>
      {!user.isLogged &&
        places
          .slice(0, 4)
          .map((place, index) => (
            <CardPlace
              id={place.id}
              key={index}
              name={place.name}
              opening_hours={place.opening_hours}
              image_link={place.image_link}
              average_ticket_price={place.average_ticket_price}
            />
          ))}
      {user.isLogged &&
        places.map((place, index) => (
          <CardPlace
            id={place.id}
            key={index}
            name={place.name}
            opening_hours={place.opening_hours}
            image_link={place.image_link}
            average_ticket_price={place.average_ticket_price}
          />
        ))}
    </Wrapper>
  );
}
