import MenuHamburguer from "../MenuHamburguer";
import Logo from "../../assets/image/logo.png";
import {
  Ul,
  Li,
  DivHeader,
  Nav,
  ImgLogo,
  HamburguerMenu,
  NavLink,
  LinkLogin,
} from "./style";
import { useUser } from "../../store/modules/user";
import { useOwner } from "../../store/modules/owner";
import LogoutButton from "../LogoutButton";

function Header() {
  const user = useUser();
  const owner = useOwner();

  if (user.isLogged) {
    return (
      <header>
        <DivHeader>
          <HamburguerMenu>
            <MenuHamburguer />
          </HamburguerMenu>
          <NavLink to='/'>
            <ImgLogo src={Logo} alt='Logo Bergamotta' />
          </NavLink>
          <Nav>
            <Ul>
              <Li>
                <NavLink to='/blog'>Blog</NavLink>
              </Li>
              <Li>
                <NavLink to='/perfil'>Perfil</NavLink>
              </Li>
              <Li>
                <NavLink to='/atualizarusuario'>Editar usuário</NavLink>
              </Li>
              <Li>
                <NavLink to='/sobrenos'>Quem somos</NavLink>
              </Li>
              <Li>
                <NavLink to='/parceiros'>Seja parceiro</NavLink>
              </Li>
            </Ul>
          </Nav>
          <LogoutButton />
        </DivHeader>
      </header>
    );
  }
  if (owner.isLogged) {
    return (
      <header>
        <DivHeader>
          <HamburguerMenu>
            <MenuHamburguer />
          </HamburguerMenu>
          <NavLink to='/'>
            <ImgLogo src={Logo} alt='Logo Bergamotta' />
          </NavLink>
          <Nav>
            <Ul>
              <Li>
                <NavLink to='/blog'>Blog</NavLink>
              </Li>
              <Li>
                <NavLink to='/sobrenos'>Quem somos</NavLink>
              </Li>
              <Li>
                <NavLink to='/restauranteperfil'>Perfil do restaurante</NavLink>
              </Li>
              <Li>
                <NavLink to='/editarperfil'>Editar usuário</NavLink>
              </Li>
            </Ul>
          </Nav>
          <LogoutButton />
        </DivHeader>
      </header>
    );
  }

  return (
    <header>
      <DivHeader>
        <HamburguerMenu>
          <MenuHamburguer />
        </HamburguerMenu>
        <NavLink to='/'>
          <ImgLogo src={Logo} alt='Logo Bergamotta' />
        </NavLink>
        <Nav>
          <Ul>
            <Li>
              <NavLink to='/blog'>Blog</NavLink>
            </Li>
            <Li>
              <NavLink to='/parceiros'>Seja parceiro</NavLink>
            </Li>
            <Li>
              <NavLink to='/sobrenos'>Quem somos</NavLink>
            </Li>
            <Li>
              <NavLink to='/cadastro'>Cadastro</NavLink>
            </Li>
          </Ul>
        </Nav>
        <LinkLogin to='/login'>Login</LinkLogin>
      </DivHeader>
    </header>
  );
}
export default Header;
