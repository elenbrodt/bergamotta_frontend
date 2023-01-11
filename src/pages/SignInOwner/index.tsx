import { Checkbox, FormControlLabel } from "@mui/material";
import InputLogin from "../../components/InputLogin";
import { SignInOwnerBox, TagsTitle,  SignInOwnerContainer, Box, Container, FormGroupStyled } from "./style";
import { TAGS } from "../../mock/tags";
import { Link } from "react-router-dom";
import LogoSrc from "../../assets/image/logo_vertical.png";
import Button from "../../components/Button";
function SignInOwner() {
  return (
    <SignInOwnerContainer>
        <Link to="/">
            <img src={LogoSrc} alt="logo_bergamotta" />{" "}
        </Link>
        <SignInOwnerBox>
            <Box>
                <InputLogin theme="signin" label="Estabelecimento" type="text" placeholder="Digite o nome do estabelecimento" ></InputLogin>
                <InputLogin theme="signin" label="Endereço" type="text" placeholder="Digite seu endereço" ></InputLogin>
                <InputLogin theme="signin" label="Horário de funcionamento" type="text" placeholder="Digite o horário" ></InputLogin>
                <Container>
                <InputLogin
                    label="Ticket Médio"
                    type="text"
                    placeholder="Digite o valor"
                    theme="signin"
                ></InputLogin>
                <InputLogin
                    label="Meios de pagamento"
                    type="text"
                    placeholder="Digite o valor"
                    theme="signin"
                ></InputLogin>
                </Container>
                <InputLogin theme="signin" label="Foto do estabelecimento" type="text" placeholder="Link da imagem do estabelecimento" ></InputLogin>
                <InputLogin label="Descrição" theme="description" type="text" placeholder="Digite um breve texto de apresentação" ></InputLogin>
            </Box>
            <Box>
                <TagsTitle>Selecione suas principais características</TagsTitle>
                <FormGroupStyled>
                    {TAGS.map((tag, index) => (
                        <FormControlLabel
                        control={<Checkbox />}
                        label={tag.tag}
                        key={index}
                        />
                    ))}
                    
                </FormGroupStyled>
                <Button theme="signin_owner" text="Salvar alterações" redirect="/"/>
            </Box>
        </SignInOwnerBox>
    </SignInOwnerContainer>
    
  );
}
export default SignInOwner;
