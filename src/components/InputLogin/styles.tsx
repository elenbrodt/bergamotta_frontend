import styled from "styled-components";
import { colors, fonts } from "./../../styles/theme";
import { InputBase } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 100%;
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
`;
export const InputBorder = styled.div`
  display: flex;
  border: solid 1px ${colors.dark_one};
  border-radius: 10px;
  align-items: center;
  padding: 2.5vh;
`;
export const IconPassword = styled(VisibilityOffIcon)`
  margin-right: 10px;
`;
