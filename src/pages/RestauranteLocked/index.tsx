import React, { useEffect, useState } from 'react';
import Header from "../../components/Header"
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { byIdPlace } from '../../services/MainApi/restaurant';
import {Box, Container, Title, Column, PlaceContainer, FavoriteButton} from "./style"
import InstagramIcon from '@mui/icons-material/Instagram'
import PhoneIcon from '@mui/icons-material/Phone'
import GreenBanner from '../../components/GreenBanner';
import { averageById } from '../../services/MainApi/ratings';
import {  Checkbox, Rating } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { colors } from '../../styles/theme';
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
    /* const getFavorites = async () => {
      try {
        const response = await userFavoritesById(urlId);
        console.log()
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getFavorites(); */
    
  }, [setPlace, urlId]);

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
                <Checkbox {...label} icon={<FavoriteBorder color="error"/>}  checkedIcon={<Favorite color="error"/>} />
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
