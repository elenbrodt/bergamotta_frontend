import { Footer } from "../../components/Footer";
import logo from "./../../assets/image/logo_vertical.png";
import { MainDiv, Logo, Text, Button } from "./styles";

function PlaceOwnerCheck() {
  return (
    <div className='App'>
      <MainDiv>
        <Logo src={logo} alt='' />

        <Text>
          Cadastre já o seu restaurante, e apareça<br></br> automaticamente em
          nossas buscas
        </Text>
        <Button href='/cadastrorestaurante'>Cadastrar restaurante</Button>
      </MainDiv>
      <Footer></Footer>
    </div>
  );
}

export default PlaceOwnerCheck;
