import styled from "styled-components"
import { colors, fonts } from "../../styles/theme";

export const Container = styled.div`
margin-top: 90px;
padding-left: 15%;
padding-right: 15%;
`
export const GeneralDiv = styled.div`
display: flex;
`
export const TitleDiv = styled.div`
display: block;
text-align: left;
`
export const CommentTitle = styled.h2`
font-family: ${fonts.secondary};
color: ${colors.black};
font-weight: 700;
font-size: 24px;
line-height: 26px;
margin-bottom: 15px;
`
export const UserDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`
export const UserImg = styled.img`
height: 85px;
width: 80px;
border-radius: 100px;
`
export const UserName = styled.h3`
font-family: ${fonts.secondary};
width: 98px;
height: 36px;
font-weight: 700;
font-size: 20px;
line-height: 22px;
color: ${colors.black};
`
export const FormDiv = styled.form`
display: flex;
justify-content: center;
align-items: center;
gap: 15px;
flex-grow: 3;
`
export const CommentInput = styled.textarea`
width: 85%;
height: 76px;
border: 1px solid #202024;
border-radius: 10px;
font-size: 22px;
`
export const CommentBtn = styled.button`
cursor: pointer;
justify-self: center;
text-decoration: none;
display: flex;
justify-content: center;
text-align: center;
align-items: center;
margin-bottom: 40px;
width: 100px;
height: 30px;
border-radius: 36px;
background: ${colors.secondary};
border: hidden;
align-self: flex-end;
font-family: ${fonts.secondary};
font-weight: 700;
font-size: 20px;
line-height: 28px;
color: ${colors.white}
`