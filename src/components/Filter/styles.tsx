import { Dialog, FormGroup } from '@mui/material';
import styled from 'styled-components';
import {colors, fonts} from "../../styles/theme";

export const FilterButton = styled.button`
  display: flex;
  align-items:center;
  justify-content: center;
  width: 14vw;
  border-radius: 36px;
  border: 2px solid ${colors.secondary};
  color: ${colors.secondary};
  cursor: pointer;
  background: none;
`
export const FilterLinkText = styled.p`
  font-family: ${fonts.secondary};
  font-weight: 400;
  font-size: 20px;
  color: ${colors.black};
  margin: 0;
`
export const FilterTitle = styled.h2`
  font-family: ${fonts.primary};
  color: ${colors.primary};
  weight: 700;
  font-size: 48px;
  text-align: center;
`
export const FormGroupStyled = styled(FormGroup)`
    height: 100%;;
    width: 100%;
    .MuiFormControlLabel-label{
        font-family:${fonts.secondary};
        font-size: 14px;
        font-weight: 700;
    }
`

export const DialogStyled = styled(Dialog)`
    .MuiDialogContent-root{
      width: 35vw;
    }
`