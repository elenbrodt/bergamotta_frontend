import { PasswordReminderBox, Container, CheckCircleIconStyled } from "./style";
import { Checkbox } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function PasswordReminder() {
  return (
    <PasswordReminderBox>
      <Container>
        <Checkbox
          icon={<CheckCircleOutlineIcon />}
          checkedIcon={<CheckCircleIconStyled />}
        />
        <p>Lembrar de mim</p>
      </Container>
      <Container>
        <a href='/'>Esqueceu sua senha?</a>
      </Container>
    </PasswordReminderBox>
  );
}
export default PasswordReminder;
