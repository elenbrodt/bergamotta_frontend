import Header from "../../components/Header";
import {
  Title,
  Title2,
  TitleButton,
  Text,
  Overlaid1,
  Orangebg1,
  Imgbody,
  UpperBody,
  UpperBodyLeft,
  UpperBodyRight,
  BottonBody,
  BottonBodyLeft,
  BottonBodyRight,
  GreenBannerContainer,
  FormContainer,
  FormDiv,
  Title3,
  Labels,
  NormalInput,
  TextInput,
  FormBtn,
  FormContainerRight,
  Orangebg2,
  Overlaid2,
} from "./styles";
//import bodyimg1 from "../../assets/imagesAbout/veg 001 1.png"
//import vector1 from "../../assets/imagesAbout/Vector1.png"
//import vector2 from "../../assets/imagesAbout/Vector2.png"
//import bodyimg2 from "../../assets/imagesAbout/Rectangle 62.png"
//import bodyimage3 from "../../assets/imagesAbout/persona 12 1.png"
import GreenBanner from "../../components/GreenBanner";
import { useForm } from "react-hook-form";
import { whatsApp } from "../../utilities/whatsapp";
import { Footer } from "../../components/Footer";

function About(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) =>
    whatsApp(data.name, data.whatsapp, data.mensagem);

  return (
    <div className='App'>
      <header>
        <Header />
      </header>
      <main>
        <UpperBody>
          <UpperBodyLeft>
            <Title>
              Te ajudamos a encontrar<br></br>
              experiencias gastronômicas incríveis
            </Title>
            <TitleButton href='/search'>Buscar experiências</TitleButton>
          </UpperBodyLeft>
          <UpperBodyRight>
            <Imgbody src={""} alt='Experiências Incríveis' />
          </UpperBodyRight>
        </UpperBody>
        <BottonBody>
          <BottonBodyLeft>
            <Orangebg1 src={""} alt='Fundo Laranja' />
            <Overlaid1 src={""} alt='Casal Empolgado' />
          </BottonBodyLeft>
          <BottonBodyRight>
            <Title2>Quem Somos</Title2>
            <Text>
              A Bergamotta é uma plataforma que contecta<br></br>
              restaurantes a clientes que adotaram uma dieta<br></br>
              vegetariana ou vegana sem abrir mão de vivenciar, da<br></br>
              sua maneira, grandes momentos gastronômicos.
            </Text>
            <Title2>Nosso Objetivo</Title2>
            <Text>
              Te auxiliar na busca de restaurantes, bares e afins,<br></br>
              gerando uma experiência completa em um local livre de<br></br>
              alimentos de origem animal, proporcionando um<br></br>
              momento gastronômico do jeitinho que você procura.
            </Text>
          </BottonBodyRight>
        </BottonBody>
        <GreenBannerContainer>
          <GreenBanner
            href='/cadastro'
            texto='Cadastre-se agora mesmo e tenha acesso a milhares de restaurantes.'
            title='O que você está esperando?'
            btn_text='Quero fazer parte!'
          />
        </GreenBannerContainer>
        <FormContainer>
          <div>
            <Title3>Dúvidas? Fale com a gente</Title3>
            <FormDiv onSubmit={handleSubmit(onSubmit)}>
              <br />
              <Labels>Nome</Labels>
              <br />
              <NormalInput {...register("name", { required: true })} />
              {errors.name && <p>Esse campo é obrigatório</p>}
              <br />
              <Labels>Whatsapp</Labels>
              <br />
              <NormalInput {...register("whatsapp", { required: true })} />
              {errors.whatsapp && <p>Esse campo é obrigatório</p>}
              <br />
              <Labels>Mensagem</Labels>
              <br />
              <TextInput {...register("mensagem", { required: true })} />
              {errors.mensagem && <p>Esse campo é obrigatório</p>}
              <br />
              <FormBtn>Enviar</FormBtn>
            </FormDiv>
          </div>
          <FormContainerRight>
            <Orangebg2 src={""} alt='Fundo Laranja' />
            <Overlaid2 src={""} alt='Senhor Impressionado' />
          </FormContainerRight>
        </FormContainer>
        <Footer />
      </main>
    </div>
  );
}

export default About;
