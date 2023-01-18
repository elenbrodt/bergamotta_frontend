import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 90px;
@media (max-width: 475px){
    a {
        width: 45%;
        height: 50px;
        font-size: 17px;
    }
}
`
export const Logo = styled.img`
margin-top: 100px;
width: 35%;
height: 35%;
background-color: ${colors.white};
@media (max-width: 475px){
    width: 70%;
    height: 70%;
}
`
export const Text = styled.p`
font-family: ${fonts.primary};
font-weight: 700;
font-size: 32px;
line-height: 35px;
color: ${colors.black};
text-align: center;
@media (max-width: 475px){
    font-size: 20px;
    
}
`
export const Button = styled.a`
display: flex;
justify-content: center;
align-items: center;
width: 30%;
height: 100px;
background: ${colors.secondary};
border-radius: 50px;
font-family: ${fonts.secondary};
font-weight: 700;
font-size: 26px;
line-height: 28px;
text-decoration: none;
text-align: center;
margin-bottom: 20vh;
color: ${colors.white}


`