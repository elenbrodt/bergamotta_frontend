import { Rating } from "@mui/material";
import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  font-family: ${fonts.secondary};
  font-size: 20px;
  font-weight: 700;
  h3 {
    color: ${colors.primary};
    font-size: 24px;
    font-weight: 700;
    line-height: 26.4px;
  }
  h2 {
    font-family: ${fonts.primary};
    font-size: 32px;
    font-weight: 700;
    line-height: 35.2px;
    padding: 1vh 0 1vh 0;
    color: ${colors.primary};
  }
  & .MuiSvgIcon-root {
    font-size: 33px;
  }

  #stars {
    font-size: 45px;
    padding-bottom: 1vh;
  }
  @media (max-width: 475px) {
    padding: 0 4px;
    font-size: 14px;
    .MuiSvgIcon-root {
      font-size: 18px;
    }
    h2 {
      font-size: 18px;
    }
  }
`;

export const PlaceWrapper = styled.div`
  img {
    width: 100%;
    height: 30vh;
    border-radius: 10px;
    object-fit: cover;
  }
  #address {
    text-transform: capitalize;
    margin-top: 0.5vh;
  }
  @media (max-width: 475px) {
    #address {
      font-size: 14px;
    }
  }
`;

export const Title = styled.h1`
    color: ${colors.black},
    font-family:${fonts.primary};
    font-size: 40px;
    line-height: 44px;
    font-weight: 700;
    padding-top: 1vh;
    @media(max-width: 475px){
        font-size: 24px;
    }
`;
export const Container = styled.div`
  display: flex;
  gap: 0.5vw;
  align-items: center;

  .link_instagram {
    display: flex;
    align-items: center;
    gap: 0.5vw;
    text-decoration: none;
    text-align: center;
    color: ${colors.black};
  }
`;
export const Wrapped = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  #money_icon {
    font-size: 33px;
  }
`;
export const PlaceContainer = styled.div`
  display: flex;
  padding: 3vh 4vw;
  gap: 9vw;
  justify-content: space-around;
  margin-top: 5vh;
  @media (max-width: 475px) {
    flex-direction: column;
    width: 100%;
    padding: 2vw;
    gap: 1vh;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 36vw;
  gap: 2vh;
  @media (max-width: 475px) {
    width: 100%;
  }
`;
export const ColumnLastRatings = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 44vw;
  gap: 2vh;
  @media (max-width: 475px) {
    width: 100%;
  }
`;
export const GoodsTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1vh;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  p {
    border: 1px solid ${colors.success};
    border-radius: 36px;
    font-family: ${fonts.primary};
    font-size: 18px;
    font-weight: 700;
    padding: 2.5vh 1vw;
    color: ${colors.success};
    width: 17.5vw;
    text-align: center;
  }
  @media (max-width: 475px) {
    p {
      width: 100%;
      font-size: 14px;
      padding: 1vh;
    }
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const ContainerGreen = styled.div`
  display: flex;
  gap: 0.5vw;
  align-items: center;
  background-color: ${colors.success};
  font-family: ${fonts.secondary};
  font-weight: 700;
  font-size: 20px;
  justify-content: center;
  color: ${colors.white};
  height: 18vh;
  gap: 5vw;
  #signup {
    text-decoration: none;
    background-color: ${colors.primary};
    border-radius: 36px;
    color: ${colors.white};
    padding: 2vh;
    width: 16vw;
    text-align: center;
  }
  p {
    width: 40%;
    text-align: center;
    line-height: 28px;
  }
  @media (max-width: 475px) {
    width: 100%;
    flex-direction: column;
    height: 20vh;
    p {
      width: 80%;
    }
    #signup {
      width: 80%;
      font-size: 16px;
    }
  }
`;

export const ColumnRating = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 44vw;
  gap: 2vh;
  button {
    border: 1px solid ${colors.dark_two};
    border-radius: 36px;
    font-family: ${fonts.primary};
    font-size: 18px;
    font-weight: 700;
    padding: 2.5vh 1vw;
    color: ${colors.dark_two};
    width: 17.5vw;
    text-align: center;
    background: none;
    cursor: pointer;
  }

  #myForm {
    display: flex;
    flex-direction: column;
    gap: 2vh;
  }
  #rating_btn {
    width: 60%;
    align-self: center;
    border-radius: 0;
    background-color: ${colors.secondary};
    border: none;
    color: white;
    font-family: ${fonts.secondary};
    line-height: 25px;
  }
  #userStars {
    font-size: 70px;
    align-self: center;
  }

  h3 {
    font-size: 32px;
    text-align: center;
  }
  p {
    font-size: 20px;
    font-weight: 700;
  }

  @media (max-width: 475px) {
    width: 100%;
    justify-content: center;
    button {
      width: 100%;
      font-size: 14px;
      padding: 1vh;
    }
    #myForm {
      align-items: center;
      width: 100%;
    }
    #userStars {
      font-size: 40px;
    }
    h3 {
      font-size: 20px;
    }
    p {
      text-align: start;
    }
  }
`;

export const StyledRating = styled(Rating)`
  & .MuiRating-iconFilled {
    color: ${colors.success};
  }
  font-size: 40px;
  margin-bottom: 9px;
`;

export const RatingComment = styled.textarea`
  width: 100%;
  border: solid 1px ${colors.dark_one};
  font-family: ${fonts.secondary};
  border-radius: 10px;
  padding: 2.5vh;
  font-size: 16px;
  @media (max-width: 475px) {
    width: 80vw;
  }
`;
