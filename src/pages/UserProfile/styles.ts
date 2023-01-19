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
  @media (max-width: 475px){
    font-size: 24px;
}
`;
export const FavoritesDiv = styled.div`
margin-top: 100px;
  display: flex;
  width: 100%;
  @media (max-width: 475px){
    
  }
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
  @media (max-width: 475px){
    margin-left: -20px;
    width: 180px;
  }
  
`;
export const PlacesDiv = styled.div`
max-width: 90%;
@media (max-width: 475px){
  display: flex;
  flex-direction: column;
  
  
}
`;
export const FavoritesDivRight = styled.div`
width: 50%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 15%;
  @media(max-width: 475px){
    margin-top: -115px;
    
      
    
    p{
      font-size: 14px;
      width: 100%;
    }
    h3{
    margin-top: 100px;
    
      
    }
    }
  
  
`;
