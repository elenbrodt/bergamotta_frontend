import { Link } from "react-router-dom";
import TitleLogin from "../../components/TitleLogin";
import InputLogin from "../../components/InputLogin";

import LogoSrc from "../../assets/image/logo_vertical.png";
import {Box} from "./styles"
function SingIn() {
  return (
    <Box>
      <Link to="/">
        <img src={LogoSrc} alt="logo_bergamotta" />{" "}
      </Link>
      <TitleLogin title="Crie sua conta" />
      <InputLogin type="text" placeholder="Digite seu usuário" />
      <InputLogin type="email" placeholder="Digite seu email" />
      <InputLogin
        type="password"
        placeholder="Digite sua senha"
      />
      
    </Box>
  );
}

export default SingIn;
