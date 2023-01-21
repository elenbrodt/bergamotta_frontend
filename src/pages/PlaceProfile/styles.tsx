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
    height: 40vh;
  }
  @media (max-width: 475px) {
    width: 80vw;
    h2 {
      font-size: 22px;
    }

    h3 {
      font-size: 18px;
      width: 300px;
      margin-left: 10x;
    }
    #stars {
      font-size: 30px;
      margin-right: 10px;
    }
    #img_place {
      width: 100%;
      height: 230px;
      object: fit;
    }
    #img_rates {
      width: 32vw;
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
  @media (max-width: 475px) {
    margin-bottom: 1vh;
    p {
      width: 100%;
      padding: 1vh;
    }
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
  @media (max-width: 475px) {
    p {
      width: 100%;
      padding: 1vh;
    }
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
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3vh 5vw;
  @media (max-width: 475px) {
    align-items: center;
    flex-direction: column;
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
  @media (max-width: 475px) {
    width: 80vw;
    height: 35vh;
  }
`;
