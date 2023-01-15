import { CheckBox } from "@mui/icons-material";
import { Rating, ToggleButton } from "@mui/material";
import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 1vh;
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
    color: ${colors.primary};
  }
  .favorite_box {
    align-self: flex-end;
    & .MuiSvgIcon-root {
      font-size: 33px;
    }
  }
  #stars {
    font-size: 45px;
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
  img {
    width: 100%;
    height: 30vh;
    border-radius: 10px;
  }
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
    border: 1px solid ${colors.secondary};
    border-radius: 36px;
    font-family: ${fonts.primary};
    font-size: 18px;
    font-weight: 700;
    padding: 2.5vh 1vw;
    color: ${colors.secondary};
    width: 17.5vw;
    text-align: center;
    background: none;
    background-color: ${(props) => (props ? "none" : colors.primary)};
    cursor: pointer;
  }
  .MuiToggleButton-root {
    text-transform: capitalize;
    background-color: ${(props) => (props ? "none" : colors.primary)};
  }
`;

export const StyledRating = styled (Rating)`
    & .MuiRating-iconFilled{
        color:${colors.secondary}
    }
`