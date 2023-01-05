import Link from "../Link";
import "./style.css";
import Logo from "../../assets/image/logo.png";

function Header() {
    return (
        <header>
                <nav>
                    <img src={Logo} alt="Logo Bergamotta" />
                    <Link texto="Login / Cadastro" redirect="/login" />
                </nav>
        </header>
    );
}

export default Header;