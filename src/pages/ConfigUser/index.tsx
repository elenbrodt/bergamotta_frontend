import { useNavigate } from "react-router-dom";
import { Box, Inputs, Container, SaveButton, UpdateInput } from "./styles";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { updateUser } from "../../services/MainApi/user_profile";
import { useUser } from "../../store/modules/user";
import { byIdUser } from "../../services/MainApi/user_profile";
import Header from "../../components/Header";
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
    <div>
      <Header />
      <Box>
        <img src={userData?.image_link} alt='Imagem de perfil' />
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
          <Inputs>
            <UpdateInput
              type='text'
              placeholder='Digite seu usuário'
              defaultValue={userData?.name}
              {...register("name")}
            />
            <UpdateInput
              type='email'
              placeholder='Digite seu email'
              {...register("email")}
              defaultValue={userData?.email}
            />
            <UpdateInput
              type='password'
              placeholder='Digite sua senha'
              defaultValue={userData?.password}
              {...register("password")}
            />
            <UpdateInput
              type='text'
              placeholder='Insira link da sua imagem de avatar'
              defaultValue={userData?.image_link}
              {...register("image_link")}
            />
            <Container>
              <UpdateInput
                type='text'
                placeholder='Digite sua cidade'
                defaultValue={userData?.city}
                {...register("city")}
              />
              <UpdateInput
                type='text'
                placeholder='Digite seu estado'
                defaultValue={userData?.state}
                {...register("state")}
              />
              <UpdateInput
                type='text'
                placeholder='Digite o país'
                defaultValue={userData?.country}
                {...register("country")}
              />
            </Container>
          </Inputs>
          <SaveButton type='submit'>Salvar Alterações</SaveButton>
        </form>
      </Box>
      <Footer />
    </div>
  );
}

export default UpdateUser;
