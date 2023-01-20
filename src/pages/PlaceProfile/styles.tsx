import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${fonts.primary};
  font-size: 20px;
  font-weight: 700;
  width: 40vw;

  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    padding-top: 2.5vh;
    padding-bottom: 2vh;
  }
  h3 {
    font-size: 32px;
    font-weight: 700;
    line-height: 35.2px;
    padding-bottom: 2vh;
  }
  #stars {
    font-size: 37.5px;
    padding-bottom: 1vh;
  }
  #img_rates {
    width: 26vw;
  }
  #img_place {
    width: 100%;
    height: 28vh;
  }
  @media (max-width: 475px){
    
    h3{
      font-size: 20px;
      width: 300px;;
      margin-left: 30px;
      margin-bottom: 3vh;
    }
   #stars{
    font-size: 30px;
    margin-right: 10px;
   }
   #img_place{
    
   }
  
  }
 
`;
export const GoodsTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1vh;
  p {
    border: 3px solid ${colors.success};
    border-radius: 36px;
    font-family: ${fonts.secondary};
    font-size: 18px;
    font-weight: 700;
    padding: 2vh;
    color: ${colors.success};
    text-align: center;
    width: 245px;
    align-self: center;
    line-height: 25.2px;
  }
`;
export const BadTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1vh;
  p {
    border: 3px solid ${colors.error};
    border-radius: 36px;
    font-family: ${fonts.secondary};
    font-size: 18px;
    font-weight: 700;
    padding: 2vh;
    color: ${colors.error};
    text-align: center;
    width: 245px;
    line-height: 25.2px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2.3vh;
`;

export const ContainerName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .MuiSvgIcon-root {
    color: black;
    font-size: 38px;
  }
  .MuiIconButton-root {
    background-color: ${colors.gray};
  }
  
  }
  @media(max-width: 475px){
    .MuiSvgIcon-root{
      
    }
    .MuiIconButton-root{
      margin-right: -100px;
      width: 40px;
      height: 40px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3vh 5vw;
  @media (max-width: 475px){
    align-items: center;
    flex-direction: column;
    margin-left: -100px;
  }
`;

export const AverageRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${fonts.primary};
  h4 {
    color: ${colors.success};
    font-weight: 700;
    font-size: 56px;
    line-height: 62px;
  }
  p {
    font-size: 16px;
    font-family: ${fonts.secondary};
    font-weight: 400;
    line-height: 22px;
  }
`;

export const Border = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: 57vh;
  padding: 1vh;
  border-radius: 10px;
  margin-bottom: 2.3vh;
  @media (max-width: 475px){
    width: 300px;
    height: 35vh;
  }
`;
