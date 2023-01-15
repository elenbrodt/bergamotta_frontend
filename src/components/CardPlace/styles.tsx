import styled from 'styled-components';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';


export const CardBergamotta = styled (Card)`
    display: flex;
    max-width: 37vw;
`

export const LinkCard = styled (Link)`
    text-decoration: none;
    &:hover{
        border: 2px solid black;
    }

`
export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5vw;
    p{
        width: 40%;
    }
`