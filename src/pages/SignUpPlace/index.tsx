import { Checkbox, FormControlLabel, FormControl } from "@mui/material";
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
import { useForm } from "react-hook-form";
import { useState } from "react";

function SignUpPlace() {
  const { register, handleSubmit } = useForm();
 
  const [name, setName] = useState<string>("");
  const[city, setCity] = useState<string>("");
  const[state, setState] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const[zipcode, setZipcode] = useState<string>("");
  const[district, setDistrict] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const[place_number, setPlaceNumber] = useState<string>("");
  const[complement, setComplement] = useState<number>(0);
  const[image_link, setImageLink] = useState<string>("");
  const[capacity, setCapacity] = useState<string>("");
  const[description, setDescription] = useState<string>("");
  const[phone, setPhone] = useState<string>("");
  const[average_ticket_price, setTicketPrice] = useState<string>("");
  const[opening_hours, setOpeningHours] = useState<string>("");
  const[payment, setPayment] = useState<string>("");
  const[social_media, setSocialMedia] = useState<string>("");
  const [place_types_ids, setPlaceTypes] = useState([""]);
  const [food_types_ids, setFoodTypes] = useState([""]);
  const [place_profiles_ids, setPlaceProfiles] = useState([""]);
 
  const onSubmit = (data: any) => {
    setName(data.name)
    setCity(data.city)
    setState(data.state)
    setCountry(data.country)
    setZipcode(data.zipcode)
    setDistrict(data.district)
    setStreet(data.street)
    setPlaceNumber(data.place_number)
    setComplement(data.complement)
    setImageLink(data.image_link)
    setCapacity(data.capacity)
    setDescription(data.description)
    setPhone(data.phone)
    setTicketPrice(data.average_ticket_price)
    setOpeningHours(data.opening_hours)
    setPayment(data.payment)
    setSocialMedia(data.social_media)
    setPlaceTypes(data.place_types_ids)
    setFoodTypes(data.food_types_ids)
    setPlaceProfiles(data.place_profiles_ids)
  };


  return (
    <SignInPlaceContainer>
      <Link to="/">
        <img src={LogoSrc} alt="logo_bergamotta" />
      </Link>
      <SignInPlaceBox>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <FormControl {...register("name")}>
              <InputLogin
                theme="signin"
                label="Estabelecimento"
                type="text"
                placeholder="Digite o nome do estabelecimento"
                name="name"
              />
            </FormControl>
            <FormControl {...register("street")}>
              <InputLogin
                theme="signin"
                label="Rua"
                name="street"            
                type="text"
                placeholder="Digite seu endereço"
              />
            </FormControl>
            <FormControl {...register("complement")}>
              <InputLogin
                theme="signin"
                label="Complemento"
                name="complement"            
                type="text"
                placeholder="Digite seu complemento"
              />
            </FormControl>
            <FormControl {...register("place_number")}>
              <InputLogin
                theme="signin"
                label="Complemento"
                name="place_number"            
                type="text"
                placeholder="Digite seu place_number"
              />place_number
            </FormControl>
            <FormControl {...register("city")}>
              <InputLogin
                theme="signin"
                label="Cidade"
                name="city"            
                type="text"
                placeholder="Digite sua cidade"
              />
            </FormControl>
            <FormControl {...register("state")}>
              <InputLogin
                theme="signin"
                label="Estado"
                name="state"            
                type="text"
                placeholder="Digite seu estado"
              />
            </FormControl>
            <FormControl {...register("country")}>
              <InputLogin
                theme="signin"
                label="País"
                name="country"            
                type="text"
                placeholder="Digite seu país"
              />
            </FormControl>
            <FormControl {...register("zipcode")}>
              <InputLogin
                theme="signin"
                label="CEP"
                name="zipcode"            
                type="text"
                placeholder="Digite seu CEP"
              />
            </FormControl>
            <FormControl {...register("district")}>
              <InputLogin
                theme="signin"
                label="district"
                name="district"            
                type="text"
                placeholder="Digite seu district"
              />
            </FormControl>
            <FormControl {...register("opening_hours")}>
              <InputLogin
                theme="signin"
                label="Horário de funcionamento"
                name="opening_hours"
                type="text"
                placeholder="Digite o horário"
              />
            </FormControl>
            
            <Container>
              <FormControl {...register("average_ticket_price")}>
                <InputLogin
                  label="Ticket Médio"
                  type="text"
                  name="average_ticket_price"
                  placeholder="Digite o valor"
                  theme="signin"
                />
              </FormControl>
              <FormControl {...register("payment")}>
                <InputLogin
                  label="Meios de pagamento"
                  type="text"
                  name="payment"
                  placeholder="Digite o valor"
                  theme="signin"
                />
              </FormControl>
              <FormControl {...register("capacity")}>
                <InputLogin
                  label="Capacidade"
                  type="text"
                  name="capacity"
                  placeholder="Digite a capacidade do local"
                  theme="signin"
                />capacity
              </FormControl>
            </Container>
            <FormControl {...register("image_link")}>
              <InputLogin
                theme="signin"
                label="Foto do estabelecimento"
                type="text"
                name="image_link"
                placeholder="Link da imagem do estabelecimento"
              />
            </FormControl>
            <FormControl {...register("description")}>
              <InputLogin
                label="Descrição"
                theme="description"
                name="description"
                type="text"
                placeholder="Digite um breve texto de apresentação"
              />
            </FormControl>
            <FormControl {...register("phone")}>
              <InputLogin
                label="Telefone"
                theme="text"
                name="phone"
                type="text"
                placeholder="Digite seu número"
              />
            </FormControl>
            <FormControl {...register("social_media")}>
              <InputLogin
                label="Social Media"
                theme="text"
                name="social_media"
                type="text"
                placeholder="Digite seu link do Instagram"
              />
            </FormControl>
          </Box>
          <Box>
            <TagsTitle>Selecione suas principais características</TagsTitle>
            <FormGroupStyled>
              {TAGS.map((tag, index) => {
                if (tag.tag_type === "place_profiles_ids") {
                  return (
                    <FormControlLabel
                    {...register("place_profiles_ids")}
                      control={<Checkbox value={tag.tag_id} />}
                      label={tag.tag}
                      key={index}
                    />
                  );
                }else if(tag.tag_type === "food_types_ids"){
                  return (
                    <FormControlLabel
                    {...register("food_types_ids")}
                      control={<Checkbox value={tag.tag_id} />}
                      label={tag.tag}
                      key={index}
                    />
                  );
                }else if(tag.tag_type === "place_types_ids"){
                  return (
                    <FormControlLabel
                    {...register("place_types_ids")}
                      control={<Checkbox value={tag.tag_id} />}
                      label={tag.tag}
                      key={index}
                    />
                  );
                }else return "";
            })}
            </FormGroupStyled>
            <Button
              theme="signin_owner"
              text="Salvar alterações"
              redirect="/"
            />
          </Box>

          </form>
          
        
      </SignInPlaceBox>
      
    </SignInPlaceContainer>
  );
}
export default SignUpPlace;
