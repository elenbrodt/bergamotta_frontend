import styled from "styled-components";
import { colors } from "../../styles/theme";

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
  width: 18vw;
  border-radius: 36px;
  border: 2px solid ${colors.secondary};
  color: ${colors.secondary};
  & .MuiSvgIcon-root {
    font-size: 2rem;
  }
  @media (max-width: 475px){
    width: 100%;
  }
`;

export const InputBaseStyled = styled.input`
  font-size: 20px;
  font-family: Nunito;
  color: black;
  font-weight: 400;
  padding: 0;
`;
