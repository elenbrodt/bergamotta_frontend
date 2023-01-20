import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";
export const SubmitButtonStyled = styled.button`
  background-color: ${(props) =>
    props.theme === "signin_owner" ? colors.secondary : colors.black};
  display: flex;
  justify-content: center;
  width: ${(props) => (props.theme === "signin_owner" ? "30vw" : "17vw")};
  align-items: center;
  text-align: center;
  border-radius: ${(props) => (props.theme === "signin_owner" ? "" : "36px;")};
  height: 55px;
  border: hidden;
  color: ${colors.white};
  font-family: ${fonts.secondary};
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 200px;
  }
  @media (max-width: 475px) {
    width: 150px;
    height: 50px;
  }
  @media (max-width: 375px) {
    width: 100px;
  }
`;
