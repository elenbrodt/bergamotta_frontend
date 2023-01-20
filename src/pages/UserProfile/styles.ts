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
  @media (max-width: 475px) {
    font-size: 24px;
  }
`;
export const FavoritesDiv = styled.div`
  display: flex;
  align-items: start;
  gap: 2vw;
  width: 100%;
  justify-content: center;
  @media (max-width: 1550px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const FavoritesDivLeft = styled.div`
  display: flex;

  width: 40vw;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1550px) {
    width: 100%;
    padding: 0 10px;
  }
`;
export const FavTitles = styled.h3`
  font-family: ${fonts.secondary};
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: ${colors.black};
  margin-bottom: 3vh;
  @media (max-width: 1550px) {
    text-align: center;
  }
`;
export const PlacesDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const FavoritesDivRight = styled.div`
  display: flex;
  width: 40vw;
  flex-direction: column;

  justify-content: center;
  @media (max-width: 1550px) {
    width: 100%;
    padding: 0 10px;
  }
`;

export const CardPlaceStyled = styled(CardPlace)`
  @media (max-width: 475px) {
    margin-top: -115px;

    p {
      font-size: 14px;
      width: 100%;
    }
    h3 {
      margin-top: 100px;
    }
  }
`;
