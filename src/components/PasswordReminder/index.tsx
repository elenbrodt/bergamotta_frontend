import {PasswordReminderBox, Container, CheckCircleIconStyled} from "./style"
import { IconButton } from '@mui/material';
function PasswordReminder (){
    return(
        <PasswordReminderBox>
            <Container>
                <IconButton>
                    <CheckCircleIconStyled/>
                </IconButton>
                <p>Lembrar de mim</p>
            </Container>
            <Container>
                <a href="/">Esqueceu sua senha?</a>
            </Container>
        </PasswordReminderBox>
    )
}
export default PasswordReminder