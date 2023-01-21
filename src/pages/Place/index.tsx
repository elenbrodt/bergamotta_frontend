import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { byIdPlace } from "../../services/MainApi/place";
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
  RatingComment,
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
import { Checkbox, FormControl, Rating } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  createFavorite,
  deleteFavorite,
  userFavoriteById,
} from "../../services/MainApi/favorites";
import { useUser } from "../../store/modules/user";
import CardRating from "../../components/CardRating";
import { Link } from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useForm } from "react-hook-form";
import { Footer } from "../../components/Footer";
import { colors } from "../../styles/theme";
import InputLogin from "../../components/InputLogin";
import { ResetFilter } from "../../components/SideList/styles";

interface PlaceProps {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  opening_hours: string;
  image_link: string;
  average_ticket_price: number;
  social_media: string;
  phone: string;
  owner_id: string;
  street: string;
  district: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  place_number: string;
  complement: string;
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

const caracteristicas = [
  {
    label: "Atendimento acolhedor",
    value: "welcoming_service",
  },
  {
    label: "Alteração de ingredientes",
    value: "ingredient_substitution",
  },
  {
    label: "Instagramável",
    value: "instagrammable_food",
  },
  {
    label: "Comida gostosa",
    value: "tasty_food",
  },
  {
    label: "Ambiente aconchegante",
    value: "cozy",
  },
  {
    label: "Serviço rápido",
    value: "service_speed",
  },
];

function Place() {
  const urlId = window.location.pathname.split("/")[2];

  const [place, setPlace] = useState<PlaceProps>();
  const [socials, setSocials] = useState<string>();
  const at = socials?.split("/")[3];
  const instagram = "https://www.instagram.com/" + at;

  const [value, setValue] = useState<number>(1); //rating stars
  const [price, setPrice] = useState<number>(1);
  const [userValue, setUserValue] = useState<number>(1); // user rating stars

  const [goods, setGoods] = useState<string[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isFavorite, setIsFavorite] = useState("");
  const [bool, setBool] = useState<boolean>(false);

  const user = useUser();

  const { register, handleSubmit, reset } = useForm();

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
          setGoods((goods) => [...goods, "Atendimento acolhedor"]);
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
          setIsFavorite(response.data.id);
          setBool(true);
        } catch (error: any) {
          setBool(false);
        }
      };
      getFavorites();
    }
  }, [setPlace, setComments]);

  const getComments = async () => {
    try {
      const response = await ratingByPlaceId(urlId);
      setComments(response.data);
    } catch (error) {
      alert("Deu algo errado no catch");
    }
  };
  const postRating = async (comment: string) => {
    const req = {
      general_rating: userValue,
      comment: comment,
      place_id: urlId,
      user_id: user.findUser.id,
      ...caracteristicasValues,
    };
    try {
      const response = await createRating(req);
      getComments();
    } catch (error) {
      alert("Deu algo errado no catch");
    }
  };

  const favoriteCreate = async () => {
    const req = {
      place_id: urlId,
      user_id: user.findUser.id,
    };
    try {
      const response = await createFavorite(req);
    } catch (error) {}
  };

  const favoriteRemove = async () => {
    const req = {
      user_id: user.findUser.id,
      place_id: urlId,
    };
    try {
      const response = await deleteFavorite(req);
    } catch (error) {}
  };

  const [caracteristicasValues, setCaracteristicasValues] = useState<
    Record<string, boolean>
  >({
    welcoming_service: false,
    ingredient_substitution: false,
    instagrammable_food: false,
    tasty_food: false,
    cozy: false,
    service_speed: false,
  });

  const toggleCaracteristicas = (caracteristica: any) => {
    setCaracteristicasValues({
      ...caracteristicasValues,
      [caracteristica]: !caracteristicasValues[caracteristica],
    });
  };

  const onClick = () => {
    setBool(!bool);
    if (isFavorite) {
      favoriteRemove();
    } else {
      favoriteCreate();
    }
  };

  const onSubmit = (data: any) => {
    postRating(data.comment);
  };
  return (
    <div>
      <Header />
      <PlaceContainer className='main'>
        <Column>
          <PlaceWrapper>
            <img src={place?.image_link} alt='Imagem restaurante' />
            <Title>{place?.name}</Title>
            <p id='address'>
              {place?.street}, {place?.place_number}
              {place?.complement}, {place?.district} | {place?.city},{" "}
              {place?.state}
            </p>
          </PlaceWrapper>
          <Container>
            <Box>
              <Wrapped>
                <Container>
                  <AccessTimeFilledIcon />
                  {place?.opening_hours}
                </Container>
                <div className='favorite_box' id='heart'>
                  {!user.isLogged && (
                    <Checkbox
                      disabled
                      icon={<FavoriteBorder color='error' />}
                      checkedIcon={<Favorite color='error' />}
                    />
                  )}
                  {user.isLogged && (
                    <Checkbox
                      icon={<FavoriteBorder color='error' />}
                      checkedIcon={<Favorite color='error' />}
                      checked={bool}
                      onClick={onClick}
                    />
                  )}
                </div>
              </Wrapped>
              <Wrapped>
                <Rating id='stars' value={value} precision={0.5} readOnly />
                <StyledRating
                  value={price}
                  readOnly
                  max={3}
                  id='money_icon'
                  icon={<AttachMoneyIcon fontSize='inherit' />}
                  emptyIcon={<AttachMoneyIcon fontSize='inherit' />}
                />
              </Wrapped>
              <Wrapped>
                <Container>
                  <a
                    href={instagram}
                    target='_blank'
                    className='link_instagram'
                    rel='noreferrer'
                  >
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
          {user.isLogged && (
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
          )}
        </Column>
        {!user.isLogged && (
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
              <p>Crie sua conta e acesse mais avaliações</p>
              <Link id='signup' to='/cadastro'>
                VER MAIS AVALIAÇÕES
              </Link>
            </ContainerGreen>
          </ColumnLastRatings>
        )}
        {user.isLogged && (
          <ColumnRating>
            <h3>Como foi sua experiência</h3>
            <form id='myForm' onSubmit={handleSubmit(onSubmit)}>
              <FormControl {...register("general_rating")}>
                <>
                  <input name='general_rating' type='number' hidden readOnly />
                  <Rating
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
                {caracteristicas.map(({ value, label }) => (
                  <button
                    key={value}
                    style={{
                      backgroundColor: caracteristicasValues[value]
                        ? colors.secondary
                        : "",
                      color: caracteristicasValues[value] ? "white" : "",
                    }}
                    onClick={() => toggleCaracteristicas(value)}
                    type='button'
                  >
                    {label}
                  </button>
                ))}
              </GoodsTags>
              <p>Compartilhe com a gente sua experiência</p>
              <FormControl {...register("comment")}>
                <RatingComment
                  name='comment'
                  placeholder='Faça um comentário'
                  rows={3}
                />
              </FormControl>
              <button id='rating_btn' type='submit'>
                Enviar avaliação
              </button>
            </form>
          </ColumnRating>
        )}
      </PlaceContainer>
      <Footer />
    </div>
  );
}
export default Place;
