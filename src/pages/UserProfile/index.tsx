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
  PlacesDiv,
  CardPlaceStyled,
} from "./styles";
import { useUser } from "../../store/modules/user";
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { userFavoritesById } from "../../services/MainApi/favorites";
import { userratingById } from "../../services/MainApi/ratings";
import ProfileRatingCard from "../../components/ProfileRatingCard";
import { byIdUser } from "../../services/MainApi/user_profile";

interface PlaceProps {
  id: string;
  image_link: string;
  name: string;
  opening_hours: string;
  average_ticket_price: number;
}
interface FavoritesProps {
  id: string;
  place: PlaceProps;
}
interface RatingProps {
  id: string;
  comment: string;
  place: PlaceProps;
}
interface User {
  name: string;
  image_link: string;
}

function UserProfile() {
  const user = useUser();
  const [favoritesList, setFavoritesList] = useState<FavoritesProps[]>([]);

  const [ratingList, setRatingList] = useState<RatingProps[]>([]);
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await userFavoritesById(user.findUser.id);
        setFavoritesList(response.data);
      } catch (error) {}
    };
    getData();
    const getUserRatings = async () => {
      try {
        const response = await userratingById(user.findUser.id);
        setRatingList(response.data);
      } catch (error) {}
    };
    getUserRatings();
    const getUser = async () => {
      try {
        const response = await byIdUser(user.findUser.id);
        setUserData(response.data);
      } catch (error) {}
    };
    getUser();
  }, [setFavoritesList, user, setRatingList]);

  return (
    <div className='App'>
      <Header />
      <main>
        <MainDiv>
          <RoundImage>
            <ImgRound src={userData?.image_link} alt='Perfil usuário' />
          </RoundImage>
          <UserName>{userData?.name}</UserName>
          <FavoritesDiv>
            <FavoritesDivLeft>
              <FavTitles>Seus favoritos</FavTitles>
              <PlacesDiv>
                {favoritesList.map(
                  (favorite, index) =>
                    index < 10 && (
                      <CardPlaceStyled
                        type='favorites'
                        key={index}
                        id={favorite.place.id}
                        image_link={favorite.place.image_link}
                        name={favorite.place.name}
                        opening_hours={favorite.place.opening_hours}
                        average_ticket_price={
                          favorite.place.average_ticket_price
                        }
                      />
                    )
                )}
              </PlacesDiv>
            </FavoritesDivLeft>
            <FavoritesDivRight>
              <FavTitles>Últimas avaliações</FavTitles>
              <PlacesDiv>
                {ratingList.map(
                  (ratingList, index) =>
                    index < 10 && (
                      <ProfileRatingCard
                        id={ratingList.place.id}
                        place={ratingList.place}
                        comment={ratingList.comment}
                      />
                    )
                )}
              </PlacesDiv>
            </FavoritesDivRight>
          </FavoritesDiv>
        </MainDiv>
      </main>
      <Footer />
    </div>
  );
}

export default UserProfile;
