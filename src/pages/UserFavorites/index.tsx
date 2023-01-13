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

function UserFavorites() {
  const userCookies = useUser();
  const idUser = userCookies.findUser.id;
  
  const [user, setUser] = useState<UserProfileProps>();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await byIdUser(idUser);
        setUser(response.data);
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getData();
    
  }, [setUser, idUser]);

  if (userCookies.isLogged) {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <MainDiv>
            <RoundImage>
              <ImgRound
                src="https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000"
                alt="test"
              />
            </RoundImage>
            <UserName>{user?.name}</UserName>
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
      </div>
    );
  }
  return <p>Crie uma conta</p>;
}

export default UserFavorites;
