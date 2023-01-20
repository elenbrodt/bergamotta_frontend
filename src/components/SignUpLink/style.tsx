import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/theme";
export const SignInLinkBox = styled.div`
    display: flex;
    gap:1vw;
    font-weight: 400;
    @media(max-width: 475px){
        p{
            width: 200px;
        }
    }
`
export const LinkSignIn = styled (Link)`
    text-decoration: none;
    color: ${colors.link};
    @media (max-width: 475px) {
        width: 150px;
        margin-right: -35px;
    }
`