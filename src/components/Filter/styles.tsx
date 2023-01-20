import { Dialog, FormGroup } from "@mui/material";
import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18vw;
  gap: 0.5vw;
  border-radius: 36px;
  border: 2px solid ${colors.secondary};
  color: ${colors.secondary};
  cursor: pointer;
  background: none;
  img {
    width: 1.67vw;
  }
  @media (max-width: 870px) {
    width: 100%;
    img {
      width: 2.5vh;
    }
  }
`;
export const FilterLinkText = styled.p`
  font-family: ${fonts.secondary};
  font-weight: 400;
  font-size: 20px;
  color: ${colors.black};
  margin: 0;
  @media (max-width: 870px) {
    font-size: 15px;
  }
`;
export const FilterTitle = styled.h2`
  font-family: ${fonts.primary};
  color: ${colors.primary};
  weight: 700;
  font-size: 48px;
  text-align: center;
  padding-top: 3vh;
`;
export const FormGroupStyled = styled(FormGroup)`
  height: 100%;
  width: 100%;

  .MuiFormControlLabel-label {
    font-family: ${fonts.secondary};
    font-size: 18px;
    font-weight: 700;
  }
  h3 {
    font-size: 20px;
    padding: 2vh 0 2vh 0;
  }
`;
export const DialogStyled = styled(Dialog)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #myForm {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  hr {
    width: 100%;
  }
`;

export const ButtonStyled = styled.button`
  background-color: ${colors.secondary};
  width: 17vw;
  text-align: center;
  height: 55px;
  border: none;
  color: ${colors.white};
  font-family: ${fonts.secondary};
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  margin: 2vh 0;
  @media (max-width: 768px) {
    width: 30vw;
  }
`;

export const FilterTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5vw;
  button {
    border: 1px solid ${colors.dark_two};
    border-radius: 36px;
    font-family: ${fonts.secondary};
    font-size: 16px;
    font-weight: 700;
    padding: 1.5vh 1vw;
    color: ${colors.dark_two};
    text-align: center;
    background: none;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    gap: 1vw;
  }
`;
