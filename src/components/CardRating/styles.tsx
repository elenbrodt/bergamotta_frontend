import styled from "styled-components";
import { fonts } from "../../styles/theme";

export const UserImg = styled.img`
  width: 6vw;
  height: 6vw;
  border-radius: 100%;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  width: 100%;
  margin-top: 1vh;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  input {
    border: none;
    font-family: ${fonts.secondary};
    padding-top: 1vh;
    font-size: 16px;
  }
`;
