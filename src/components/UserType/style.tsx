import styled from "styled-components";
import {  FormControlLabel } from "@mui/material";
import { fonts } from "../../styles/theme";

export const FormControlLabelStyled = styled (FormControlLabel)`
    .MuiFormControlLabel-label{
        font-family:${fonts.secondary}
        font-size: 18px;
        font-weight: 700;
    }
`