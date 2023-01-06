import styled from "styled-components";
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
`
export const Nav = styled.nav`
    border: 1px solid rgba(218, 218, 218, 1);
    border-radius: 12px;
    display:flex;
    justify-content: space-between;
    background-color: rgba(218, 218, 218, 1);
    @media (max-width:425px){
        background-color: #B8E6F5; 
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

