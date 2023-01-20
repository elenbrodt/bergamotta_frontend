import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";

export const Title = styled.h2`
  color: ${colors.primary};
  margin-bottom: 1vh;
  font-size: 20px;
  font-family: ${fonts.secondary};
  padding-bottom: 2vh;
`;
export const Wrapper = styled.div`
  padding: 2vh 0px 0px 4vw;
  #text {
    margin-top: 5vh;
    color: ${colors.error};
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    font-style: italic;
    margin-left: -4vw;
  }
  @media (max-width: 870px) {
    width: 100%;
  }
`;
export const ResetFilter = styled.a`
    font-family: ${fonts.secondary}
    font-size: 18px;
    font-weight: 700;
    color: ${colors.primary};
    cursor: pointer;
    
`;
export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 1vh 1.5vw 0px 4vw;
`;
