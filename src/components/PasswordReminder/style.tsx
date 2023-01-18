import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { colors, fonts } from "../../styles/theme";
export const PasswordReminderBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40vw;
  padding-top: 3vh;
  padding-bottom: 3vh;
  @media (max-width: 475px) {
    p {
      width: 150px;
      margin-right: 40px;
      margin-left: -60px;
    }
    a {
      width: 200px;
      margin-left: -45px;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  gap: 0.2vw;
  align-items: center;
  font-family: ${fonts.secondary};
  font-size: 18px;
  font-weight: 700;
  .MuiIconButton-root {
    padding: 0;
  }
  a {
    color: ${colors.warning};
    text-decoration: none;
  }
  @media (max-width: 475px) {
    .MuiSvgIcon-root {
      margin-left: -140px;
      color: ${colors.secondary};
    }
  }
`;
export const CheckCircleIconStyled = styled(CheckCircleIcon)`
  color: ${colors.secondary};
`;
