import styled from "styled-components";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import { fonts } from "../../styles/theme";

export const CardBergamotta = styled(Card)`
  display: flex;
  width: 100%;
  min-width: 20vw;
  font-family: ${fonts.secondary};
  h5 {
    font-size: 16px;
    font-weight: 700;
    line-height: 25.2px;
  }
  #stars {
    font-size: 21px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  }
  @media (max-width: 475px) {
    width: 66vw;
  }
  @media (max-width: 875px) {
    width: 100%;
  }
`;
export const LinkCard = styled(Link)`
  text-decoration: none;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2vw;
  p {
    width: 100%;
  }
  .MuiSvgIcon-root {
    font-size: 1rem;
  }
  @media (max-width: 475px) {
    gap: 0.7vw;
  }
`;
