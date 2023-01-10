import styled from "styled-components";
import { colors, fonts } from "./../../styles/theme";
import { InputBase } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap:2vh;
`;
export const InputLabel = styled.h4`
  font-family: ${fonts.secondary};
  font-size: 18px;
  font-weight: 700;
  padding-left: 1.8vw;
`;
export const InputBaseLogin = styled(InputBase)`
  width: 100%;
`;
export const InputBorder = styled.div`
    display:flex;
    border: solid 1px ${colors.dark_one};
    border-radius: 10px;
    align-items: center;
    width: 40vw;
    padding: 2.5vh;
    
`;
export const IconPassword = styled (VisibilityOffIcon)`
    margin-right: 10px;
`