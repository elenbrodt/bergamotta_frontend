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
                <NavLink to="/">
                    <ImgLogo src={Logo} alt="Logo Bergamotta" />
                </NavLink>
                
                <Nav>
                    <Ul>
                        <Li><NavLink to="/">BUSCA</NavLink></Li>
                        <Li><NavLink to="/blog">BLOG</NavLink></Li>
                        <Li><NavLink to="/perfil">PERFIL</NavLink></Li>
                        <Li><NavLink to="/parceiros">SEJA UM PARCEIRO</NavLink></Li>
                        <Li><NavLink to="/sobrenos">QUEM SOMOS</NavLink></Li>
                        <Li><NavLink to="/cadastro">CADASTRO</NavLink></Li>
                    </Ul>
                </Nav>
                <ButtonLogin text="Login" redirect="/login" />
            </DivHeader>
        </header>
    );
}

export default Header;