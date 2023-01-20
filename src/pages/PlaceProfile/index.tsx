import { IconButton, Rating } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import CardRating from "../../components/CardRating";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import {
  averageById,
  cozyById,
  ingredientSubstitutionById,
  instagrammableFoodById,
  ratingByPlaceId,
  serviceSpeed,
  tastyFoodById,
  welcomingServiceById,
} from "../../services/MainApi/ratings";
import { placeByOwnerId } from "../../services/MainApi/sign_up_place";
import { useOwner } from "../../store/modules/owner";
import ImgRating from "./../../assets/imagesProfile/rating.png";
import {
  AverageRating,
  BadTags,
  Border,
  Box,
  Container,
  ContainerName,
  GoodsTags,
  Wrapper,
} from "./styles";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { useNavigate } from "react-router-dom";

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
interface UserProps {
  id: string;
  image_link: string;
  name: string;
}
interface RatingProps {
  id: string;
  general_rating: string;
  welcoming_service: Boolean;
  ingredient_substitution: Boolean;
  instagrammable_food: Boolean;
  tasty_food: Boolean;
  cozy: Boolean;
  service_speed: Boolean;
  comment: string;
  user: UserProps;
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
function PlaceProfile() {
  const owner = useOwner();
  const navigate = useNavigate();

  const [placeData, setPlace] = useState<PlaceProps>();

  const [goods, setGoods] = useState<string[]>([]);
  const [bads, setBads] = useState<string[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [value, setValue] = useState<number>(1); //rating stars

  const [idPlace, setIdPlace] = useState<string>("");

  const dataFetchRef = useRef(false);
  const dataPlaceFetchRef = useRef(false);
  useEffect(() => {
    if (dataFetchRef.current) return;
    dataFetchRef.current = true;

    if (owner.isLogged) {
      dataPlaceFetchRef.current = true;
   
      const getData = async () => {
        try {
          const response = await placeByOwnerId(owner.findOwner.id);
          setPlace(response.data);
        } catch (error: any) {
          if (error.request.status === 404) {
            navigate("/verificarcadastro");
          }
        }
      };
      getData();
    }
  }, [setPlace, owner]);

  if (dataPlaceFetchRef.current) {
    dataPlaceFetchRef.current = false;
    const getComments = async () => {
      try {
        const response = await ratingByPlaceId(placeData?.id as string);
        setComments(response.data);
  
        setIdPlace("/editarperfilrestaurante/" + placeData?.id);
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getComments();
    const getAverage = async () => {
      try {
        const response = await averageById(placeData?.id as string);
        setValue(response.data);
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getAverage();
    const getRatingWelcoming = async () => {
      try {
        const response = await welcomingServiceById(placeData?.id as string);
        if (response.data === "good") {
          setGoods((goods) => [...goods, "Atendimento acolhedor"]);
        } else if (response.data === "bad") {
          setBads((bads) => [...bads, "Atendimento acolhedor"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getRatingWelcoming();
    const getIngredientSubstitution = async () => {
      try {
        const response = await ingredientSubstitutionById(
          placeData?.id as string
        );
        if (response.data === "good") {
          setGoods((goods) => [...goods, "Alteração de ingredientes"]);
        } else if (response.data === "bad") {
          setBads((bads) => [...bads, "Alteração de ingredientes"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getIngredientSubstitution();
    const getInstagrammableFoodById = async () => {
      try {
        const response = await instagrammableFoodById(placeData?.id as string);
        if (response.data === "good") {
          setGoods((goods) => [...goods, "Instagramável"]);
        } else if (response.data === "bad") {
          setBads((bads) => [...bads, "Instagramável"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getInstagrammableFoodById();
    const getTastyFoodById = async () => {
      try {
        const response = await tastyFoodById(placeData?.id as string);
        if (response.data === "good") {
          setGoods((goods) => [...goods, "Saboroso"]);
        } else if (response.data === "bad") {
          setBads((bads) => [...bads, "Saboroso"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getTastyFoodById();
    const getCozyById = async () => {
      try {
        const response = await cozyById(placeData?.id as string);
        if (response.data === "good") {
          setGoods((goods) => [...goods, "Aconchegante"]);
        } else if (response.data === "bad") {
          setBads((bads) => [...bads, "Aconchegante"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getCozyById();
    const getServiceSpeed = async () => {
      try {
        const response = await serviceSpeed(placeData?.id as string);
        if (response.data === "good") {
          setGoods((goods) => [...goods, "Rápido atendimento"]);
        } else if (response.data === "bad") {
          setBads((bads) => [...bads, "Rápido atendimento"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getServiceSpeed();
  }

  return (
    <div>
      <Header />
      <Wrapper>
        <Box>
          <img
            id='img_place'
            src={placeData?.image_link}
            alt='Imagem do restaurante'
          />
          <ContainerName>
            <h2>{placeData?.name}</h2>
            <IconButton href={idPlace}>
              <ModeEditOutlineIcon />
            </IconButton>
          </ContainerName>
          <Container>
            <AverageRating>
              <h4>{value.toFixed(1)}</h4>
              <Rating id='stars' value={value} readOnly precision={0.5} />
              <p>{comments.length} avaliações</p>
            </AverageRating>
            <img id='img_rates' src={ImgRating} alt='Geral avaliações' />
          </Container>
          <h3>Características mais apreciadas</h3>
          <GoodsTags>
            {goods.map((good, index) => (
              <p key={index}>{good}</p>
            ))}
          </GoodsTags>
        </Box>
        <Box>
          <h3 className="segundo-h3">O que estão dizendo</h3>
          <Border>
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
          </Border>

          <h3 className="segundo-h3">Pontos de atenção</h3>
          <BadTags>
            {bads.map((bad, index) => (
              <p key={index}>{bad}</p>
            ))}
          </BadTags>
        </Box>
      </Wrapper>

      <Footer />
    </div>
  );
}

export default PlaceProfile;
