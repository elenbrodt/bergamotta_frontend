import styled from "styled-components";
import { Card, CardContent } from "@mui/material";
import { colors, fonts } from "../../styles/theme";
import { Link } from "react-router-dom";

export const CardBlog = styled(Card)`
  display: flex;
  flex-direction: column;
`;

export const ContentCard = styled(CardContent)`
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 475px) {
  }
`;

export const TitleBlog = styled.h5`
  width: 619px;
  height: 27px;
  font-family: ${fonts.primary};
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: ${colors.black};
  @media (max-width: 475px) {
    font-size: 20px;
    width: 300px;
    margin-left: 30px;
    margin-bottom: 5px;
  }
  @media (max-width: 440px) {
    margin-left: 30px;
  }
`;
export const TextBlog = styled.p`
  width: 618px;
  height: 51px;
  font-family: ${fonts.secondary};
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: ${colors.black};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  @media (max-width: 475px) {
    font-size: 18px;
    width: 350px;
    margin-left: 20px;
  }
  @media (max-width: 440px) {
    margin-left: 30px;
  }
`;
export const BlogLinks = styled(Link)`
  text-decoration: none;
`;
