import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";

export const MainDiv = styled.div`
margin-top: 50px;
padding-left: 15%;
padding-right: 15%;
`
export const UserDiv = styled.div`
max-width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 20px;
`
export const UserImage = styled.img`
width: 90px;
height: 90px;
border-radius: 45px;
`
export const UserName = styled.h2`
font-family: ${fonts.secondary};
font-weight: 700;
font-size: 20px;
line-height: 22px;
color: ${colors.black};
`
export const CommentDiv = styled.div`
margin-top: 20px;
margin-bottom: 20px;
max-width: 100%;
display: block;
box-shadow: 0 10px 10px rgba(0,0,0,.1);
border-radius: 10px;
`
export const Comment = styled.p`
margin-left: 15px;
font-family: ${fonts.secondary};
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: ${colors.black};
`