import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";

export const MainDiv = styled.div`
  height: 166px;
  display: flex;
  background: #f8aa00;
  margin-left: -15%;
  margin-bottom: 1vh;
  @media (max-width: 475px){
    height: 200px;
  }
`;
export const LeftDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 21vw;
  gap: 11px;
  margin-left: 10%;
`;
export const RightDiv = styled.div`
  display: flex;
`;
export const TitleBanner = styled.h2`
  font-family: ${fonts.secondary};
  color: ${colors.black};
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  @media (max-width: 475px){
    
    margin-left: 80px;
    
  }
`;
export const BannerButton = styled.a`
  width: 100%;
  height: 58px;
  background: ${colors.secondary};
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: ${fonts.secondary};
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  color: ${colors.white};
  text-decoration: none;
  @media (max-width: 475px){
    width: 160px;
    margin-left: 80px;
    font-size: 13px;
  }
`;
export const ImgBanner = styled.img`
  width: 60%;
  height: 166px;
`;
