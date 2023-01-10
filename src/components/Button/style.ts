import styled from "styled-components"
import { colors, fonts } from "../../styles/theme";

export const ButtonLogin = styled.a`
    background-color: ${props=> props.theme === "submit" ? colors.black : colors.secondary};
    display: flex;
    justify-content: center;
    width: ${props=> props.theme === "submit" ? "17vw" : ""};
    align-items: center;
    text-align: center;
    text-decoration: none;
    margin: auto 5%;
    padding: 0px 50px;
    height: 55px;
    border-radius: ${props=> props.theme === "signin_owner" ? "" : "36px;"};
    border: hidden;
    color: ${colors.white};
    font-family: ${fonts.secondary};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    @media (max-width:768px){
       max-width: 1rem;
    }
    @media (max-width: 375px){
        width: 0.1rem;
    }
`