import { Checkbox, FormControlLabel, TextField, Button as ButtonUI, InputBase  } from "@mui/material";
import InputLogin from "../../components/InputLogin";
import {
  SignInPlaceBox,
  TagsTitle,
  SignInPlaceContainer,
  Box,
  Container,
  FormGroupStyled,
} from "./style";
import { TAGS } from "../../mock/tags";
import { Link } from "react-router-dom";
import LogoSrc from "../../assets/image/logo_vertical.png";
import Button from "../../components/Button";
import {useForm, FormHook} from "../../hooks/useForm";
type SignInPlaceProps = {
  owner_id?: string;
  name: string;
  place_types: string[];
  food_types: string[];
  place_profiles: string[];
  city: string;
  state: string;
  country: string;
  zipcode: string;
  district: string;
  street: string;
  place_number: string;
  complement: string;
  image_link: string;
  capacity: string;
  description: string;
  phone: string;
  average_ticket_price: string;
  social_media: string;
  opening_hours: string;
  payment: string;
};
function SignInPlace() {
  const { formData, handleChange, handleSubmit }: FormHook = useForm({
    owner_id: "",
    name: "",
    place_types: [""],
    food_types: [""],
    place_profiles: [""],
    city: "",
    state: "",
    country: "",
    zipcode: "",
    district: "",
    street: "",
    place_number: "",
    complement:  "",
    image_link: "",
    capacity: "",
    description: "",
    phone: "",
    average_ticket_price: "",
    social_media: "",
    opening_hours: "",
    payment: "",
  });
 
;
  return (
    <SignInPlaceContainer>
      <Link to="/">
        <img src={LogoSrc} alt="logo_bergamotta" />
      </Link>
      <SignInPlaceBox>
          <Box>
            <InputLogin
              theme="signin"
              label="Estabelecimento"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite o nome do estabelecimento"
            ></InputLogin>
            <InputLogin
              theme="signin"
              label="Endereço"
              value={formData.street}
              onChange={handleChange}
              type="text"
              placeholder="Digite seu endereço"
            ></InputLogin>
            <InputLogin
              theme="signin"
              label="Horário de funcionamento"
              onChange={handleChange}
              type="text"
              value={formData.opening_hours}
              placeholder="Digite o horário"
            ></InputLogin>
            <Container>
              <InputLogin
                label="Ticket Médio"
                type="text"
                value={formData.average_ticket_price}
                onChange={handleChange}
                placeholder="Digite o valor"
                theme="signin"
              ></InputLogin>
              <InputLogin
                label="Meios de pagamento"
                type="text"
                value={formData.payment}
                onChange={handleChange}
                placeholder="Digite o valor"
                theme="signin"
              ></InputLogin>
            </Container>
            <InputLogin
              theme="signin"
              label="Foto do estabelecimento"
              type="text"
              value={formData.image_link}
              onChange={handleChange}
              placeholder="Link da imagem do estabelecimento"
            ></InputLogin>
            <InputLogin
              label="Descrição"
              theme="description"
              value={formData.description}
              onChange={handleChange}
              type="text"
              placeholder="Digite um breve texto de apresentação"
            ></InputLogin>
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
            <Button
              theme="signin_owner"
              text="Salvar alterações"
              redirect="/"
            />
          </Box>
        
      </SignInPlaceBox>
      
    </SignInPlaceContainer>
  );
}
export default SignInPlace;
