import styled from "styled-components";
import { colors, fonts } from "../../styles/theme"

export const LogoutButtonStyled = styled.button`
    background-color: ${colors.warning};
    width: 17vw;
    text-align: center;
    margin: auto 5%;
    padding: 0px 50px;
    height: 55px;
    border-radius: 36px;
    border: none;
    cursor: pointer;
    color: ${colors.white};
    font-family: ${fonts.secondary};
    font-weight: 600;
    font-size: 18px;
    @media (max-width:768px){
    max-width: 1rem;
    }
    @media (max-width: 375px){
        width: 0.1rem;
    }
`