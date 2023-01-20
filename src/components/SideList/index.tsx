import { Title, Wrapper, ResetFilter, Container } from "./styles";
import { listPlace } from "../../services/MainApi/search";
import { useEffect, useState } from "react";
import CardPlace from "../CardPlace";
import { useUser } from "../../store/modules/user";
import { filters } from "../../services/MainApi/filter";
import { removeFilter, useFilter } from "../../store/modules/filter";
import { useDispatch } from "react-redux";
import { useOwner } from "../../store/modules/owner";
import YellowBanner from "../YellowBanner";

interface Place {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  opening_hours: string;
  image_link: string;
  average_ticket_price: number;
  phone: string;
  social_media: string;
}

export default function SideList() {
  const user = useUser();
  const owner = useOwner();
  const [places, setPlaces] = useState<Place[]>([]);

  const filter = useFilter();
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const response = await listPlace();
      setPlaces(response.data);
    } catch (error) {}
  };

  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(filter.search.toLowerCase())
  );

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
    } catch (error) {}
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
      <Title>Restaurantes</Title>
      {filter.isFiltered && places.length === 0 && (
        <p id='text'>
          Não encontramos nenhum restaurante. Tente outras categorias.
        </p>
      )}
      {!user?.isLogged &&
        !owner?.isLogged &&
        filteredPlaces
          .slice(0, 4)
          .map((place, index) => (
            <CardPlace
              id={place.id}
              key={index}
              name={place.name}
              opening_hours={place.opening_hours}
              image_link={place.image_link}
              average_ticket_price={place.average_ticket_price}
              phone={place.phone}
              social_media={place.social_media}
            />
          ))}
      {(user?.isLogged || owner?.isLogged) &&
        filteredPlaces.map((place, index) => {
          if (index === 4) {
            return <YellowBanner key={index} />;
          }
          return (
            <CardPlace
              id={place.id}
              key={index}
              name={place.name}
              opening_hours={place.opening_hours}
              image_link={place.image_link}
              average_ticket_price={place.average_ticket_price}
              phone={place.phone}
              social_media={place.social_media}
            />
          );
        })}
    </Wrapper>
  );
}
