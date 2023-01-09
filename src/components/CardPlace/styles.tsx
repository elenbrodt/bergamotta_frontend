import styled from 'styled-components';
import { Card } from '@mui/material';
import { colors } from '../../styles/theme';
import { Link } from 'react-router-dom';


export const CardBergamotta = styled (Card)`
    display: flex;
    max-width: 37vw;
`

export const PriceBox = styled.div`
    display: flex;
    color: ${colors.secondary};
`

export const LinkCard = styled (Link)`
    text-decoration: none;
    &:hover{
        border: 2px solid black;
    }

`