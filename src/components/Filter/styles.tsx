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
`;
export const FilterLinkText = styled.p`
  font-family: ${fonts.secondary};
  font-weight: 400;
  font-size: 20px;
  color: ${colors.black};
  margin: 0;
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
    font-size: 14px;
    font-weight: 700;
  }
  h3 {
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
  }
`;

export const ButtonStyled = styled.button`
  background-color: ${colors.secondary};
  width: 17vw;
  align-self: center;
  text-align: center;
  height: 55px;
  border: none;
  color: ${colors.white};
  font-family: ${fonts.secondary};
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  @media (max-width: 768px) {
    max-width: 1rem;
  }
  @media (max-width: 375px) {
    width: 0.1rem;
  }
`;
