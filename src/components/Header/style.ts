import styled from "styled-components";
import { colors, fonts } from "../../styles/theme"

export const Ul = styled.ul`
    list-style-type: none;
    text-align: center;
    margin-top: 25px;
    @media(max-width:768px){
        display: none;
    }
`
export const Li = styled.li`
    display: inline;
    padding: 0px 10px;
`
export const A = styled.a`
    color: rgba(59, 59, 70, 1);
    font-family: Nunito;
    text-decoration: none;
`
export const Nav = styled.nav`
    border: 1px solid rgba(218, 218, 218, 1);
    border-radius: 12px;
    display:flex;
    justify-content: space-between;
    background-color: ${colors.light_one};
    @media (max-width:425px){
        background-color: ${colors.light_one}; 
        border-radius: 0px;
    }    
`
export const Img = styled.img`
    width: 8rem;
    margin-left: 3%;
`
export const HamburguerMenu = styled.p`
    display:none;
    @media (max-width:768px){
        display: block;
    }
`

