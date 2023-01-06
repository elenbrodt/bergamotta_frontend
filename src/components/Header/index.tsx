import Link from "../Link";
import Logo from "../../assets/image/logo.png";
import {Ul, Li, A, Nav, Img, HamburguerMenu} from "./style";

function Header() {
    return (
        <header>
                <Nav>
                    <HamburguerMenu>hamburguinho aqui</HamburguerMenu>
                    <Img src={Logo} alt="Logo Bergamotta" />
                    <Ul> 
                        <Li><A href="">BLOG</A></Li>
                        <Li><A href="">PERFIL</A></Li>
                        <Li><A href="">CADASTRO</A></Li>
                        <Li><A href="">QUEM SOMOS</A></Li>
                        <Li><A href="">SEJA UM PARCEIRO</A></Li>
                    </Ul>
                    <Link texto="Login" redirect="/login" />
                </Nav>
        </header>
    );
}

export default Header;