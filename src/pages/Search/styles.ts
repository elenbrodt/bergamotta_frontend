import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";

export const SideBar = styled.div`
  width: 43vw;
  #greenCard {
    padding: 3vh 0px 0px 0px;
  }
  overflow: scroll;
  overflow-x: hidden;
  @media (max-width: 870px) {
    width: 100%;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 85vh;
  @media (max-width: 870px) {
    flex-direction: column-reverse;
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;
  height: 147px;
  background-color: ${colors.success};
  #link {
    color: white;
    text-decoration: none;
    background-color: ${colors.primary};
    padding: 2vh 3vw;
    border-radius: 36px;
    font-weight: 700;
    line-height: 20px;
    font-family: ${fonts.secondary};
    font-size: 14px;
    text-transform: uppercase;
    text-align: center;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 1vw;
  } ;
`;
export const TextBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  font-famiily: ${fonts.secondary};
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    width: 60%;
  }
  h4 {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
  }
`;
