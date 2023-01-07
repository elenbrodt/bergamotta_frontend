import ButtonLogin from "../Button";
import MenuHamburguer from "../MenuHamburguer"
import Logo from "../../assets/image/logo.png";
import { Ul, Li, A, DivHeader, Nav, ImgLogo, HamburguerMenu } from "./style";

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
                        <Li><A href="">BLOG</A></Li>
                        <Li><A href="">PERFIL</A></Li>
                        <Li><A href="">CADASTRO</A></Li>
                        <Li><A href="">QUEM SOMOS</A></Li>
                        <Li><A href="/sobrenos">SEJA UM PARCEIRO</A></Li>
                    </Ul>
                </Nav>
                <ButtonLogin text="Login" redirect="/login" />
            </DivHeader>
        </header>
    );
}

export default Header;