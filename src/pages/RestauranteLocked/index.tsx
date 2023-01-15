import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { byIdPlace } from "../../services/MainApi/restaurant";
import {
  Box,
  Container,
  Title,
  Column,
  PlaceContainer,
  GoodsTags,
  ColumnLastRatings,
  ContainerGreen,
} from "./style";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import GreenBanner from "../../components/GreenBanner";
import {
  averageById,
  cozyById,
  ingredientSubstitutionById,
  instagrammableFoodById,
  serviceSpeed,
  tastyFoodById,
  welcomingServiceById,
} from "../../services/MainApi/ratings";
import { Checkbox, Rating } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { userFavoriteById } from "../../services/MainApi/favorites";
import { useUser } from "../../store/modules/user";
import CardRating from "../../components/CardRating";
import { Link } from "react-router-dom";
interface Place {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  opening_hours: string;
  image_link: string;
  average_ticket_price: number;
  social_media: string;
  phone: string;
}

function RestaurantLocked() {
  const urlId = window.location.pathname.split("/")[2];
  const [place, setPlace] = useState<Place>();
  const [socials, setSocials] = useState<string>();
  const [value, setValue] = useState<number>(1);

  const [goods, setGoods] = useState<string[]>([]);

  const user = useUser();

  const dataFetchRef = useRef(false);
  useEffect(() => {
    if (dataFetchRef.current) return;
    dataFetchRef.current = true;
    const getData = async () => {
      try {
        const response = await byIdPlace(urlId);
        setPlace(response.data);
        setSocials(response.data.social_media);
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getData();
    const getAverage = async () => {
      try {
        const response = await averageById(urlId);
        setValue(response.data);
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getAverage();
    const getRatingWelcoming = async () => {
      try {
        const response = await welcomingServiceById(urlId);
        if (response.data == "good") {
          setGoods((goods) => [...goods, "Atendimento Acolhedor"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getRatingWelcoming();
    const getIngredientSubstitution = async () => {
      try {
        const response = await ingredientSubstitutionById(urlId);
        if (response.data == "good") {
          setGoods((goods) => [...goods, "Alteração de ingredientes"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getIngredientSubstitution();
    const getInstagrammableFoodById = async () => {
      try {
        const response = await instagrammableFoodById(urlId);
        if (response.data == "good") {
          setGoods((goods) => [...goods, "Instagramável"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getInstagrammableFoodById();
    const getTastyFoodById = async () => {
      try {
        const response = await tastyFoodById(urlId);
        if (response.data == "good") {
          setGoods((goods) => [...goods, "Saboroso"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getTastyFoodById();
    const getCozyById = async () => {
      try {
        const response = await cozyById(urlId);
        if (response.data == "good") {
          setGoods((goods) => [...goods, "Aconchegante"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getCozyById();
    const getServiceSpeed = async () => {
      try {
        const response = await serviceSpeed(urlId);
        if (response.data == "good") {
          setGoods((goods) => [...goods, "Rápido atendimento"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getServiceSpeed();
  }, [setPlace, urlId, user]);

  if (user.isLogged) {
    const getFavorites = async () => {
      try {
        const response = await userFavoriteById(user.token, urlId);
        console.log(response);
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getFavorites();
  }
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  console.log(goods);
  const at = socials?.split("/")[3];
  return (
    <div>
      <Header />
      <PlaceContainer className='main'>
        <Column>
          <div>
            <img src={place?.image_link} alt='Imagem restaurante' />
            <Title>{place?.name}</Title>
          </div>
          <Container>
            <Box>
              <Container>
                <AccessTimeFilledIcon />
                {place?.opening_hours}
              </Container>
              <Rating id='stars' value={value} precision={0.5} readOnly />
              <Container>
                <InstagramIcon />
                {at}
              </Container>
            </Box>
            <Box>
              <div className='favorite_box'>
                <Checkbox
                  {...label}
                  defaultChecked
                  disabled
                  icon={<FavoriteBorder color='error' />}
                  checkedIcon={<Favorite color='error' />}
                />
              </div>
              <p className='favorite_box'>Price</p>
              <Container className='favorite_box'>
                <PhoneIcon />
                {place?.phone}
              </Container>
            </Box>
          </Container>

          <Box>
            <GoodsTags>
              {goods.map((good, index) => (
                <p key={index}>{good}</p>
              ))}
            </GoodsTags>
          </Box>
        </Column>
        <ColumnLastRatings>
          <Box>
            <h2>Últimas avaliações</h2>
            <CardRating
              id='0000000'
              name='Jane Doe'
              image_link='https://s2.static.brasilescola.uol.com.br/be/2020/12/peixe.jpg'
            />
          </Box>
          <ContainerGreen>
            <p>Cadastre-se e saiba mais o que estão dizendo</p>
            <Link id='signup' to='/cadastro'>
              CRIE SUA CONTA
            </Link>
          </ContainerGreen>
        </ColumnLastRatings>
      </PlaceContainer>
    </div>
  );
}

export default RestaurantLocked;
