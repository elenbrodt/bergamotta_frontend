import styled from 'styled-components';
import GreenBanner from '../GreenBanner';

import {colors, fonts} from "../../styles/theme";

export const Title = styled.h2`
    margin: 20px 0px;
    color: ${colors.primary};
    font-size: 20px;
    font-family: ${fonts.secondary};
`
export const GreenBannerStyled = styled (GreenBanner)`
    color: pink;
`