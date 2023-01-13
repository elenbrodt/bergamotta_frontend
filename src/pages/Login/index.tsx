import { LoginBox, Inputs } from "./styles";
import LogoSrc from "../../assets/image/logo_vertical.png";
import InputLogin from "../../components/InputLogin";
import PasswordReminder from "../../components/PasswordReminder";
import { Link, useNavigate } from "react-router-dom";
import TitleLogin from "../../components/TitleLogin";
import SignInLink from "../../components/SignInLink";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { authUser } from "../../services/MainApi/login";
import { FormControl } from "@mui/material";
import {useDispatch} from 'react-redux'
import { setUser } from "../../store/modules/user";
import SubmitButton from "../../components/SubmitButton";

function Login() {
  const { register, handleSubmit } = useForm();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    setEmail(data.email);
    setPassword(data.password);
    login();
  };

  const login = async () => {
    try {
      const response = await authUser({ email, password });
      console.log(response.data);
      dispatch(setUser({
          token: response.data,
          findUser: response.data.token,
      }))
      navigate("/")
    } catch (error) {
      alert("Algo deu errado no catch");
    }
  };

  return (
    <LoginBox>
      <Link to="/">
        <img src={LogoSrc} alt="logo_bergamotta" />
      </Link>
      <TitleLogin id="title" title={"Olá, que bom ter você de volta!👋"} />
      <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
        <Inputs>
          <FormControl fullWidth {...register("email")}>
            <InputLogin
              type="email"
              placeholder="exemplo@email.com"
              label="Email"
              name="email"
            />
          </FormControl>
          <FormControl fullWidth {...register("password")}>
            <InputLogin
              type="password"
              placeholder="Digite sua senha"
              label="Senha"
              name="password"
            />
          </FormControl>
          <SubmitButton text="Logar"/>
        </Inputs>
      </form>
      <PasswordReminder />
      <SignInLink text="Não possui uma conta?" link="Cadastre-se Aqui" />
    </LoginBox>
  );
}
export default Login;
