import ButtonLogin from "../Button";
import MenuHamburguer from "../MenuHamburguer"
import Logo from "../../assets/image/logo.png";
import { Ul, Li, DivHeader, Nav, ImgLogo, HamburguerMenu, NavLink } from "./style";

function Header() {
    return (
        <header>
            <DivHeader>
                <HamburguerMenu>
                    <MenuHamburguer />
                </HamburguerMenu>
                <ImgLogo src={Logo} alt="Logo Bergamotta" />
                <Nav>
                    <Ul>
                        <Li><NavLink to="">BLOG</NavLink></Li>
                        <Li><NavLink to="">PERFIL</NavLink></Li>
                        <Li><NavLink to="">CADASTRO</NavLink></Li>
                        <Li><NavLink to="">QUEM SOMOS</NavLink></Li>
                        <Li><NavLink to="/sobrenos">SEJA UM PARCEIRO</NavLink></Li>
                    </Ul>
                </Nav>
                <ButtonLogin text="Login" redirect="/login" />
            </DivHeader>
        </header>
    );
}

export default Header;