import { useNavigate } from "react-router-dom";
import { Box, Inputs, Container, SaveButton } from "./styles";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { updateUser } from "../../services/MainApi/user_profile";
import { useUser } from "../../store/modules/user";
import { byIdUser } from "../../services/MainApi/user_profile";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useOwner } from "../../store/modules/owner";
import { byIdOwner, updateOwner } from "../../services/MainApi/owner";
import InputLogin from "../../components/InputLogin";
import { FormControl } from "@mui/material";
interface User {
  name: string;
  email: string;
  image_link: string;
  password: string;
  city: string;
  state: string;
  country: string;
}
interface Owner {
  name: string;
  email: string;
  image_link: string;
  password: string;
  city: string;
  state: string;
  country: string;
  cnpj: string;
  role: string;
}
function UpdateUser() {
  const user = useUser();
  const owner = useOwner();

  const [userId, setUserId] = useState<string>("");
  const [userData, setUserData] = useState<User>();
  const [ownerData, setOwnerData] = useState<Owner>();
  const [ownerId, setOwnerId] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (user.isLogged) {
      setUserId(user.findUser.id);
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
    if (owner.isLogged) {
      setOwnerId(owner.findOwner.id);
      const getDataOwner = async () => {
        try {
          const response = await byIdOwner(owner.findOwner.id);
          setOwnerData(response.data);
        } catch (error) {
          alert("Deu algo errado no catch");
        }
      };
      getDataOwner();
    }
  }, [user, userId]);

  const onSubmit = (data: any) => {
    if (data.email == "") {
      data.email = userData?.email;
    }
    if (data.password == "") {
      data.password = userData?.password;
    }
    if (data.name == "") {
      data.name = userData?.name;
    }
    if (data.image_link == "") {
      data.image_link = userData?.image_link;
    }
    if (data.city == "") {
      data.city = userData?.city;
    }
    if (data.state == "") {
      data.state = userData?.state;
    }
    if (data.country == "") {
      data.country = userData?.country;
    }

    if (user.isLogged) {
      userUpdate(
        data.email,
        data.password,
        data.name,
        data.image_link,
        data.city,
        data.state,
        data.country
      );
    }
    if (owner.isLogged) {
      if (data.cnpj == "") {
        data.cnpj = ownerData?.cnpj;
      }
      if (data.role == "") {
        data.role = ownerData?.role;
      }
      ownerUpdate(
        data.email,
        data.password,
        data.name,
        data.image_link,
        data.city,
        data.state,
        data.country,
        data.cnpj,
        data.role
      );
    }
  };

  const userUpdate = async (
    email: string,
    password: string,
    name: string,
    image_link: string,
    city: string,
    state: string,
    country: string
  ) => {
    const req = {
      email: email,
      password: password,
      name: name,
      image_link: image_link,
      city: city,
      state: state,
      country: country,
    };
    try {
      const response = await updateUser(req, userId);
      navigate("/perfil");
    } catch (error) {}
  };

  const ownerUpdate = async (
    email: string,
    password: string,
    name: string,
    image_link: string,
    city: string,
    state: string,
    country: string,
    cnpj: string,
    role: string
  ) => {
    const req = {
      email: email,
      password: password,
      name: name,
      image_link: image_link,
      city: city,
      state: state,
      country: country,
      cnpj: cnpj,
      role: role,
    };
    try {
      const response = await updateOwner(req, ownerId);

      navigate("/");
    } catch (error) {
      alert("Deu algo errado no catch");
    }
  };

  return (
    <div>
      <Header />
      <Box>
        {user.isLogged && (
          <img src={userData?.image_link} alt='Imagem de perfil' />
        )}
        {owner.isLogged && (
          <img src={ownerData?.image_link} alt='Imagem de perfil' />
        )}
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
          <Inputs>
            <FormControl {...register("name")}>
              <InputLogin
                label='Nome'
                name='name'
                type='text'
                placeholder='Digite seu usuário'
                defaultValue={userData?.name || ownerData?.name}
              />
            </FormControl>
            <FormControl {...register("email")}>
              <InputLogin
                label='Email'
                type='email'
                placeholder='Digite seu email'
                name='email'
                defaultValue={userData?.email || ownerData?.email}
              />
            </FormControl>
            <FormControl {...register("password")}>
              <InputLogin
                label='Senha'
                type='password'
                placeholder='Digite sua senha'
                name='password'
              />
              {errors.password && <p>Esse campo é obrigatório</p>}
            </FormControl>
            <FormControl {...register("image_link")}>
              <InputLogin
                label='Link da imagem'
                type='text'
                placeholder='Insira link da sua imagem de avatar'
                defaultValue={userData?.image_link || ownerData?.image_link}
                name='image_link'
              />
            </FormControl>

            <Container>
              <FormControl {...register("city")}>
                <InputLogin
                  label='Cidade'
                  type='text'
                  placeholder='Digite sua cidade'
                  defaultValue={userData?.city || ownerData?.city}
                  name='city'
                />
              </FormControl>
              <FormControl {...register("state")}>
                <InputLogin
                  label='Estado'
                  type='text'
                  placeholder='Digite seu estado'
                  defaultValue={userData?.state || ownerData?.state}
                  name='state'
                />
              </FormControl>
              <FormControl {...register("country")}>
                <InputLogin
                  type='text'
                  label='País'
                  placeholder='Digite o país'
                  defaultValue={userData?.country || ownerData?.country}
                  name='country'
                />
              </FormControl>
            </Container>
            {owner.isLogged && (
              <>
                <FormControl {...register("cnpj")}>
                  <InputLogin
                    type='text'
                    label='CNPJ'
                    placeholder='Digite o CNPJ'
                    defaultValue={ownerData?.cnpj}
                    name='cnpj'
                  />
                </FormControl>
                <FormControl {...register("role")}>
                  <InputLogin
                    type='text'
                    label='Ocupação'
                    placeholder='Digite sua ocupação'
                    defaultValue={ownerData?.role}
                    name='role'
                  />
                </FormControl>
              </>
            )}
          </Inputs>
          <SaveButton type='submit'>Salvar Alterações</SaveButton>
        </form>
      </Box>
      <Footer />
    </div>
  );
}

export default UpdateUser;
