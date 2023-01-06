import styled from 'styled-components';
import {colors, fonts} from "../../styles/theme";

import FormControlLabel from '@mui/material';

export const FilterButton = styled.button`
  display: flex;
  align-items:center;
  justify-content: center;
  width: 200px;
  gap: 10px;
  border-radius: 30px;
  border: solid 1px ${colors.secondary};
  color: ${colors.secondary};
  cursor: pointer;
  background-color: ${colors.white};
  margin: 0 0;
`
export const FilterLinkText = styled.p`
  font-family: ${fonts.secondary};
  weight: 400;
  font-size: 20px;
  color: ${colors.black};
`
export const FilterTitle = styled.h2`
  font-family: ${fonts.primary};
  color: ${colors.primary};
  weight: 700;
  font-size: 48px;
  text-align: center;
`
