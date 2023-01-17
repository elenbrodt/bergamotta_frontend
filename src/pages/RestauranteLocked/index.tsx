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
  ColumnRating,
  StyledRating,
  Wrapped,
  PlaceWrapper,
} from "./style";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  averageById,
  cozyById,
  createRating,
  ingredientSubstitutionById,
  instagrammableFoodById,
  ratingByPlaceId,
  serviceSpeed,
  tastyFoodById,
  welcomingServiceById,
} from "../../services/MainApi/ratings";
import { Checkbox, FormControl, Rating, TextField } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { userFavoriteById } from "../../services/MainApi/favorites";
import { useUser } from "../../store/modules/user";
import CardRating from "../../components/CardRating";
import { Link } from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useForm } from "react-hook-form";
import { Footer } from "../../components/Footer";
import { colors } from "../../styles/theme";

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

interface User {
  name: string;
  image_link: string;
}

interface Comment {
  comment: string;
  general_rating: number;
  user: User;
}

function RestaurantLocked() {
  const urlId = window.location.pathname.split("/")[2];

  const [place, setPlace] = useState<Place>();
  const [socials, setSocials] = useState<string>();
  const at = socials?.split("/")[3];
  const instagram = "https://www.instagram.com/" + at;
  const [value, setValue] = useState<number>(1); //rating stars
  const [price, setPrice] = useState<number>(1);

  const [goods, setGoods] = useState<string[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

  const user = useUser();

  const { register, handleSubmit } = useForm();

  const dataFetchRef = useRef(false);
  useEffect(() => {
    if (dataFetchRef.current) return;
    dataFetchRef.current = true;
    const getData = async () => {
      try {
        const response = await byIdPlace(urlId);
        setPlace(response.data);
        setSocials(response.data.social_media);
        if (response.data.average_ticket_price < 50) {
          setPrice(1);
        }
        if (
          50 >= response.data.average_ticket_price ||
          response.data.average_ticket_price <= 89
        ) {
          setPrice(2);
        } else if (response.data.average_ticket_price > 90) {
          setPrice(3);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getData();
    const getComments = async () => {
      try {
        const response = await ratingByPlaceId(urlId);
        setComments(response.data);
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getComments();
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
        if (response.data === "good") {
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
        if (response.data === "good") {
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
        if (response.data === "good") {
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
        if (response.data === "good") {
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
        if (response.data === "good") {
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
        if (response.data === "good") {
          setGoods((goods) => [...goods, "Rápido atendimento"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getServiceSpeed();
    if (user.isLogged) {
      const getFavorites = async () => {
        try {
          const response = await userFavoriteById(user.findUser.id, urlId);
        } catch (error) {
          alert("Deu algo errado no catch");
        }
      };
      getFavorites();
    }
  }, [setPlace, urlId, user]);

  const postRating = async (
    general_rating: number,
    welcoming_service: boolean,
    ingredient_substitution: boolean,
    instagrammable_food: boolean,
    tasty_food: boolean,
    cozy: boolean,
    service_speed: boolean,
    comment: boolean,
    place_id: string,
    token: string
  ) => {
    const req = {
      general_rating: general_rating,
      welcoming_service: welcoming_service,
      ingredient_substitution: ingredient_substitution,
      instagrammable_food: instagrammable_food,
      tasty_food: tasty_food,
      cozy: cozy,
      service_speed: service_speed,
      comment: comment,
      place_id: urlId,
      token: user.token,
    };
    try {
      const response = await createRating(req);
      console.log(response);
    } catch (error) {
      alert("Deu algo errado no catch");
    }
  };

  const onSubmit = (data: any) => {
    postRating(
      data.general_rating as number,
      data.welcoming_service as boolean,
      data.ingredient_substitution as boolean,
      data.instagrammable_food as boolean,
      data.tasty_food as boolean,
      data.cozy as boolean,
      data.service_speed as boolean,
      data.comment as boolean,
      urlId as string,
      user.token
    );
  };

  const [isWelcoming, setIsWelcoming] = useState(false);
  const handleWelcoming = () => {
    setIsWelcoming(!isWelcoming);
  };
  const [ingredientSubstitution, setIngredientSubstitution] = useState(false);
  const handleIngridientSubstitution = () => {
    setIngredientSubstitution(!ingredientSubstitution);
  };
  const [isInstagrammable, setIsInstagrammable] = useState(false);
  const handleIsInstagrammable = () => {
    setIsInstagrammable(!isInstagrammable);
  };
  const [isTasty, setIsTasty] = useState(false);
  const handleIsTasty = () => {
    setIsTasty(!isTasty);
  };
  const [isCozy, setIsCozy] = useState(false);
  const handleIsCozy = () => {
    setIsCozy(!isCozy);
  };
  const [isServiceSpeed, setIsServiceSpeed] = useState(false);
  const handleIsServiceSpeed = () => {
    setIsServiceSpeed(!isServiceSpeed);
  };

  const [userValue, setUserValue] = useState<number>(1);

  if (user.isLogged) {
    return (
      <div>
        <Header />
        <PlaceContainer className='main'>
          <Column>
            <PlaceWrapper>
              <img src={place?.image_link} alt='Imagem restaurante' />
              <div>
                <Title>{place?.name}</Title>
              </div>
            </PlaceWrapper>
            <Container>
              <Box>
                <Wrapped>
                  <Container>
                    <AccessTimeFilledIcon />
                    {place?.opening_hours}
                  </Container>
                  <div className='favorite_box'>
                    <Checkbox
                      defaultChecked
                      disabled
                      icon={<FavoriteBorder color='error' />}
                      checkedIcon={<Favorite color='error' />}
                    />
                  </div>
                </Wrapped>
                <Wrapped>
                  <Rating id='stars' value={value} precision={0.5} readOnly />
                  <StyledRating
                    value={price}
                    readOnly
                    max={3}
                    className='favorite_box'
                    icon={<AttachMoneyIcon fontSize='inherit' />}
                    emptyIcon={<AttachMoneyIcon fontSize='inherit' />}
                  />
                </Wrapped>
                <Wrapped>
                  <Container>
                    <a href={instagram} className='link_instagram'>
                      <InstagramIcon />
                      {at}
                    </a>
                  </Container>
                  <Container className='favorite_box'>
                    <PhoneIcon />
                    {place?.phone}
                  </Container>
                </Wrapped>
              </Box>
            </Container>
            <Box>
              <GoodsTags>
                {goods.map((good, index) => (
                  <p key={index}>{good}</p>
                ))}
              </GoodsTags>
            </Box>
            <Box>
              <h2>Últimas avaliações</h2>
              {comments.map((comment, index) => {
                return (
                  <CardRating
                    stars={comment.general_rating}
                    name={comment.user.name}
                    key={index}
                    image_link={comment.user.image_link}
                    value={comment.comment}
                  />
                );
              })}
            </Box>
          </Column>
          <ColumnRating>
            <h3>Conte como foi sua experiência</h3>
            <form id='myForm' onSubmit={handleSubmit(onSubmit)}>
              <FormControl {...register("general_rating")}>
                <>
                  <input
                    name='general_rating'
                    type='number'
                    value={userValue}
                    hidden
                    readOnly
                  />
                  <Rating
                    name='general_rating'
                    value={userValue}
                    id='userStars'
                    precision={1}
                    onChange={(_, value) => {
                      setUserValue(value as number);
                    }}
                  />
                </>
              </FormControl>
              <p>O que mais gostou no local</p>
              <GoodsTags>
                <button
                  style={{
                    backgroundColor: isWelcoming ? colors.secondary : "",
                    color: isWelcoming ? "white" : "",
                  }}
                  onClick={handleWelcoming}
                  value={isWelcoming.toString()}
                  {...register("welcoming_service")}
                  type='button'
                >
                  Ambiente acolhedor
                </button>
                <button
                  style={{
                    backgroundColor: ingredientSubstitution
                      ? colors.secondary
                      : "",
                    color: ingredientSubstitution ? "white" : "",
                  }}
                  onClick={handleIngridientSubstitution}
                  type='button'
                  value={ingredientSubstitution.toString()}
                  {...register("ingredient_substitution")}
                >
                  Substituição de ingredientes
                </button>
                <button
                  style={{
                    backgroundColor: isInstagrammable ? colors.secondary : "",
                    color: isInstagrammable ? "white" : "",
                  }}
                  onClick={handleIsInstagrammable}
                  type='button'
                  value={isInstagrammable.toString()}
                  {...register("instagrammable_food")}
                >
                  Instagramável
                </button>
                <button
                  style={{
                    backgroundColor: isTasty ? colors.secondary : "",
                    color: isTasty ? "white" : "",
                  }}
                  onClick={handleIsTasty}
                  type='button'
                  value={isTasty.toString()}
                  {...register("tasty_food")}
                >
                  Saboroso
                </button>
                <button
                  style={{
                    backgroundColor: isCozy ? colors.secondary : "",
                    color: isCozy ? "white" : "",
                  }}
                  onClick={handleIsCozy}
                  type='button'
                  value={isCozy.toString()}
                  {...register("cozy")}
                >
                  Ambiente Aconchegante
                </button>
                <button
                  style={{
                    backgroundColor: isServiceSpeed ? colors.secondary : "",
                    color: isServiceSpeed ? "white" : "",
                  }}
                  onClick={handleIsServiceSpeed}
                  type='button'
                  value={isServiceSpeed.toString()}
                  {...register("service_speed")}
                >
                  Agilidade no Atendimento
                </button>
              </GoodsTags>
              <p>Compartilhe com a gente sua experiência</p>
              <TextField multiline minRows={4} id='outlined-multiline-static' />
              <button id='rating_btn' type='submit'>
                Enviar avaliação
              </button>
            </form>
          </ColumnRating>
        </PlaceContainer>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <PlaceContainer className='main'>
        <Column>
          <PlaceWrapper>
            <img src={place?.image_link} alt='Imagem restaurante' />
            <Title>{place?.name}</Title>
          </PlaceWrapper>
          <Container>
            <Box>
              <Wrapped>
                <Container>
                  <AccessTimeFilledIcon />
                  {place?.opening_hours}
                </Container>
                <div className='favorite_box'>
                  <Checkbox
                    defaultChecked
                    disabled
                    icon={<FavoriteBorder color='error' />}
                    checkedIcon={<Favorite color='error' />}
                  />
                </div>
              </Wrapped>
              <Wrapped>
                <Rating id='stars' value={value} precision={0.5} readOnly />
                <StyledRating
                  value={price}
                  readOnly
                  max={3}
                  className='favorite_box'
                  icon={<AttachMoneyIcon fontSize='inherit' />}
                  emptyIcon={<AttachMoneyIcon fontSize='inherit' />}
                />
              </Wrapped>
              <Wrapped>
                <Container>
                  <InstagramIcon />
                  {at}
                </Container>
                <Container className='favorite_box'>
                  <PhoneIcon />
                  {place?.phone}
                </Container>
              </Wrapped>
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
            {comments.map((comment, index) => {
              return (
                <CardRating
                  stars={comment.general_rating}
                  name={comment.user.name}
                  key={index}
                  image_link={comment.user.image_link}
                  value={comment.comment}
                />
              );
            })}
          </Box>
          <ContainerGreen>
            <p>Cadastre-se e saiba mais o que estão dizendo</p>
            <Link id='signup' to='/cadastro'>
              CRIE SUA CONTA
            </Link>
          </ContainerGreen>
        </ColumnLastRatings>
      </PlaceContainer>
      <Footer></Footer>
    </div>
  );
}

export default RestaurantLocked;
