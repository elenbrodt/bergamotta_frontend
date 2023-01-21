import { colors, fonts } from "../../styles/theme";
import styled from "styled-components";

export const Title = styled.h1`
  margin: 0;
  width: 740px;
  height: 170px;
  font-weight: 700;
  font-size: 40px;
  line-height: 55px;
  text-align: center;
  z-index: 1;
  color: ${colors.black};
  font-family: ${fonts.primary};
  margin-left: 27px;
  @media (max-width: 475px) {
    margin-top: 10px;
    font-size: 14px;
    line-height: 19px;
    width: 171px;
    height: 60px;
  }
`;
export const Title2 = styled.h2`
  margin: 0;
  width: 322px;
  height: 97.45px;
  font-weight: 700;
  font-size: 40px;
  color: ${colors.primary};
  font-family: ${fonts.primary};
  @media (max-width: 475px) {
    font-size: 18px;
    width: 148px;
    height: 71px;
    margin-right: 90px;
    margin-top: 30px;
    margin-left: 120px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const TitleButton = styled.a`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 10px;
  margin: 0;
  text-decoration: none;
  width: 284px;
  height: 60px;
  background: ${colors.secondary};
  border-radius: 36px;
  border: hidden;
  font-family: ${fonts.secondary};
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: ${colors.white};
  @media (max-width: 475px) {
    width: 148px;
    height: 39px;
    font-size: 12px;
    line-height: 19px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  @media (max-width: 440px) {
    width: 130px;
  }
`;
export const Text = styled.text`
  margin: 0;
  color: ${colors.black};
  width: 504px;
  height: 125.58px;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  font-family: ${fonts.secondary};
  @media (max-width: 475px) {
    font-size: 12px;
    line-height: 19px;
    width: 170px;
    margin-left: 30px;
    margin-top: -40px;
  }
`;
export const Imgbody = styled.img`
  margin: 0;
  width: 706.03px;
  height: 483px;
  @media (max-width: 475px) {
    width: 266px;
    height: 219px;
    position: absolute;
    right: 0;
    object-fit: cover;
  }
  @media (max-width: 440px) {
    width: 200px;
    height: 180px;
  }
`;
export const Orangebg1 = styled.img`
  margin-top: -220px;
  margin-bottom: -220px;
  width: 808.4px;
  height: 1039.92px;
  @media (max-width: 475px) {
    width: 260px;
    height: 330px;
    margin-left: -20px;
  }
`;
export const Overlaid1 = styled.img`
  position: absolute;
  margin-top: 80px;
  z-index: 1;
  width: 725px;
  height: 743px;
  float: inline-start;
  @media (max-width: 475px) {
    width: 270px;
    height: 270px;
    margin-top: -160px;
  }
`;
export const UpperBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 125px;
  @media (max--width: 475px) {
    margin-bottom: 150px;
  }
`;
export const UpperBodyLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  overflow: hiden;
`;
export const UpperBodyRight = styled.div`
  @media (max-width: 475px) {
    display: flex;
    height: 219px;
  }
`;
export const BottonBody = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.light_one};
  flex-wrap: wrap;
  @media (max-width: 1327px) {
    background-color: ${colors.white};
    align-content: center;
  }
`;
export const BottonBodyLeft = styled.div`
  display: flex;
  position: sticky;
  background-color: ${colors.light_one};
  z-index: 1;
  margin-top: 100px;
  margin-bottom: 100px;
  @media (max-width: 475px) {
    justify-content: center;
    padding-top: 150px;
  }
`;
export const BottonBodyRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.light_one};
  margin-top: 100px;
  margin-bottom: 100px;
  background-color: ${colors.light_one};
  @media (max-width: 1327px) {
    width: 80%;
    margin-top: 150px;
    background-color: ${colors.white};
    align-items: center;
    margin-left: 135px;
    margin-top: -520px;
    margin-bottom: 10px;

    .title-one {
      margin-left: -90px;
      margin-top: -30px;
    }
    .text-one {
      width: 365px;
      margin-left: -90px;
    }
  }
`;
export const GreenBannerContainer = styled.div`
  margin-top: 122px;
  @media (max-width: 475px) {
    height: 192px;
    width: 100%;
    font-size: 25px;
    margin-top: 20px;
    .bannertitle {
      font-size: 20px;
    }
    .bannertext {
      font-size: 15px;
      margin-bottom: 20px;
    }
    .bannerbtn {
      width: 166px;
      font-size: 14px;
      height: 30px;
    }
  }
`;
export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  padding: 3vh 0 0 4vw;
  @media (max-width: 475px) {
    flex-wrap: no-wrap;
  }
`;
export const FormContainerRight = styled.div`
  display: flex;
  position: relative;
  @media (max-width: 475px) {
    display: none;
  }
`;
export const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  width: 30vw;
`;
export const Title3 = styled.h3`
  width: 417px;
  height: 36px;

  font-weight: 700;
  font-size: 32px;
  line-height: 35px;
  color: ${colors.primary};
  font-family: ${fonts.primary};
  @media (max-width: 475px) {
    font-size: 16px;
    line-height: 25px;
  }
`;

export const NormalInput = styled.input`
  width: 527px;
  height: 40px;
  background: rgba(255, 255, 255, 0.08);
  font-size: 22px;
  border: 1px solid #b6bfd8;
  border-radius: 10px;
  @media (max-width: 475px) {
    width: 320px;
  }
`;

export const TextInput = styled.textarea`
  width: 527px;
  height: 120px;
  font-size: 22px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid #b6bfd8;
  border-radius: 8px;
  @media (max-width: 475px) {
    width: 320px;
  }
`;

export const Labels = styled.label`
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: ${colors.dark_one};
  font-family: ${fonts.secondary};
  @media (max-width: 475px) {
    font-size: 14px;
  }
`;

export const FormBtn = styled.button`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0;
  width: 158px;
  height: 60px;
  padding: 0 3%;
  border-radius: 36px;
  background: ${colors.secondary};
  border: hidden;
  align-self: flex-end;
  font-family: ${fonts.secondary};
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: ${colors.white};
  @media (max-width: 475px) {
    width: 109px;
    height: 36px;
    font-size: 10px;

    margin-bottom: 20px;
  }
`;

export const Orangebg2 = styled.img`
  width: 780.88px;
  height: 662.04px;
  @media (max-width: 475px) {
    width: 480px;
    height: 362px;
  }
`;
export const Overlaid2 = styled.img`
  position: absolute;
  margin-top: 160px;
  margin-right: 160px;
  z-index: 1;
  width: 685px;
  height: 501px;
  float: inline-start;
  @media (max-width: 475px) {
    width: 385px;
    height: 201px;
  }
`;
