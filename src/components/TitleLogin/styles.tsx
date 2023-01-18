import styled from "styled-components";
import { colors, fonts } from "./../../styles/theme";

export const Title = styled.h2`
  font-family: ${fonts.primary};
  color: ${colors.primary};
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  max-width: 560px;
`;
