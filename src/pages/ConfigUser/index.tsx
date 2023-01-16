import { Link, useNavigate } from "react-router-dom";
import TitleLogin from "../../components/TitleLogin";
import InputLogin from "../../components/InputLogin";
import LogoSrc from "../../assets/image/logo_vertical.png";
import { Box, Inputs, Container, SaveButton, UpdateInput } from "./styles";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormControl } from "@mui/material";
import { updateUser } from "../../services/MainApi/user_profile";
import { useUser } from "../../store/modules/user";
import { byIdUser } from "../../services/MainApi/user_profile";
import Header from "../../components/Header";
import ImageUser from "../../components/ImageUpdates";
import { Footer } from "../../components/Footer";
import { Footer } from "../../components/Footer";

interface User {
  name: string;
  email: string;
  image_link: string;
  password: string;
  city: string;
  state: string;
  country: string;
}

function UpdateUser() {
  const user = useUser();

  const [userId, setUserId] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    if (user.isLogged) {
      setUserId(user.findUser.id);
      setToken(user.token);
      const getData = async () => {
        try {
          const response = await byIdUser(user.findUser.id);
          setUserData(response.data);
        } catch (error) {
          alert("Deu algo errado no catch");
        }
      };
      getData();
    }
  }, [user, userId]);

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    userUpdate(
      data.email,
      data.password,
      data.name,
      data.image_link,
      data.city,
      data.state,
      data.country,
      token
    );
  };

  const userUpdate = async (
    email: string,
    password: string,
    name: string,
    image_link: string,
    city: string,
    state: string,
    country: string,
    token: string
  ) => {
    const req = {
      email: email,
      password: password,
      name: name,
      image_link: image_link,
      city: city,
      state: state,
      country: country,
      token: token,
    };
    try {
      const response = await updateUser(req, userId);
      console.log(response);
      navigate("/perfil");
    } catch (error) {
      alert("Deu algo errado no catch");
    }
  };

  return (
    <Box>
      <Link to='/'>
        <img src={LogoSrc} alt='logo_bergamotta' />{" "}
      </Link>
      <TitleLogin title='Crie sua conta' />
      <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <Inputs>
          <FormControl fullWidth {...register("name")}>
            <InputLogin
              type='text'
              placeholder='Digite seu usuário'
              name='name'
            />
          </FormControl>
          <FormControl fullWidth {...register("email")}>
            <InputLogin
              type='email'
              placeholder='Digite seu email'
              name='email'
            />
          </FormControl>
          <FormControl fullWidth {...register("password")}>
            <InputLogin
              type='password'
              name='password'
              placeholder='Digite sua senha'
            />
          </FormControl>
          <FormControl fullWidth {...register("image_link")}>
            <InputLogin
              type='text'
              placeholder='Insira link da sua imagem de avatar'
              name='image_link'
            />
          </FormControl>
          <Container>
            <FormControl fullWidth {...register("city")}>
              <InputLogin
                type='text'
                placeholder='Digite sua cidade'
                name='city'
              />
            </FormControl>
            <FormControl fullWidth {...register("state")}>
              <InputLogin
                type='text'
                placeholder='Digite seu estado'
                name='state'
              />
            </FormControl>
            <FormControl fullWidth {...register("country")}>
              <InputLogin
                type='text'
                placeholder='Digite o país'
                name='country'
              />
            </FormControl>
          </Container>
        </Inputs>
        <SaveButton>Salvar Alterações</SaveButton>
      </form>
    </Box>
  );
}

export default UpdateUser;
