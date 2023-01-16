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
} from "./styles";
import { useUser } from "../../store/modules/user";
import { useEffect, useState } from "react";
import { byIdUser } from "../../services/MainApi/user_profile";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
//import { useNavigate } from "react-router-dom";

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
              <FavTitles>Seus Favoritos</FavTitles>
            </FavoritesDivLeft>
            <FavoritesDivRight>
              <FavTitles>Ultimas avaliações</FavTitles>
            </FavoritesDivRight>
          </FavoritesDiv>
        </MainDiv>
      </main>
      <Footer />
    </div>
  );
}

export default UserProfile;
