import Header from "../../components/Header"
import { RoundImage, ImgRound, MainDiv, ChangeButton, UserName, FormDiv, UserLabel, UserInput, SaveButton } from "./styles"



function ConfigUser() {
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
                    <ChangeButton href="/">Alterar Foto</ChangeButton>
                    <FormDiv>
                        <UserLabel>Email</UserLabel>
                        <UserInput type="email" placeholder="exemplo@email.com"/>
                        <UserLabel>Senha</UserLabel>
                        <UserInput type="password"/>
                        <SaveButton>Salvar Alterações</SaveButton>
                    </FormDiv>
                </MainDiv>
            </main>
        </div>
    )
}

export default ConfigUser