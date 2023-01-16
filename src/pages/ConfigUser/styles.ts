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
  }
  img {
    width: 210px;
    height: 210px;
    border-radius: 100px;
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
`;
export const Container = styled.div`
  display: flex;
  gap: 1vw;
  width: 100%;
`;
export const SaveButton = styled.button`
  margin-top: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  width: 583px;
  height: 96px;
  background: ${colors.secondary};
  border-radius: 4px;
  font-family: ${fonts.secondary};
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: ${colors.white};
  border: none;
  cursor: pointer;
`;

export const UpdateInput = styled.input`
  width: 100%;
  height: ${(props) => (props.className === "description" ? "200px" : "")};
  border: solid 1px ${colors.dark_one};
  font-family: ${fonts.secondary};
  border-radius: 10px;
  padding: 2.5vh;
`;
