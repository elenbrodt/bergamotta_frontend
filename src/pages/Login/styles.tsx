import styled from "styled-components";
import { FormControlLabel, RadioGroup } from "@mui/material";
import { colors, fonts } from "../../styles/theme";
export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3vh auto;
  width: 40vw;
  #myForm {
    width: 100%;
  }
  img {
    margin-bottom: 8.2vh;
  }
  @media (max-width: 475px) {
    img {
      width: 300px;
      heigth: 262px;
    }
    h2 {
      font-size: 24px;
      width: 229px;
    }
    #myForm {
      width: 300px;
    }
    i {
      margin-right: -15px;
    }
  }
`;
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh;
  width: 100%;
  margin-top: 3vh;
  margin-bottom: 3vh;
`;
export const Container = styled.div`
  display: flex;
  gap: 1vw;
  width: 100%;
`;
export const FormControlLabelStyled = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    font-family: ${fonts.secondary};
    font-size: 18px;
    font-weight: 700;
  }
`;
export const RadioGroupStyled = styled(RadioGroup)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .MuiRadio-root.Mui-checked {
    color: ${colors.secondary};
  }
`;
