import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";
import { Link } from "react-router-dom";

export const Footerstyle = styled.footer`
  width: 100%;
  background-color: ${colors.light_one};
  height: 15vh;
  position: absolute;
  bottom: 0;
  margin-top: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-self: bottom;
`;

export const ImgLogo = styled.img`
  width: 11rem;
  margin-left: 0%;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-family: ${fonts.secondary};
  color: ${colors.dark_one};
`;

export const Div = styled.div`
  width: 100px;
`;
