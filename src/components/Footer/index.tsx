import { Footerstyle, ImgLogo, Nav, NavLink, Div } from "./style"
import Logo from "../../assets/image/logo.png";

export function Footer () {
    return (
        <Footerstyle>
            <ImgLogo src={Logo} alt="Logo Bergamotta" />
            <Nav>
                <NavLink to="">Quem somos</NavLink>
                <NavLink to="">Seja um parceiro</NavLink>
                <NavLink to="">Contato</NavLink>
            </Nav>
            <Div>

            </Div>
        </Footerstyle>
    );
}