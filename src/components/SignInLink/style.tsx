import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/theme";
export const SignInLinkBox = styled.div`
    display: flex;
    gap:1vw;
    font-weight: 400;
`
export const LinkSignIn = styled (Link)`
    text-decoration: none;
    color: ${colors.link};
`