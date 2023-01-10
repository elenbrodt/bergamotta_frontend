import styled from "styled-components";
import { fonts } from "../../styles/theme";

export const ArticleContainer = styled.div`
padding-left: 15%;
padding-right: 15%;
margin-top: 40px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 30px
`
export const ArticleImg = styled.img`
width: 100%;
height: 600px;
border-radius: 10px;
`

export const TitleBlog = styled.h2`
font-family: ${fonts.secondary};
font-weight: 700;
font-size: 32px;
line-height: 35px;
`
export const SubtitleBlog = styled.h3`
font-family: ${fonts.secondary};
font-weight: 400;
font-size: 26px;
line-height: 32px;
`
export const IntroductionBlog = styled.h4`
font-family: ${fonts.secondary};
font-weight: 400;
font-size: 22px;
line-height: 26px;
`
export const TextBlog = styled.p`
font-family: ${fonts.secondary};
font-weight: 400;
font-size: 20px;
line-height: 22px;
`
export const TitleTextBlog = styled.p`
font-family: ${fonts.secondary};
font-weight: 400;
font-size: 24px;
line-height: 26px;
`