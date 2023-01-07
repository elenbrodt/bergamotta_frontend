import { LoginBox } from "./styles";
import LogoSrc from "../../assets/image/logo_vertical.png";
import InputLogin from "../../components/InputLogin";
import PasswordReminder from "../../components/PasswordReminder";
import { Link } from "react-router-dom";
import TitleLogin from "../../components/TitleLogin";
import SingInLink from "../../components/SingInLink";

function Login() {
  return (
    <LoginBox>
      <Link to="/">
        <img src={LogoSrc} alt="logo_bergamotta" />{" "}
      </Link>
      <TitleLogin title={"Olá, que bom ter você de volta!👋"} />
      <InputLogin type="email" placeholder="exemplo@email.com" label="Email" />
      <InputLogin
        type="password"
        placeholder="Digite sua senha"
        label="Senha"
      />
      <PasswordReminder />
      <SingInLink />
    </LoginBox>
  );
}
export default Login;
