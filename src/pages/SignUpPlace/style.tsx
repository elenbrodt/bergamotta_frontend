import { FormGroup } from "@mui/material";
import styled from "styled-components";
import { fonts } from "../../styles/theme";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 40vw;
`;

export const Container = styled.div`
  display: flex;
  gap: 1vw;
  width: 100%;
`;

export const SignUpPlaceBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8vw;
  width: 100%;
`;
export const FormGroupStyled = styled(FormGroup)`
  height: 150vh;

  .MuiFormControlLabel-label {
    font-family: ${fonts.secondary};
    font-size: 14px;
    font-weight: 700;
  }
`;
export const SignUpPlaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
  gap: 5vh;
`;
export const TagsTitle = styled.h5`
  font-family: ${fonts.secondary};
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 2vh;
`;
