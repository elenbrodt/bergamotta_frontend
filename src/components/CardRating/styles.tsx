import styled from "styled-components";
import { fonts } from "../../styles/theme";

export const UserImg = styled.img`
  width: 6vw;
  height: 6vw;
  border-radius: 100%;
  @media (max-width: 475px) {
    width: 40px;
    height: 40px;
  }
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
  textarea {
    border: none;
    font-family: ${fonts.secondary};
    padding-top: 1vh;
    font-size: 16px;
    width: 100%;
  }
  @media (max-width: 475px) {
    textarea {
      font-size: 10px;
    }
    p {
      font-size: 16px;
    }
  }
`;
