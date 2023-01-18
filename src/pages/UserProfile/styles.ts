import styled from "styled-components";
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
`;
export const FavoritesDiv = styled.div`
margin-top: 100px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
align-items: flex-start;
`;
export const FavoritesDivLeft = styled.div`
width: 50%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 15%;
`;
export const FavTitles = styled.h3`
display: block;
  flex-basis: 100%;
  margin-bottom: 25px;
  width: 174px;
  height: 27px;
  font-family: ${fonts.secondary};
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: ${colors.black};
`;
export const PlacesDiv = styled.div`
justify-content: flex-start;
align-items: flex-start;
max-width: 90%;
`;
export const FavoritesDivRight = styled.div`
width: 50%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 15%;
`;
