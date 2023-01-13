import styled from 'styled-components';
import { RadioGroup } from "@mui/material";

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10vh;
    margin: 3vh auto;
    margin-bottom: 5vh;
    width: 50vw;
    #form{
        width:100%;
    }
`
export const Inputs =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;
    width: 100%;
`
export const RadioGroupStyled = styled (RadioGroup)`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const Container = styled.div`
    display: flex;
    gap: 1vw;
    width: 100%;
`