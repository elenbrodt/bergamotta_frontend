import { Footer, ImgLogo, Nav, NavLink, Div } from "./style"
import Logo from "../../assets/image/logo.png";

export default function () {
    return (
        <Footer>
            <ImgLogo src={Logo} alt="Logo Bergamotta" />
            <Nav>
                <NavLink to="">Quem somos</NavLink>
                <NavLink to="">Seja um parceiro</NavLink>
                <NavLink to="">Contato</NavLink>
            </Nav>
            <Div>

            </Div>
        </Footer>
    );
}