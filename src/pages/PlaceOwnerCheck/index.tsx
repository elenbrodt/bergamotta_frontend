import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { placeByOwnerId } from "../../services/MainApi/sign_up_place";
import { useOwner } from "../../store/modules/owner";
import logo from "./../../assets/image/logo_vertical.png";
import { MainDiv, Logo, Text, Button } from "./styles";

interface PlaceProps {
  name: string;
  place_types_ids: any[];
  food_types_ids: any[];
  place_profiles_ids: any[];
  city: string;
  state: string;
  country: string;
  zipcode: string;
  district: string;
  street: string;
  place_number: string;
  complement: string;
  image_link: string;
  capacity: number;
  description: string;
  phone: string;
  average_ticket_price: string;
  social_media: string;
  opening_hours: string;
  payment: string;
  owner_id: string;
  id: string;
}

function PlaceOwnerCheck() {
  const ownerData = useOwner();

  const [placeData, setPlace] = useState<PlaceProps>();

  useEffect(() => {
    if (ownerData.isLogged) {
      const getData = async () => {
        try {
          const response = await placeByOwnerId(ownerData.findOwner.id);
          setPlace(response.data);
        } catch (error) {
          console.error(error);
          alert("Deu algo errado no catch 2");
        }
      };
      getData();
    }
  }, [setPlace, ownerData]);

  return (
    <div className='App'>
      <MainDiv>
        <Logo src={logo} alt='' />
        {!placeData?.name && (
          <>
            <Text>
              Cadastre já o seu restaurante, e apareça<br></br> automaticamente
              em nossas buscas
            </Text>
            <Button href='/cadastrorestaurante'>Cadastrar restaurante</Button>
          </>
        )}
        {placeData?.name && (
          <>
            <Text>Você já pussui um restaurante cadastrado</Text>
            <Button href='/'>Retornar</Button>
          </>
        )}
      </MainDiv>
      <Footer></Footer>
    </div>
  );
}

export default PlaceOwnerCheck;
