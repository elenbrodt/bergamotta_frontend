import styled from 'styled-components';
import {colors, fonts} from "./../../styles/theme"

export const Logo = styled.img`
    width: 234px;
`
export const Title = styled.h2`
    font-family:${fonts.primary};
    color: ${colors.primary};
    font-size:48px;
    font-weight:700;
    text-align: center;
`
export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`