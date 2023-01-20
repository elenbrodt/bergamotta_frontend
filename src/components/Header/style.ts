import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";
import { Link } from "react-router-dom";

export const Ul = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 40px;
  @media (max-width: 1025px) {
    padding: 5px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Li = styled.li`
  display: inline;
  font-family: ${fonts.secondary};
`;

export const NavLink = styled(Link)`
  color: ${colors.dark_two};
  font-family: ${fonts.secondary};
  font-weight: 400;
  font-size: 16px;
  text-decoration: none;
`;

export const DivHeader = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(218, 218, 218, 1);
  border-radius: 12px;
  width: 100%;
  height: 13vh;
  padding: 0 4vw;
  gap: 3vw;
  background-color: ${colors.light_one};
  @media (max-width: 425px) {
    background-color: ${colors.light_one};
    border-radius: 0px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ImgLogo = styled.img`
  width: 11rem;
  @media (max-width: 768px) {
    margin-left: 0%;
    width: 9rem;
  }

  @media (max-width: 375px) {
    width: 8rem;
    height: 5rem;
  }
`;

export const HamburguerMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const LinkLogin = styled(Link)`
  background-color: ${colors.secondary};
  display: flex;
  justify-content: center;
  width: 8vw;
  align-items: center;
  text-decoration: none;
  padding: 0px 50px;
  height: 55px;
  border-radius: 46px;
  color: ${colors.white};
  font-family: ${fonts.secondary};
  font-weight: 600;
  font-size: 18px;
  @media (max-width: 768px) {
    max-width: 1rem;
  }
  @media (max-width: 375px) {
    width: 0.1rem;
  }
`;
export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const ImgCadastro = styled.img`
  width: 50px;
  height: 40px;
  margin-right: -25px;
`;
