import React, { useEffect, useState } from 'react';
import Header from "../../components/Header"
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { byIdPlace } from '../../services/MainApi/restaurant';
import {Box, Container, Title, Column, PlaceContainer, FavoriteButton} from "./style"
import InstagramIcon from '@mui/icons-material/Instagram'
import PhoneIcon from '@mui/icons-material/Phone'
import GreenBanner from '../../components/GreenBanner';
import { averageById, cozyById, ingredientSubstitutionById, instagrammableFoodById, serviceSpeed, tastyFoodById, welcomingServiceById } from '../../services/MainApi/ratings';
import {  Checkbox, Rating } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { userFavoriteById } from '../../services/MainApi/favorites';
import { useUser } from '../../store/modules/user';
interface Place {
  id:string;
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

  const user = useUser();
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await byIdPlace(urlId);
        setPlace(response.data);
        setSocials(response.data.social_media)
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
        console.log(response.data)
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getRatingWelcoming();
    const getIngredientSubstitution = async () => {
      try {
        const response = await ingredientSubstitutionById(urlId);
        console.log(response.data)
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getIngredientSubstitution();
    const getInstagrammableFoodById = async () => {
      try {
        const response = await instagrammableFoodById(urlId);
        console.log(response.data)
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getInstagrammableFoodById();
    const getTastyFoodById = async () => {
      try {
        const response = await tastyFoodById(urlId);
        console.log(response.data)
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getTastyFoodById();
    const getCozyById = async () => {
      try {
        const response = await cozyById(urlId);
        console.log(response.data)
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getCozyById();
    const getServiceSpeed = async () => {
      try {
        const response = await serviceSpeed(urlId);
        console.log(response.data)
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getServiceSpeed();
    
    
    
  }, [setPlace, urlId, user.findUser, user.isLogged, user.token]);

  if (user.isLogged){
    const getFavorites = async () => {
      try {
        const response = await userFavoriteById(user.token, urlId);
        console.log(response)
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getFavorites(); 
  }
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const at = socials?.split("/")[3];
  return (
    <div >
      <Header />
      <PlaceContainer className="main">
        <Column>
          <Box>
            <img src={place?.image_link} alt="Imagem restaurante"/>
            <Title>{place?.name}</Title>
            <Container>
            <Box>
              <Container>
                <AccessTimeFilledIcon/>
                {place?.opening_hours}
              </Container>
              <Rating value={value} precision={0.5} readOnly/>
              <Container>
                <InstagramIcon/>
                {at}
              </Container>
            </Box>
            <Box>
              <div id="favorite"><Checkbox  {...label} icon={<FavoriteBorder color="error"/>}  checkedIcon={<Favorite color="error"/>} /></div>
              <p>Price</p>
              <Container>
                <PhoneIcon/>
                {place?.phone}
              </Container>
            </Box>
            </Container>
          </Box>
          <Box>
            <h3>O que mais curtem no local</h3>
          </Box>
        </Column>
        <Column>
          <Box>
            <h2>Últimas avaliações</h2>
            <p>Card avaliações</p>
            
          </Box>
          <GreenBanner href='/cadastro' id="greenCard"
            title = "Crie sua conta e acesse mais avaliações" btn_text="VER MAIS AVALIAÇÕES"/>
        </Column>
        
      </PlaceContainer>

    </div>
    
  );
}

export default RestaurantLocked;
