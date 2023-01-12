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
                        <Li><NavLink to="/search">BUSCA</NavLink></Li>
                        <Li><NavLink to="/blog">BLOG</NavLink></Li>
                        <Li><NavLink to="">PERFIL</NavLink></Li>
                        <Li><NavLink to="/signin">CADASTRO</NavLink></Li>
                        <Li><NavLink to="/sobrenos">QUEM SOMOS</NavLink></Li>
                        <Li><NavLink to="">SEJA UM PARCEIRO</NavLink></Li>
                    </Ul>
                </Nav>
                <ButtonLogin text="Login" redirect="/login" />
            </DivHeader>
        </header>
    );
}

export default Header;