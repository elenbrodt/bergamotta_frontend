import imgBanner from "./../../assets/imagesYellowBanner/persona-8-1.png";
import {
  MainDiv,
  LeftDiv,
  TitleBanner,
  BannerButton,
  ImgBanner,
} from "./style";

function YellowBanner() {
  return (
    <MainDiv>
      <LeftDiv>
        <TitleBanner>Venha trocar ideia com outros bergamotters</TitleBanner>
        <BannerButton target='_blank' href='http://t.me/bergamotters'>
          Participe da comunidade
        </BannerButton>
      </LeftDiv>

      <ImgBanner src={imgBanner} alt='imagem do banner' />
    </MainDiv>
  );
}

export default YellowBanner;
