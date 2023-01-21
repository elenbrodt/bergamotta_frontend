import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";
import { Link } from "react-router-dom";

export const Footerstyle = styled.footer`
  width: 100%;
  background-color: ${colors.light_one};
  min-height: 15vh;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-self: bottom;
  @media (max-width: 475px) {
    justify-content: center;
    gap: 2vw;
  }
`;

export const ImgLogo = styled.img`
  width: 11rem;
  margin-left: 0%;
  @media (max-width: 430px) {
    width: 28vw;
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  @media (max-width: 430px) {
    font-size: 13px;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-family: ${fonts.secondary};
  color: ${colors.dark_one};
`;

export const Div = styled.div`
  width: 100px;
`;
