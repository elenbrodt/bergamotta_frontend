import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";

export const MainDiv = styled.div`
max-width: 100%;
height: 166px;
display: flex;
justify-content: center;
background: #F8AA00;
`
export const LeftDiv = styled.div`
margin-left: 5%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 11px
`
export const RightDiv = styled.div`
display: flex;
`
export const TitleBanner = styled.h2`
font-family: ${fonts.secondary};
color: ${colors.black};
font-weight: 700;
font-size: 18px;
line-height: 25px;
`
export const BannerButton = styled.a`
width: 93%;
height: 58px;
background: ${colors.secondary};
border-radius: 36px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-family: ${fonts.secondary};
font-weight: 700;
font-size: 16px;
line-height: 25px;
color: ${colors.white};
text-decoration: none;
`
export const ImgBanner = styled.img`
width: 100%;
height: 166px;
`
