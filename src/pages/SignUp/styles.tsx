import styled from "styled-components";
import { RadioGroup } from "@mui/material";
import { colors } from "../../styles/theme";

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
    align-items: center;
    gap: 3vh;
  }
`;
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vh;
  width: 100%;
`;
export const RadioGroupStyled = styled(RadioGroup)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .MuiRadio-root.Mui-checked {
    color: ${colors.secondary};
  }
`;
export const Container = styled.div`
  display: flex;
  gap: 1vw;
  width: 100%;
`;
