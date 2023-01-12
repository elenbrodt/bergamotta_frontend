import { Footerstyle, ImgLogo, Nav, NavLink, Div } from "./style"
import Logo from "../../assets/image/logo.png";

export function Footer () {
    return (
        <Footerstyle>
            <ImgLogo src={Logo} alt="Logo Bergamotta" />
            <Nav>
                <NavLink to="/search">Busca</NavLink>
                <NavLink to="/partner">Seja um parceiro</NavLink>
                <NavLink to="/sobrenos">Quem somos</NavLink>
            </Nav>
            <Div>

            </Div>
        </Footerstyle>
    );
}