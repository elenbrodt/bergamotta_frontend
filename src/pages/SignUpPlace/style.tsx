import { FormGroup } from "@mui/material";
import styled from "styled-components";
import { fonts } from "../../styles/theme";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 40vw;
  @media (max-width: 475px) {
    input {
      width: 270px;
      margin-left: 40px;
    }
    margin-left: -100px;
    h4 {
      margin-left: 60px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 1vw;
  width: 100%;
  @media (max-width: 475px) {
    flex-direction: column;
  }
`;

export const SignUpPlaceBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8vw;
  width: 100%;
  @media (max-width: 475px) {
    flex-direction: column;
  }
`;
export const FormGroupStyled = styled(FormGroup)`
  height: 100vh;

  .MuiFormControlLabel-label {
    font-family: ${fonts.secondary};
    font-size: 14px;
    font-weight: 700;
  }
  @media (max-width: 475px) {
    justify-content: start;
  }
`;
export const SignUpPlaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
  gap: 5vh;
  #my-form{
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 5vh;
  }
  @media (max-width: 475px){
    button{
      15px;
    }
    img{
      width: 300px;
      height: 150px;
    }
  }
  
  
  
`;
export const TagsTitle = styled.h5`
  font-family: ${fonts.secondary};
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 2vh;
  @media (max-width: 475px) {
    margin-right: -150px;
  }
`;
