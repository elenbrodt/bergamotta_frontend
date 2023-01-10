import { Link } from "react-router-dom";
import TitleLogin from "../../components/TitleLogin";
import InputLogin from "../../components/InputLogin";
import UserType from "../../components/UserType";
import LogoSrc from "../../assets/image/logo_vertical.png";
import {Box, Inputs, RadioGroupStyled} from "./styles"
import Button from "../../components/Button";
import SignInLink from "../../components/SignInLink";

function SignIn() {
  return (
    <Box>
      <Link to="/">
        <img src={LogoSrc} alt="logo_bergamotta" />{" "}
      </Link>
      <TitleLogin title="Crie sua conta" />
      <Inputs>
        <InputLogin type="text" placeholder="Digite seu usuário" />
        <InputLogin type="email" placeholder="Digite seu email" />
        <InputLogin
          type="password"
          placeholder="Digite sua senha"
        />
        <InputLogin type="text" placeholder="Insira link da sua imagem de avatar" />
        <RadioGroupStyled color="secondary" row defaultValue="user">
          <UserType user_type="user" text="Sou usuário"></UserType>
          <UserType user_type="owner" text="Sou restaurante"></UserType>
        </RadioGroupStyled>
        
      </Inputs>
      <Button theme="submit" text="Login" redirect="/"/>
      <SignInLink text="Já possui cadastro?" link="Faça login aqui"/>
    </Box>
  );
}

export default SignIn;
