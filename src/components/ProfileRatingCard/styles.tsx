import styled from "styled-components";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";

export const CardBergamotta = styled(Card)`
  display: flex;
  width: 20vw;
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
`;
