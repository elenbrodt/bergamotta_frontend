import {
  LoginBox,
  Inputs,
  FormControlLabelStyled,
  RadioGroupStyled,
} from "./styles";
import LogoSrc from "../../assets/image/logo_vertical.png";
import InputLogin from "../../components/InputLogin";
import { Link, useNavigate } from "react-router-dom";
import TitleLogin from "../../components/TitleLogin";
import SignUpLink from "../../components/SignUpLink";
import { useForm } from "react-hook-form";
import { authUser } from "../../services/MainApi/login";
import { FormControl, Radio } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/modules/user";
import SubmitButton from "../../components/SubmitButton";
import { authOwner } from "../../services/MainApi/login_owner";
import { setOwner } from "../../store/modules/owner";
import { useState } from "react";
import { Footer } from "../../components/Footer";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    if (!toggle) {
      login(data.email, data.password);
    }
    if (toggle) {
      loginOwner(data.email, data.password);
    }
  };

  const login = async (email: any, password: any) => {
    try {
      const response = await authUser({ email, password });
      dispatch(
        setUser({
          token: response.data,
          findUser: response.data.token,
        })
      );
      navigate("/");
    } catch (error: any) {
      if (error.request.status === 403 || error.request.status === 403) {
        alert("Senha e/ou email incorretos");
      }
    }
  };

  const loginOwner = async (email: any, password: any) => {
    try {
      const response = await authOwner({ email, password });
      dispatch(
        setOwner({
          token: response.data,
          findOwner: response.data.token,
        })
      );
      navigate("/");
    } catch (error: any) {
      if (error.request.status === 403 || error.request.status === 403) {
        alert("Senha e/ou email incorretos");
      }
    }
  };

  const [toggle, setToggle] = useState<boolean>(false);
  const handleChange = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <LoginBox>
        <Link to='/'>
          <img src={LogoSrc} alt='logo_bergamotta' />
        </Link>
        <TitleLogin title={"Olá, que bom ter você de volta!👋"} />
        <form id='myForm' onSubmit={handleSubmit(onSubmit)}>
          <Inputs>
            <FormControl fullWidth {...register("email", { required: true })}>
              <InputLogin
                type='email'
                placeholder='exemplo@email.com'
                label='Email'
                name='email'
              />
              {errors.email && <p>Esse campo é obrigatório</p>}
            </FormControl>
            <FormControl
              fullWidth
              {...register("password", { required: true })}
            >
              <InputLogin
                type='password'
                placeholder='Digite sua senha'
                label='Senha'
                name='password'
              />
              {errors.password && <p>Esse campo é obrigatório</p>}
            </FormControl>
            <RadioGroupStyled color='secondary' row defaultValue='user'>
              <FormControlLabelStyled
                control={<Radio value='user' onChange={handleChange} />}
                label='Sou usuário'
              />
              <FormControlLabelStyled
                control={<Radio value='owner' onChange={handleChange} />}
                label='Sou restaurante'
              />
            </RadioGroupStyled>
            <SubmitButton text='Login' />
          </Inputs>
        </form>
        <SignUpLink
          href='/cadastro'
          text='Não possui uma conta?'
          link='Cadastre-se Aqui'
        />
      </LoginBox>
      <Footer />
    </>
  );
}
export default Login;
