import ButtonLogin from "../Button";
import MenuHamburguer from "../MenuHamburguer"
import Logo from "../../assets/image/logo.png";
import { Ul, Li, DivHeader, Nav, ImgLogo, HamburguerMenu, NavLink } from "./style";
import { useUser } from '../../store/modules/user';
import { useEffect, useState } from "react";
import { byIdOwner } from "../../services/MainApi/owner";
import { byIdUser } from "../../services/MainApi/user_profile";

function Header() {
    const user = useUser();
    const [userType, setUserType] = useState("");
    
    useEffect(()=>{
        if(user.isLogged){
            const idUser = user.findUser.id;
            console.log(idUser)
            const getData = async () => {
                try {
                    const responseOwner = await byIdOwner(idUser);
                    const responseUser = await byIdUser(idUser);
                    if(responseOwner.data.id){
                        setUserType("owner")
                    }
                    console.log("aquiii agora",responseUser.data)
                    if(responseUser.data.id){
                        setUserType("owner")
                    }
                } catch (error: any) {
                    if (error.code==='ERR_BAD_REQUEST'){
                        setUserType("user")
                    }
                }
            };
            getData();
        }
    })
    
    return(
        <header>
            { (userType === "user") &&        
            <DivHeader>
                <HamburguerMenu>
                    <MenuHamburguer />
                </HamburguerMenu>
                <NavLink to="/">
                    <ImgLogo src={Logo} alt="Logo Bergamotta" />
                </NavLink>
                <Nav>
                    <Ul>
                        <Li><NavLink to="/">Busca</NavLink></Li>
                        <Li><NavLink to="/blog">Blog</NavLink></Li>
                        <Li><NavLink to="/">Editar Perfil</NavLink></Li>
                        <Li><NavLink to="/sobrenos">Quem Somos</NavLink></Li>
                        <Li><NavLink to="/parceiros">Seja Um Parceiro</NavLink></Li>
                    </Ul>
                </Nav>
                <ButtonLogin text="Login" redirect="/perfil" />
            </DivHeader> 
            }   
            {
                (userType === "owner") && 
                <DivHeader>
                    <HamburguerMenu>
                        <MenuHamburguer />
                    </HamburguerMenu>
                    <NavLink to="/">
                        <ImgLogo src={Logo} alt="Logo Bergamotta" />
                    </NavLink>
                    <Nav>
                        <Ul>
                            <Li><NavLink to="/">Buscar</NavLink></Li>
                            <Li><NavLink to="/sobrenos">Quem Somos</NavLink></Li>
                            <Li><NavLink to="/">Configurações restaurante</NavLink></Li>
                            <Li><NavLink to="/">Configurações usuário</NavLink></Li>
                        </Ul>
                    </Nav>
                    <ButtonLogin text="Login" redirect="/login" />
                </DivHeader>
            }
            {
                (!user.isLogged) && 
                <DivHeader>
                    <HamburguerMenu>
                        <MenuHamburguer />
                    </HamburguerMenu>
                    <NavLink to="/">
                        <ImgLogo src={Logo} alt="Logo Bergamotta" />
                    </NavLink>
                    <Nav>
                        <Ul>
                            <Li><NavLink to="/blog">Blog</NavLink></Li>
                            <Li><NavLink to="/perfil">Perfil</NavLink></Li>
                            <Li><NavLink to="/parceiro">Seja Um Parceiro</NavLink></Li>
                            <Li><NavLink to="/sobrenos">Quem Somos</NavLink></Li>
                            <Li><NavLink to="/cadastro">Cadastro</NavLink></Li>
                        </Ul>
                    </Nav>
                    <ButtonLogin text="Login" redirect="/login" />
                </DivHeader>
            }
        </header>
    )
}
export default Header;