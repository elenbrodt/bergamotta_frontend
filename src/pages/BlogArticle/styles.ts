import styled from "styled-components";
import { fonts, colors } from "../../styles/theme";

export const ContainerBlog = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const LinkLogin = styled.a`
  font-family: ${fonts.primary};
  color: ${colors.secondary};
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  text-decoration: none;
  text-align: center;
`;
export const CommentTitle = styled.p`
  display: block;
  margin-top: 70px;
  margin-bottom: 25px;
  font-family: ${fonts.secondary};
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: ${colors.black};
`;
export const TitleComments = styled.p`
  display: block;
  padding-left: 15%;
  margin-top: 90px;
  margin-bottom: 25px;
  font-family: ${fonts.secondary};
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: ${colors.black};
`;

export const Container = styled.div`
  margin-top: 90px;
  padding-left: 15%;
  padding-right: 15%;
`;
export const GeneralDiv = styled.div`
  display: flex;
`;
export const TitleDiv = styled.div`
  display: block;
  text-align: left;
`;

export const UserDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const UserImg = styled.img`
  height: 85px;
  width: 80px;
  border-radius: 100px;
  
`;
export const UserName = styled.h3`
  font-family: ${fonts.secondary};
  width: 98px;
  height: 36px;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: ${colors.black};
`;
export const FormDiv = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-grow: 3;
`;
export const CommentInput = styled.input`
  width: 85%;
  height: 76px;
  border: 1px solid #202024;
  border-radius: 10px;
  font-size: 18px;
  padding-left: 1vw;
`;
export const CommentBtn = styled.button`
  cursor: pointer;
  justify-self: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 40px;
  width: 100px;
  height: 30px;
  border-radius: 36px;
  background: ${colors.secondary};
  border: hidden;
  align-self: flex-end;
  font-family: ${fonts.secondary};
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: ${colors.white};
`;

export const ArticleContainer = styled.div`
  padding-left: 15%;
  padding-right: 15%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (max-width: 475px){
    margin-left: -10%;
    margin-right: 5%;
  }
`;
export const ArticleImg = styled.img`
  width: 100%;
  height: 600px;
  border-radius: 10px;
  @media (max-width: 475px){
    height: 300px;
    width: 120%;
  }
`;

export const TitleBlog = styled.h2`
  font-family: ${fonts.secondary};
  font-weight: 700;
  font-size: 32px;
  line-height: 35px;
  @media (max-width: 475px){
    font-size: 24px;
    line-height: 25px;
  
  }
`;
export const SubtitleBlog = styled.h3`
  font-family: ${fonts.secondary};
  font-weight: 400;
  font-size: 26px;
  line-height: 32px;
  @media (max-width: 475px){
    font-size: 20px;
    line-height: 23px;
  }
`;
export const IntroductionBlog = styled.h4`
  font-family: ${fonts.secondary};
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  @media (max-width: 475px){
      font-size: 18px;
      line-height: 20px;
  }
`;
export const TextBlog = styled.p`
  font-family: ${fonts.secondary};
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
`;
export const TitleTextBlog = styled.p`
  font-family: ${fonts.secondary};
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
`;

export const LoginLink = styled.a`
  margin-top: 60px;
  text-align: center;
  display: block;
  text-decoration: none;
  font-family: ${fonts.primary};
  color: ${colors.secondary};
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
`;
export const LittleTitles = styled.p`
  font-family: ${fonts.primary};
  color: ${colors.black};
  text-align: center;
  font-size: 22px;
`;
