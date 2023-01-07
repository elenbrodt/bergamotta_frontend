import styled from "styled-components";
import { colors, fonts } from "../../styles/theme"

export const ImgHamburguer = styled.img`
   color: black;
   width: 50px;
`
export const DivHamburguer = styled.div`
   display: flex;
   justify-content: center;
   padding: 15px 20px;
   @media (max-width: 375px){
    width: 0.9rem;
}
`