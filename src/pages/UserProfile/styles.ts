import styled from "styled-components";
import CardPlace from "../../components/CardPlace";
import { colors, fonts } from "../../styles/theme";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RoundImage = styled.div`
  margin-top: 51px;
  width: 210px;
  height: 210px;
  border-radius: 100px;
`;
export const ImgRound = styled.img`
  width: 210px;
  height: 210px;
  border-radius: 100px;
`;
export const UserName = styled.h2`
  margin-top: 20px;
  font-family: ${fonts.primary};
  font-weight: 700;
  font-size: 32px;
  line-height: 35px;
  color: ${colors.black};
  margin-bottom: 10vh;
`;
export const FavoritesDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const FavoritesDivLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
  flex-direction: column;
  justify-content: center;
`;
export const FavTitles = styled.h3`
  font-family: ${fonts.secondary};
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: ${colors.black};
  margin-bottom: 3vh;
`;
export const PlacesDiv = styled.div`
  width: 40vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const FavoritesDivRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40vw;
  flex-direction: column;
  justify-content: center;
`;

export const CardPlaceStyled = styled(CardPlace)`
  max-width: 15vw;
`;
