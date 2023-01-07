import styled from "styled-components";
import { colors, fonts } from "../../styles/theme"

export const Ul = styled.ul`
    @media(max-width:1025px){
        padding: 5px;
    }
    @media(max-width:768px){
        display: none;
    }
`

export const Li = styled.li`
    display: inline;
    padding: 0px 10px;
    font-family: ${fonts.secondary}
`

export const A = styled.a`
    color: ${colors.dark_two};
    font-family: ${fonts.secondary};
    font-weight: 400;
    font-size: 16px;
    text-decoration: none; 
`

export const DivHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid rgba(218, 218, 218, 1);
    border-radius: 12px;
    width: 100%;
    background-color: ${colors.light_one};
    @media (max-width:425px){
        background-color: ${colors.light_one}; 
        border-radius: 0px;
    }    
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
`

export const ImgLogo = styled.img`
    width: 11rem;
    margin-left: 4%;
    @media (max-width: 768px){
       margin-left: 0%;
    }

    @media (max-width: 375px){
        width: 8rem;
        height: 5rem;
    }
`

export const HamburguerMenu = styled.p`
    display:none;
    @media (max-width:768px){
        display: block;
    }
`


