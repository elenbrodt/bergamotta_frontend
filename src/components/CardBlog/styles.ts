import styled from 'styled-components';
import { Card } from '@mui/material';
import { colors, fonts } from '../../styles/theme';

export const CardBlog = styled(Card)`
display: flex;
flex-direction: column;
max-width: 624px;
`
export const TitleBlog = styled.h5`
width: 619px;
height: 27px;
font-family: ${fonts.primary};
font-weight: 700;
font-size: 24px;
line-height: 26px;
color: ${colors.black}
`
export const TextBlog = styled.p`
width: 618px;
height: 51px;
font-family: ${fonts.secondary};
font-weight: 400;
font-size: 18px;
line-height: 25px;
color: ${colors.black};
overflow: hidden;
text-overflow: ellipsis;
-webkit-line-clamp: 2;
`