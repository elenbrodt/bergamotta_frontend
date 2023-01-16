import imgBanner from "./../../assets/imagesYellowBanner/persona-8-1.png"
import { MainDiv, LeftDiv, RightDiv, TitleBanner, BannerButton, ImgBanner } from "./style"



function YellowBanner() {
    return (
        <MainDiv>
            <LeftDiv>
                <TitleBanner>Venha trocar ideia com outros<br></br>bergamotters</TitleBanner>
                <BannerButton href="http://t.me/bergamotters">Participe da comunidade</BannerButton>
            </LeftDiv>
            <RightDiv>
            <ImgBanner src={imgBanner} alt="imagem do banner" />
            </RightDiv>
        </MainDiv>
    );
}

export default YellowBanner;