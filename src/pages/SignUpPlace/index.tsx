import { Checkbox, FormControlLabel, FormControl } from "@mui/material";
import InputLogin from "../../components/InputLogin";
import {
  SignUpPlaceBox,
  TagsTitle,
  SignUpPlaceContainer,
  Container,
  FormGroupStyled,
  Column,
} from "./style";
import { TAGS } from "../../mock/tags";
import { Link, useNavigate } from "react-router-dom";
import LogoSrc from "../../assets/image/logo_vertical.png";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import SubmitButton from "../../components/SubmitButton";
import { createPlace } from "../../services/MainApi/sign_up_place";
import { useOwner } from "../../store/modules/owner";

function SignUpPlace() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const ownerData = useOwner();
  const [owner_id, setOwnerId] = useState<string>("");

  const dataFetchRef = useRef(false);

  useEffect(() => {
    /* if (dataFetchRef.current) return;
    dataFetchRef.current = true; */
    if (ownerData.isLogged) {
      setOwnerId(ownerData.findOwner.id);
    }
  });

  const onSubmit = (data: any) => {
    placeCreate(
      data.name,
      data.place_types_ids,
      data.food_types_ids,
      data.place_profiles_ids,
      data.city,
      data.state,
      data.country,
      data.zipcode,
      data.district,
      data.street,
      data.place_number,
      data.complement,
      data.image_link,
      data.capacity,
      data.description,
      data.phone,
      data.average_ticket_price,
      data.social_media,
      data.opening_hours,
      data.payment,
      owner_id
    );
    console.log();
  };

  const placeCreate = async (
    name: string,
    place_types_ids: any[],
    food_types_ids: any[],
    place_profiles_ids: any[],
    city: string,
    state: string,
    country: string,
    zipcode: string,
    district: string,
    street: string,
    place_number: string,
    complement: string,
    image_link: string,
    capacity: number,
    description: string,
    phone: string,
    average_ticket_price: string,
    social_media: string,
    opening_hours: string,
    payment: string,
    owner_id: string
  ) => {
    const req = {
      name: name,
      place_types_ids: place_types_ids,
      food_types_ids: food_types_ids,
      place_profiles_ids: place_profiles_ids,
      city: city,
      state: state,
      country: country,
      zipcode: zipcode,
      district: district,
      street: street,
      place_number: place_number,
      complement: complement,
      image_link: image_link,
      capacity: capacity,
      description: description,
      phone: phone,
      average_ticket_price: average_ticket_price,
      social_media: social_media,
      opening_hours: opening_hours,
      payment: payment,
      owner_id: owner_id,
    };
    try {
      const response = await createPlace(req);
      console.log(response);
      navigate("/");
    } catch (error) {
      alert("Deu algo errado no catch");
    }
  };

  return (
    <SignUpPlaceContainer>
      <Link to='/'>
        <img src={LogoSrc} alt='logo_bergamotta' />
      </Link>
      <form id='my-form' onSubmit={handleSubmit(onSubmit)}>
        <SignUpPlaceBox>
          <Column>
            <FormControl {...register("name")}>
              <InputLogin
                label='Estabelecimento'
                type='text'
                placeholder='Digite o nome do estabelecimento'
                name='name'
              />
            </FormControl>
            <FormControl {...register("street")}>
              <InputLogin
                theme='signin'
                label='Rua'
                name='street'
                type='text'
                placeholder='Digite a rua do seu endereço'
              />
            </FormControl>
            <Container>
              <FormControl {...register("place_number")}>
                <InputLogin
                  theme='signin'
                  label='Número'
                  name='place_number'
                  type='text'
                  placeholder='Digite o número do endereço'
                />
              </FormControl>
              <FormControl {...register("complement")}>
                <InputLogin
                  theme='signin'
                  label='Complemento'
                  name='complement'
                  type='text'
                  placeholder='Digite o complemento'
                />
              </FormControl>
              <FormControl {...register("zipcode")}>
                <InputLogin
                  theme='signin'
                  label='CEP'
                  name='zipcode'
                  type='text'
                  placeholder='Digite seu CEP'
                />
              </FormControl>
            </Container>
            <Container>
              <FormControl {...register("district")}>
                <InputLogin
                  theme='signin'
                  label='Bairro'
                  name='district'
                  type='text'
                  placeholder='Digite seu bairro'
                />
              </FormControl>
              <FormControl {...register("city")}>
                <InputLogin
                  theme='signin'
                  label='Cidade'
                  name='city'
                  type='text'
                  placeholder='Digite sua cidade'
                />
              </FormControl>
              <FormControl {...register("state")}>
                <InputLogin
                  theme='signin'
                  label='Estado'
                  name='state'
                  type='text'
                  placeholder='Digite seu estado'
                />
              </FormControl>
              <FormControl {...register("country")}>
                <InputLogin
                  theme='signin'
                  label='País'
                  name='country'
                  type='text'
                  placeholder='Digite seu país'
                />
              </FormControl>
            </Container>
            <Container>
              <FormControl {...register("average_ticket_price")}>
                <InputLogin
                  label='Ticket Médio'
                  type='text'
                  name='average_ticket_price'
                  placeholder='Digite o valor'
                  theme='signin'
                />
              </FormControl>
              <FormControl {...register("payment")}>
                <InputLogin
                  label='Meios de pagamento'
                  type='text'
                  name='payment'
                  placeholder='Digite o valor'
                  theme='signin'
                />
              </FormControl>
              <FormControl {...register("capacity", { valueAsNumber: true })}>
                <InputLogin
                  label='Capacidade'
                  type='number'
                  name='capacity'
                  placeholder='Digite a lotação'
                  theme='signin'
                />
              </FormControl>
            </Container>
            <FormControl {...register("image_link")}>
              <InputLogin
                theme='signin'
                label='Foto do estabelecimento'
                type='text'
                name='image_link'
                placeholder='Link da imagem do estabelecimento'
              />
            </FormControl>
            <Container>
              <FormControl {...register("opening_hours")}>
                <InputLogin
                  theme='signin'
                  label='Horário de funcionamento'
                  name='opening_hours'
                  type='text'
                  placeholder='Digite o horário'
                />
              </FormControl>
              <FormControl {...register("phone")}>
                <InputLogin
                  label='Telefone'
                  theme='text'
                  name='phone'
                  type='text'
                  placeholder='Digite seu telefone para contato'
                />
              </FormControl>
              <FormControl {...register("social_media")}>
                <InputLogin
                  label='Social Media'
                  theme='text'
                  name='social_media'
                  type='text'
                  placeholder='Digite seu link do Instagram'
                />
              </FormControl>
            </Container>
            <FormControl {...register("description")}>
              <InputLogin
                label='Descrição'
                theme='description'
                name='description'
                type='text'
                placeholder='Digite um breve texto de apresentação'
              />
            </FormControl>
          </Column>
          <Column>
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
                } else if (tag.tag_type === "food_types_ids") {
                  return (
                    <FormControlLabel
                      {...register("food_types_ids")}
                      control={<Checkbox value={tag.tag_id} />}
                      label={tag.tag}
                      key={index}
                    />
                  );
                } else if (tag.tag_type === "place_types_ids") {
                  return (
                    <FormControlLabel
                      {...register("place_types_ids")}
                      control={<Checkbox value={tag.tag_id} />}
                      label={tag.tag}
                      key={index}
                    />
                  );
                } else return "";
              })}
            </FormGroupStyled>
            <SubmitButton
              theme='signin_owner'
              text='Cadastrar Estabelecimento'
            />
          </Column>
        </SignUpPlaceBox>
      </form>
    </SignUpPlaceContainer>
  );
}
export default SignUpPlace;
