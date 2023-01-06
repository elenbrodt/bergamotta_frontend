import styled from "styled-components";

interface SectionProps{
    background: string;
}

export const Section = styled.section<SectionProps>`
    background: ${props => props.background || "white"};
`
