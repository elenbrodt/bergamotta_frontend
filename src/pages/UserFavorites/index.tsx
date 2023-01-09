import Header from "../../components/Header"
import { ImgRound, MainDiv, RoundImage, UserName, FavoritesDiv, FavoritesDivLeft, FavoritesDivRight, FavTitles } from "./styles"

function UserFavorites() {
    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <main>
                <MainDiv>
                    <RoundImage>
                        <ImgRound src="https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000" alt="test" />
                    </RoundImage>
                    <UserName>Nome</UserName>
                    <FavoritesDiv>
                        <FavoritesDivLeft> 
                            <FavTitles>Seus Favoritos</FavTitles>
                        </FavoritesDivLeft>
                        <FavoritesDivRight> 
                        <FavTitles>Ultimas avaliações</FavTitles>
                        </FavoritesDivRight>
                    </FavoritesDiv>
                </MainDiv>
            </main>
        </div>
    )
}

export default UserFavorites