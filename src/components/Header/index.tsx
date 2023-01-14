import ButtonLogin from "../Button";
import MenuHamburguer from "../MenuHamburguer"
import Logo from "../../assets/image/logo.png";
import { Ul, Li, DivHeader, Nav, ImgLogo, HamburguerMenu, NavLink } from "./style";
import { useUser } from '../../store/modules/user';
import { useEffect, useState } from "react";
import { useOwner } from "../../store/modules/owner";

function Header() {
    const user = useUser();
    const owner = useOwner();

    if(user.isLogged){
        return (<header>
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
        </header>)
    }
    if(owner.isLogged){
        return(<header>
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
        </header>)
    }   
    
    return(
        <header>
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
        </header>
    )
}
export default Header;