import styled from 'styled-components';
import { fonts, colors } from "../../styles/theme";

export const ContainerBlog = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 30px
`
export const LinkLogin = styled.a`
font-family: ${fonts.primary};
color: ${colors.secondary};
font-weight: 700;
font-size: 24px;
line-height: 26px;
text-decoration: none;
text-align: center;
`

