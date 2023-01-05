import Header from "../../components/Header";
import { Title, Title2, Text, Overlaid1, Orangebg1, Imgbody, UpperBody, UpperBodyLeft, BottonBody, BottonBodyLeft, BottonBodyRight, GreenBannerContainer, FormContainer, FormContainerRight, Orangebg2, Overlaid2 } from './styles';
import bodyimg1 from "../../assets/imagesAbout/veg 001 1.png"
import vector1 from "../../assets/imagesAbout/Vector1.png"
import vector2 from "../../assets/imagesAbout/Vector2.png"
import bodyimg2 from "../../assets/imagesAbout/Rectangle 62.png"
import bodyimage3 from "../../assets/imagesAbout/persona 12 1.png"
import Link from "../../components/Link";
import GreenBanner from "../../components/GreenBanner";

function About() {
    return (
        <section>
            <div>
                <Header />
            </div>
            <UpperBody>
                <UpperBodyLeft>
                    <Title>Te ajudamos a encontrar<br></br>
                        experiencias gastronômicas incríveis</Title>
                    <Link texto="Buscar experiências" redirect="" />
                </UpperBodyLeft>
                <div>
                    <Imgbody src={bodyimg1} alt="Experiências Incríveis" />
                </div>
            </UpperBody>
            <BottonBody>
                <BottonBodyLeft>
                    <Orangebg1 src={vector1} alt="Fundo Laranja" />
                    <Overlaid1 src={bodyimg2} alt="Casal Empolgado" />
                </BottonBodyLeft>
                <BottonBodyRight>
                    <Title2>Quem Somos</Title2>
                    <Text>A Bergamotta é uma plataforma que contecta<br></br>
                        restaurantes a clientes que adotaram uma dieta<br></br>
                        vegetariana ou vegana sem abrir mão de vivenciar, da<br></br>
                        sua maneira, grandes momentos gastronômicos.</Text>
                    <Title2>Nosso Objetivo</Title2>
                    <Text>Te auxiliar na busca de restaurantes, bares e afins,<br></br>
                        gerando uma experiência completa em um local livre de<br></br>
                        alimentos de origem animal, proporcionando um<br></br>
                        momento gastronômico do jeitinho que você procura.</Text>
                </BottonBodyRight>
            </BottonBody>
            <GreenBannerContainer>
                <GreenBanner texto="Cadastre-se agora mesmo e tenha acesso a milhares de restaurantes do jeito que você busca e compartilhe suas experiências." />
            </GreenBannerContainer>
            <FormContainer>
                <div>
                    <form action="">teste</form>
                </div>
                <FormContainerRight>
                    <Orangebg2 src={vector2} alt="Fundo Laranja" />
                    <Overlaid2 src={bodyimage3} alt="Senhor Impressionado" />
                </FormContainerRight>
            </FormContainer>
        </section>
    );
}

export default About;