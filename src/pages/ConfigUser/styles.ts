import styled from 'styled-components';
import { colors, fonts } from '../../styles/theme';

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const RoundImage = styled.div`
margin-top: 51px;
width: 210px;
height: 210px;
border-radius: 100px;
`
export const ImgRound = styled.img`
width: 210px;
height: 210px;
border-radius: 100px;
`
export const UserName = styled.h2`
font-family: ${fonts.primary};
font-weight: 700;
font-size: 32px;
line-height: 35px;
color: ${colors.black};
`
export const ChangeButton = styled.a`
font-family: ${fonts.secondary};
font-weight: 700;
font-size: 20px;
line-height: 28px;
color: ${colors.white};
text-decoration: none;
display: flex;
justify-content: center;
text-align: center;
align-items: center;
width: 239px;
height: 60px;
background: ${colors.secondary};
border-radius: 36px;
`
export const FormDiv = styled.div`
margin-top: 33px;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 20px;
`
export const UserLabel = styled.label`
font-family: ${fonts.secondary};
width: 97px;
height: 34.53px;
font-weight: 700;
font-size: 18px;
line-height: 25px;
color: ${colors.black};
`
export const UserInput = styled.input`
width: 578.43px;
height: 78.92px;
border: 1px solid #202024;
border-radius: 10px;
font-size: 28px;
`
export const SaveButton = styled.button`
margin-top: 33px;
display: flex;
justify-content: center;
align-items: center;
padding: 16px 24px;
gap: 8px;
width: 583px;
height: 96px;
background: ${colors.secondary};
border-radius: 4px;
font-family: ${fonts.secondary};
font-weight: 700;
font-size: 20px;
line-height: 28px;
color: ${colors.white};
border: none;
`