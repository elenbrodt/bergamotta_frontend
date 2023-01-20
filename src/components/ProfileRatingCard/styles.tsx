import styled from "styled-components";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";

export const CardBergamotta = styled(Card)`
  display: flex;
  width: 20vw;
  @media (max-width: 870px) {
    width: 100%;
  }
`;

export const LinkCard = styled(Link)`
  text-decoration: none;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5vw;
  p {
    width: 40%;
  }
  @media (max-width: 870px) {
    p {
      width: 100%;
    }
  }
`;
