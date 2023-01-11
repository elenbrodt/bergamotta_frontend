import { Link } from "react-router-dom";
import TitleLogin from "../../components/TitleLogin";
import InputLogin from "../../components/InputLogin";
import UserType from "../../components/UserType";
import LogoSrc from "../../assets/image/logo_vertical.png";
import {Box, Inputs, RadioGroupStyled, Container} from "./styles"
import Button from "../../components/Button";
import SignInLink from "../../components/SignInLink";
import { useState } from "react";
import { createUser } from "../../services/MainApi/sign_in";

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image_link, setImageLink] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");


  const getData = async () => {    
    const req ={
        email: email, 
        password: password, 
        name: name, 
        image_link: image_link, 
        city: city, 
        state: state, 
        country: country}
    try {
      const response = await createUser(req);
      console.log(response)
    } catch (error) {
      alert("Deu algo errado no catch");
    }
  };


  const handleSubmit = (event: any) => {
    event.preventDefault();
    getData();
    setEmail("");
    setPassword("");
    setName("");
    setCity("");
    setImageLink("");
    setState("");
    setCountry("");
  };

  return (
    <Box>
        <Link to="/">
          <img src={LogoSrc} alt="logo_bergamotta" />{" "}
        </Link>
        <TitleLogin title="Crie sua conta" />
        <form onSubmit={handleSubmit} id="form">
          <Inputs>
            <InputLogin type="text" placeholder="Digite seu usuário" value={name} onChange={setName}/>
            <InputLogin type="email" placeholder="Digite seu email" value={email} onChange={setEmail}/>
            <InputLogin
              type="password"
              value={password}
              placeholder="Digite sua senha"
              onChange={setPassword}
            />
            <InputLogin type="text" placeholder="Insira link da sua imagem de avatar" value={image_link} onChange={setImageLink}/>            
            <Container>
              <InputLogin type="text" placeholder="Digite sua cidade" value={city} onChange={setCity}/>
              <InputLogin type="text" placeholder="Digite seu estado" value={state} onChange={setState}/>
              <InputLogin type="text" placeholder="Digite o país" value={country} onChange={setCountry}/>
            </Container>
          </Inputs>
          <RadioGroupStyled color="secondary" row defaultValue="user" >
              <UserType user_type="user" text="Sou usuário"></UserType>
              <UserType user_type="owner" text="Sou restaurante"></UserType>
          </RadioGroupStyled>
          <button type="submit">teste</button>
          <Button theme="submit" text="Login" redirect="/"/>
        </form>
      <SignInLink text="Já possui cadastro?" link="Faça login aqui"/>
    </Box>
  );
}

export default SignIn;
