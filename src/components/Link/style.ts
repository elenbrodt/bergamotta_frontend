import styled from "styled-components"

interface ButtonProps{
    size: string;
}

export const Button = styled.button<ButtonProps>`
    margin: auto 0;
    margin-right: 1rem;
    height: ${props => buttonHeight(props.size)};
    width: 200px;
    padding: 0 3%;
    border-radius: 36px;
    background: #6CB935;
    border: hidden;
`

function buttonHeight(size: string): string{
   switch(size){
    case "big": 
        return "3rem"
    case "small": 
        return "2rem"
    default:
        return "3rem"
   }
}

export const A = styled.a`
    text-decoration: none;
    color: white; 
`