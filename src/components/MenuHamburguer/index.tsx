import { Link } from "react-router-dom";
import Menu from "../../assets/imageHamburguer/Menu.png";
import { DivHamburguer } from "./style";
import './styles.css'

function MenuHamburguer () {
    return (
        <DivHamburguer>
            <label htmlFor="slide-hamburger-trigger">
                <input type="checkbox" className="slide-hamburger-trigger" id="slide-hamburger-trigger" />
                <div className="slide-hamburger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className="slide-hamburger-nav">
                    <ul>
                        <li><Link to="/">BUSCA</Link></li>
                        <li><Link to="/blog">BLOG</Link></li>
                        <li><Link to="/perfil">PERFIL</Link></li>
                        <li><Link to="/parceiros">SEJA UM PARCEIRO</Link></li>
                        <li><Link to="/sobrenos">QUEM SOMOS</Link></li>
                        <li><Link to="/cadastro">CADASTRO</Link></li>
                    </ul>
                </nav>
            </label>
        </DivHamburguer>
    );
}


export default MenuHamburguer;


