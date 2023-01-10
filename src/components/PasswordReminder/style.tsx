import styled from "styled-components";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { colors, fonts } from "../../styles/theme";
export const PasswordReminderBox = styled.div`
    display:flex;
    justify-content: space-between;
    width: 40vw;
`
export const Container = styled.div`
    display: flex;
    gap: 0.3vw;
    align-items: center;
    font-family: ${fonts.secondary}
    font-size: 18px;
    font-weight: 700;
    a{
        color: ${colors.warning};
        text-decoration: none;
    }
`
export const CheckCircleIconStyled = styled (CheckCircleIcon)`
    color: ${colors.secondary}
`