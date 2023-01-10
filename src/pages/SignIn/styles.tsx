import styled from 'styled-components';
import { RadioGroup } from "@mui/material";

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10vh;
    margin: 0 auto;
    margin-bottom: 5vh;
    width: 50vw;
`
export const Inputs =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;
`
export const RadioGroupStyled = styled (RadioGroup)`
    display: flex;
    justify-content: space-between;
    width: 100%;
`