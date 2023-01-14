import { Link, useNavigate } from "react-router-dom";
import TitleLogin from "../../components/TitleLogin";
import InputLogin from "../../components/InputLogin";
import UserType from "../../components/UserType";
import LogoSrc from "../../assets/image/logo_vertical.png";
import {Box, Inputs, RadioGroupStyled, Container} from "./styles"
import SignInLink from "../../components/SignInLink";
import { useState } from "react";
import { createUser } from "../../services/MainApi/sign_in";
import { useForm } from "react-hook-form";
import { FormControl } from "@mui/material";
import SubmitButton from "../../components/SubmitButton";
import { createOwner } from "../../services/MainApi/owner";

function SignUp() {

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image_link, setImageLink] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [role, setRole] = useState("");

  const onSubmit = (data: any) =>{
    setEmail(data.email)
    setPassword(data.password)
    setName(data.name)
    setImageLink(data.image_link)
    setCity(data.city)
    setState(data.state)
    setCountry(data.country)
    userCreate()
    if (data.cnpj){
      setCnpj(data.cnpj)
      setRole(data.role)
      ownerCreate()
    }
  }
  const userCreate = async () => {    
    const req ={
        email: email, 
        password: password, 
        name: name, 
        image_link: image_link, 
        city: city, 
        state: state, 
        country: country
      }
    try {
      const response = await createUser(req);
      console.log(response)
      navigate("/login")
    } catch (error) {
      alert("Deu algo errado no catch");
    }
  };
  const ownerCreate = async () => {    
    const req ={
        email: email, 
        password: password, 
        name: name, 
        image_link: image_link, 
        city: city, 
        state: state, 
        country: country,
        cnpj: cnpj,
        role: role,
      }
    try {
      const response = await createOwner(req);
      console.log(response)
      navigate("/login")
    } catch (error) {
      alert("Deu algo errado no catch");
    }
  };
  const [toggle, setToggle] = useState<boolean>(false)
  const handleClick =()=>{
    setToggle(!toggle)
  }
  return (
    <Box>
        <Link to="/">
          <img src={LogoSrc} alt="logo_bergamotta" />{" "}
        </Link>
        <TitleLogin title="Crie sua conta" />
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          <Inputs>
            <RadioGroupStyled color="secondary" row defaultValue="user" >
                <UserType name="user" user_type="user" text="Sou usuário" onChange={handleClick}></UserType>
                <UserType name="owner" user_type="owner" text="Sou restaurante" onChange={handleClick}></UserType>
            </RadioGroupStyled>
            <FormControl fullWidth {...register("name")}>
              <InputLogin type="text" placeholder="Digite seu usuário" name="name" />
            </FormControl>
            <FormControl fullWidth {...register("email")}>
              <InputLogin type="email" placeholder="Digite seu email" name="email"/>
            </FormControl>
            <FormControl fullWidth {...register("password")}>
              <InputLogin
                type="password"
                name="password"
                placeholder="Digite sua senha"
              />
            </FormControl>
            <FormControl fullWidth {...register("image_link")}>
              <InputLogin type="text" placeholder="Insira link da sua imagem de avatar" name="image_link"/>
            </FormControl>
            <Container>
              <FormControl fullWidth {...register("city")}>
                <InputLogin type="text" placeholder="Digite sua cidade" name="city"/>
              </FormControl>
              <FormControl fullWidth {...register("state")}>
                <InputLogin type="text" placeholder="Digite seu estado" name="state"/>
              </FormControl>
              <FormControl fullWidth {...register("country")}>
                <InputLogin type="text" placeholder="Digite o país" name="country"/>
              </FormControl>
            </Container>
            {
              toggle && 
              <Container>
                  <FormControl fullWidth {...register("cnpj")}>
                <InputLogin type="text" placeholder="CNPJ" name="cnpj"/>
                </FormControl>
                <FormControl fullWidth {...register("role")}>
                  <InputLogin type="text" placeholder="Ocupação" name="role"/>
                </FormControl>
              </Container>
            }
          </Inputs>
          <SubmitButton text="Login"/>  
        </form>
      <SignInLink text="Já possui cadastro?" link="Faça login aqui"/>
    </Box>
  );
}

export default SignUp;
