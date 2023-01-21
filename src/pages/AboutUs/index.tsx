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
  Wrapper,
} from "./styles";
import bodyimg1 from "../../assets/imagesAbout/veg 001 1.png";
import vector1 from "../../assets/imagesAbout/Vector1.png";
import vector2 from "../../assets/imagesAbout/Vector2.png";
import bodyimg2 from "../../assets/imagesAbout/Rectangle 62.png";
import bodyimage3 from "../../assets/imagesAbout/persona 12 1.png";
import GreenBanner from "../../components/GreenBanner";
import { useForm } from "react-hook-form";
import { whatsApp } from "../../utilities/whatsapp";
import { Footer } from "../../components/Footer";

function AboutUs(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) =>
    whatsApp(data.name, data.whatsapp, data.mensagem);

  return (
    <>
      <Header />

      <UpperBody>
        <UpperBodyLeft>
          <Title>
            Te ajudamos a encontrar<br></br>
            experiências gastronômicas incríveis
          </Title>
          <TitleButton href='/cadastro'>Buscar experiências</TitleButton>
        </UpperBodyLeft>
        <UpperBodyRight>
          <Imgbody src={bodyimg1} alt='Experiências Incríveis' />
        </UpperBodyRight>
      </UpperBody>
      <BottonBody>
        <BottonBodyLeft>
          <Orangebg1 src={vector1} alt='Fundo Laranja' />
          <Overlaid1 src={bodyimg2} alt='Casal Empolgado' />
        </BottonBodyLeft>
        <BottonBodyRight>
          <Title2 className='title-one'>Quem Somos</Title2>
          <Text className='text-one'>
            A Bergamotta é uma plataforma que contecta<br></br>
            restaurantes a clientes que adotam uma dieta<br></br>
            vegetariana ou vegana sem abrir mão de vivenciar, da<br></br>
            sua maneira, grandes momentos gastronômicos.
          </Text>
          <Title2>Nosso Objetivo</Title2>
          <Text>
            Te ajudamos a buscar restaurantes, bares e afins,<br></br>
            gerando uma experiência completa em um local inclusivo e acolhedor
            para públicos veganos e vegetarianos, proporcionando um momento
            gastronômico do jeitinho que você procura.
          </Text>
        </BottonBodyRight>
      </BottonBody>
      <GreenBannerContainer>
        <GreenBanner
          href='/cadastro'
          texto='Tenha uma experiência Bergamotta e acesse milhares de restaurantes.'
          title='Cadastre-se agora mesmo!'
          btn_text='Quero fazer parte!'
        />
      </GreenBannerContainer>
      <FormContainer>
        <FormDiv onSubmit={handleSubmit(onSubmit)}>
          <Title3>Dúvidas? Fale com a gente</Title3>
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

        <FormContainerRight>
          <Orangebg2 src={vector2} alt='Fundo Laranja' />
          <Overlaid2 src={bodyimage3} alt='Senhor Impressionado' />
        </FormContainerRight>
      </FormContainer>

      <Footer />
    </>
  );
}

export default AboutUs;
