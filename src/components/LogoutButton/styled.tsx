import styled from "styled-components";
import { colors, fonts } from "../../styles/theme"

export const LogoutButtonStyled = styled.button`
    background-color: ${colors.warning};
    width: 200px;
    padding-right: 20px;
    padding-left: 20px;
    text-align: center;
    height: 55px;
    border-radius: 36px;
    border: none;
    cursor: pointer;
    color: ${colors.white};
    font-family: ${fonts.secondary};
    font-weight: 600;
    font-size: 18px;
    
    @media (max-width: 475px){
        font-size: 15px;
        height: 43px;
        
        
    }
    @media(max-width: 475px){
        
    }
  
`