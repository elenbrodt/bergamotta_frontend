import { LoginBox, Inputs, SubmitButton } from "./styles";
import LogoSrc from "../../assets/image/logo_vertical.png";
import InputLogin from "../../components/InputLogin";
import PasswordReminder from "../../components/PasswordReminder";
import { Link } from "react-router-dom";
import TitleLogin from "../../components/TitleLogin";
import SignInLink from "../../components/SignInLink";

function Login() {
  return (
    <LoginBox>
      <Link to="/">
        <img src={LogoSrc} alt="logo_bergamotta" />{" "}
      </Link>
      <TitleLogin id="title" title={"Olá, que bom ter você de volta!👋"} />
      <Inputs>
        <InputLogin type="email" placeholder="exemplo@email.com" label="Email" />
        <InputLogin
          type="password"
          placeholder="Digite sua senha"
          label="Senha"
        />
      </Inputs>
      <PasswordReminder />
      <SubmitButton theme="submit" text="Login" redirect="/"/>
      <SignInLink />
    </LoginBox>
  );
}
export default Login;
