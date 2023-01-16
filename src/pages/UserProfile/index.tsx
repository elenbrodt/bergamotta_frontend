import Header from "../../components/Header";
import {
  ImgRound,
  MainDiv,
  RoundImage,
  UserName,
  FavoritesDiv,
  FavoritesDivLeft,
  FavoritesDivRight,
  FavTitles,
  PlacesDiv
} from "./styles";
import { useUser } from "../../store/modules/user";
import { useEffect, useState } from "react";
import { byIdUser } from "../../services/MainApi/user_profile";
import { Footer } from "../../components/Footer";
import { userFavoritesById } from "../../services/MainApi/favorites";
import CardPlace from "../../components/CardPlace";
import { userratingById } from "../../services/MainApi/ratings";
import ProfileRatingCard from "../../components/ProfileRatingCard";

interface UserProfileProps {
  name: string;
  email: string;
  password: string;
  image_link: string;
  city: string;
  state: string;
  country: string;
}

function UserProfile() {
  const user = useUser();
  const [userData, setUserData] = useState<UserProfileProps>();
  useEffect(() => {
    if (user.isLogged) {
      const getData = async () => {
        try {
          const response = await byIdUser(user.findUser.id);
          setUserData(response.data);
        } catch (error) {
          alert("Deu algo errado no catch");
        }
      };
      getData();
    }
  }, [setUserData, user]);

  interface PlaceProps {
    id: string
    image_link: string;
    name: string;
    opening_hours: string;
    average_ticket_price: number;
  }
  interface FavoritesProps {
    id: string;
    place: PlaceProps
  }

  const [placeList, setPlaceList] = useState<FavoritesProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await userFavoritesById(user.findUser.id);
        setPlaceList(response.data);
      } catch (error) {
        console.error(error)
        alert("Deu algo errado no catch")
      }
    }
    getData();
  }, [setPlaceList, user])

  interface PlacesProps {
    id: string
    image_link: string;
    name: string;
  }
  interface RatingProps {
    id: string;
    comment: string
    place: PlacesProps
  }
  
  const [ratingList, setRatingList] = useState<RatingProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await userratingById(user.findUser.id);
        setRatingList(response.data);
      } catch (error) {
        console.error(error)
        alert("Deu algo errado no catch")
      }
    }
    getData();
  }, [setRatingList, user])

  return (
    <div className='App'>
      <Header />
      <main>
        <MainDiv>
          <RoundImage>
            <ImgRound src={userData?.image_link} alt='test' />
          </RoundImage>
          <UserName>{userData?.name}</UserName>
          <FavoritesDiv>
            <FavoritesDivLeft>
              <FavTitles>Seus favoritos</FavTitles>
              <PlacesDiv>
                {placeList.map((placeList, index) => index < 10 &&
                  (
                    <CardPlace id={placeList.place.id} image_link={placeList.place.image_link} name={placeList.place.name} opening_hours={placeList.place.opening_hours} average_ticket_price={placeList.place.average_ticket_price} />
                  )
                )}
              </PlacesDiv>
            </FavoritesDivLeft>
            <FavoritesDivRight>
              <FavTitles>Últimas avaliações</FavTitles>
              <PlacesDiv>
              {ratingList.map((ratingList, index) => index < 10 &&
                  (
                    <ProfileRatingCard id={ratingList.place.id} place={ratingList.place} comment={ratingList.comment} />
                  )
                )}
              </PlacesDiv>
            </FavoritesDivRight>
          </FavoritesDiv>
        </MainDiv>
      </main>
      <Footer/>
    </div>
  );
}

export default UserProfile;
