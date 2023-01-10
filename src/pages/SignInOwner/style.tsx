import { FormGroup } from "@mui/material";
import styled from "styled-components";
import { fonts } from "../../styles/theme";

export const Box = styled.div`
    display:flex;
    flex-direction: column;
    gap: 2vh;
`

export const Container = styled.div`
    display: flex;
    gap: 1vw;
`

export const SignInOwnerBox = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8vw;
`
export const FormGroupStyled = styled(FormGroup)`
    height: 115vh;
    width: 40vw;
    .MuiFormControlLabel-label{
        font-family:${fonts.secondary};
        font-size: 14px;
        font-weight: 700;
    }
`
export const SignInOwnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3vh auto;
    gap: 5vh;
`
export const TagsTitle = styled.h5`
    font-family:${fonts.secondary};
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    padding-bottom: 2vh;
`