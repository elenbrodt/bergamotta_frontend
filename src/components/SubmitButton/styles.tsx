import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";
export const SubmitButtonStyled = styled.button`
background-color:  ${colors.black};
display: flex;
justify-content: center;
width: 17vw;
align-items: center;
text-align: center;
margin: auto;
margin-top: 25px;
padding: 0px 50px;
border-radius: ${props=> props.theme === "signin_owner" ? "" : "36px;"};
height: 55px;
border: hidden;
color: ${colors.white};
font-family: ${fonts.secondary};
font-weight: 600;
font-size: 18px;
cursor: pointer;
@media (max-width:768px){
   max-width: 1rem;
}
@media (max-width: 375px){
    width: 0.1rem;
}
`