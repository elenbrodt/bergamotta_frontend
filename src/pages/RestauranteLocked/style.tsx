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
  .favorite_box {
    align-self: flex-end;

    & .MuiSvgIcon-root {
      font-size: 33px;
    }
    heigth: 30px;
  }
  #stars {
    font-size: 45px;
    padding-bottom: 1vh;
  }
`;

export const PlaceWrapper = styled.div`
  img {
    width: 100%;
    height: 30vh;
    border-radius: 10px;
  }
`;

export const Title = styled.h1`
    color: ${colors.black},
    font-family:${fonts.primary};
    font-size: 40px;
    line-height: 44px;
    font-weight: 700;
    padding-top: 1vh;
`;
export const Container = styled.div`
  display: flex;
  gap: 0.5vw;
  align-items: center;
  .link_instagram {
    text-decoration: none;
    text-align: center;
    color: ${colors.black};
  }
`;
export const Wrapped = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PlaceContainer = styled.div`
  display: flex;
  padding: 3vh 4vw;
  gap: 9vw;
  justify-content: space-around;
  margin-top: 5vh;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 36vw;
  gap: 2vh;
`;
export const ColumnLastRatings = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 44vw;
  gap: 2vh;
`;
export const GoodsTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1vh;
  justify-content: space-between;
  p {
    border: 1px solid ${colors.secondary};
    border-radius: 36px;
    font-family: ${fonts.primary};
    font-size: 18px;
    font-weight: 700;
    padding: 2.5vh 1vw;
    color: ${colors.secondary};
    width: 17.5vw;
    text-align: center;
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
    width: 20%;
    text-align: center;
    line-height: 28px;
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
`;

export const StyledRating = styled(Rating)`
  & .MuiRating-iconFilled {
    color: ${colors.success};
  }
  font-size: 40px;
  margin-bottom: 9px;
`;
