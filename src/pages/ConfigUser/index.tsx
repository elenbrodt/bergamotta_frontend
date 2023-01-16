import { Link, useNavigate } from "react-router-dom";
import TitleLogin from "../../components/TitleLogin";
import InputLogin from "../../components/InputLogin";
import LogoSrc from "../../assets/image/logo_vertical.png";
import { Box, Inputs, Container, SaveButton } from "./styles"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormControl } from "@mui/material";
import { updateUser } from "../../services/MainApi/user_profile";
import { useUser } from "../../store/modules/user";
import { byIdUser } from "../../services/MainApi/user_profile";
import { Footer } from "../../components/Footer";

interface User {
    id: string, 
    name: string, 
    email:string, 
    image_link: string,
    password: string,
    city: string,
    state: string, 
    country: string
}

function UpdateUser() {

    const userUser = useUser()
    
    const [userData, setUserData] = useState<string>("")

    const [user, setUser] = useState<User>();
    
    useEffect(()=>{
        if (userUser.isLogged){
            setUserData(userUser.findUser.id)
            const getData = async () => {
                try {
                    const response = await byIdUser(userData);
                    setUser(response.data)
                } catch (error) {
                    alert("Deu algo errado no catch");
                }
            };
            getData();
        }
    }, [userUser, userData])
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

/*     const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image_link, setImageLink] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState(""); */


    const onSubmit = (data: any) => {
        /* setEmail(data.email)
        setPassword(data.password)
        setName(data.name)
        setImageLink(data.image_link)
        setCity(data.city)
        setState(data.state)
        setCountry(data.country) */
        userUpdate(data.email, data.password, data.name, data.image_link, data.city, data.state, data.country )
        navigate("/perfil")
    }
    const userUpdate = async (email: string, password: string, name: string, image_link: string, city: string, state: string, country:string) => {
        const req = {
            email: email,
            password: password,
            name: name,
            image_link: image_link,
            city: city,
            state: state,
            country: country
        }
        try {
            const response = await updateUser(req, userData);
            console.log(response)
        } catch (error) {
            alert("Deu algo errado no catch");
        }
    };

    return (
        <div>
        <Box>
            <Link to="/">
                <img src={LogoSrc} alt="logo_bergamotta" />{" "}
            </Link>
            <TitleLogin title="Crie sua conta" />
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
                <Inputs>
                    <FormControl fullWidth {...register("name")}>
                        <InputLogin type="text" placeholder="Digite seu usuário" name="name" />
                    </FormControl>
                    <FormControl fullWidth {...register("email")}>
                        <InputLogin type="email" placeholder="Digite seu email" name="email" />
                    </FormControl>
                    <FormControl fullWidth {...register("password")}>
                        <InputLogin
                            type="password"
                            name="password"
                            placeholder="Digite sua senha"
                        />
                    </FormControl>
                    <FormControl fullWidth {...register("image_link")}>
                        <InputLogin type="text" placeholder="Insira link da sua imagem de avatar" name="image_link" />
                    </FormControl>
                    <Container>
                        <FormControl fullWidth {...register("city")}>
                            <InputLogin type="text" placeholder="Digite sua cidade" name="city" />
                        </FormControl>
                        <FormControl fullWidth {...register("state")}>
                            <InputLogin type="text" placeholder="Digite seu estado" name="state" />
                        </FormControl>
                        <FormControl fullWidth {...register("country")}>
                            <InputLogin type="text" placeholder="Digite o país" name="country" />
                        </FormControl>
                    </Container>
                </Inputs>
                <SaveButton>Salvar Alterações</SaveButton>
            </form>
        </Box> 
            <Footer></Footer>
            </div>
    );
}



export default UpdateUser;
