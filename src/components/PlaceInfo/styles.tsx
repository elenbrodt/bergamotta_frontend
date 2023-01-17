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
