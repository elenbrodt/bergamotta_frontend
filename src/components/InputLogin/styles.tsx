import { IconButton } from "@mui/material";
import styled from "styled-components";
import { colors, fonts } from "./../../styles/theme";

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  width: 100%;
  .container {
    display: flex;
    align-items: center;
  }
  i {
    margin-left: -15%;
  }
`;
export const InputLabel = styled.h4`
  font-family: ${fonts.secondary};
  font-size: 18px;
  font-weight: 700;
  padding-left: ${(props) =>
    props.className === "signin" || "description" ? "" : "1.8vw"};
`;
export const InputBaseLogin = styled.input`
  width: 100%;
  height: ${(props) => (props.className === "description" ? "200px" : "")};
  border: solid 1px ${colors.dark_one};
  font-family: ${fonts.secondary};
  border-radius: 10px;
  padding: 2.5vh;
  font-size: 16px;
`;
