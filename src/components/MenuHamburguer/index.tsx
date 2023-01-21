import { Link } from "react-router-dom";
import { useOwner } from "../../store/modules/owner";
import { useUser } from "../../store/modules/user";
import { DivHamburguer } from "./style";
import "./styles.css";

function MenuHamburguer() {
  const user = useUser();
  const owner = useOwner();

  return (
    <DivHamburguer>
      <label htmlFor='slide-hamburger-trigger'>
        <input
          type='checkbox'
          className='slide-hamburger-trigger'
          id='slide-hamburger-trigger'
        />
        <div className='slide-hamburger-menu'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {!user.isLogged && !owner.isLogged && (
          <nav className='slide-hamburger-nav'>
            <ul>
              <li>
                <Link to='/'>Busca</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/parceiros'>Seja parceiro</Link>
              </li>
              <li>
                <Link to='/sobrenos'>Quem somos</Link>
              </li>
              <li>
                <Link to='/cadastro'>Cadastro</Link>
              </li>
            </ul>
          </nav>
        )}
        {user.isLogged && (
          <nav className='slide-hamburger-nav'>
            <ul>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/sobrenos'>Quem somos</Link>
              </li>
              <li>
                <Link to='/perfil'>Perfil</Link>
              </li>
              <li>
                <Link to='/editarperfil'>Editar perfil</Link>
              </li>
            </ul>
          </nav>
        )}
        {owner.isLogged && (
          <nav className='slide-hamburger-nav'>
            <ul>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/sobrenos'>Quem somos</Link>
              </li>
              <li>
                <Link to='/restauranteperfil'>Perfil do restaurante</Link>
              </li>
              <li>
                <Link to='/editarperfil'>Editar usuário</Link>
              </li>
            </ul>
          </nav>
        )}
      </label>
    </DivHamburguer>
  );
}

export default MenuHamburguer;
