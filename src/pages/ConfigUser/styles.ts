import styled from "styled-components";
import { RadioGroup } from "@mui/material";
import { colors, fonts } from "../../styles/theme";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5vh;
  margin: 3vh auto;
  margin-bottom: 5vh;
  width: 50vw;
  #form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5vh;
  }
  img {
    width: 210px;
    height: 210px;
    border-radius: 100px;
  }
  @media (max-width: 475px) {
    img {
      width: 150px;
      height: 150px;
    }
  }
`;
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vh;
  width: 100%;
  .MuiFormControl-root {
    width: 100%;
  }
  @media (max-width: 475px){
    width: 300px;
    margin-left: -40px;
  }
`;
export const RadioGroupStyled = styled(RadioGroup)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  gap: 1vw;
  width: 100%;
  @media (max-width: 475px) {
    flex-wrap: wrap;
    width: 300px;
  }
`;
export const SaveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  width: 583px;
  height: 96px;
  align-self: center;
  background: ${colors.secondary};
  border-radius: 4px;
  font-family: ${fonts.secondary};
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: ${colors.white};
  border: none;
  cursor: pointer;
  @media (max-width: 475px) {
    margin-left: 5px;
    width: 200px;
    height: 58px;
    font-size: 14px;
  }
`;
