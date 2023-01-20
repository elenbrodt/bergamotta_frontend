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
import { TAGS } from "../../data/tags";
import { Link, useNavigate } from "react-router-dom";
import LogoSrc from "../../assets/image/logo_vertical.png";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import SubmitButton from "../../components/SubmitButton";
import { createPlace } from "../../services/MainApi/sign_up_place";
import { useOwner } from "../../store/modules/owner";
import { Footer } from "../../components/Footer";

function SignUpPlace() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const ownerData = useOwner();
  const [owner_id, setOwnerId] = useState<string>("");

  useEffect(() => {
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
            <FormControl {...register("name", { required: true })}>
              <InputLogin
                label='Estabelecimento'
                type='text'
                placeholder='Digite o nome do estabelecimento'
                name='name'
              />
              {errors.name && <p>Esse campo é obrigatório</p>}
            </FormControl>
            <FormControl {...register("street", { required: true })}>
              <InputLogin
                theme='signin'
                label='Rua'
                name='street'
                type='text'
                placeholder='Digite a rua do seu endereço'
              />
              {errors.street && <p>Esse campo é obrigatório</p>}
            </FormControl>
            <Container>
              <FormControl {...register("place_number", { required: true })}>
                <InputLogin
                  theme='signin'
                  label='Número'
                  name='place_number'
                  type='text'
                  placeholder='Digite o número do endereço'
                />
                {errors.place_number && <p>Esse campo é obrigatório</p>}
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
              <FormControl {...register("zipcode", { required: true })}>
                <InputLogin
                  theme='signin'
                  label='CEP'
                  name='zipcode'
                  type='text'
                  placeholder='Digite seu CEP'
                />
                {errors.zipcode && <p>Esse campo é obrigatório</p>}
              </FormControl>
            </Container>
            <Container>
              <FormControl {...register("district", { required: true })}>
                <InputLogin
                  theme='signin'
                  label='Bairro'
                  name='district'
                  type='text'
                  placeholder='Digite seu bairro'
                />
                {errors.district && <p>Esse campo é obrigatório</p>}
              </FormControl>
              <FormControl {...register("city", { required: true })}>
                <InputLogin
                  theme='signin'
                  label='Cidade'
                  name='city'
                  type='text'
                  placeholder='Digite sua cidade'
                />
                {errors.city && <p>Esse campo é obrigatório</p>}
              </FormControl>
              <FormControl {...register("state", { required: true })}>
                <InputLogin
                  theme='signin'
                  label='Estado'
                  name='state'
                  type='text'
                  placeholder='Digite seu estado'
                />
                {errors.state && <p>Esse campo é obrigatório</p>}
              </FormControl>
              <FormControl {...register("country", { required: true })}>
                <InputLogin
                  theme='signin'
                  label='País'
                  name='country'
                  type='text'
                  placeholder='Digite seu país'
                />
                {errors.country && <p>Esse campo é obrigatório</p>}
              </FormControl>
            </Container>
            <Container>
              <FormControl
                {...register("average_ticket_price", { required: true })}
              >
                <InputLogin
                  label='Ticket Médio'
                  type='text'
                  name='average_ticket_price'
                  placeholder='Digite o valor'
                  theme='signin'
                />
                {errors.average_ticket_price && <p>Esse campo é obrigatório</p>}
              </FormControl>
              <FormControl {...register("payment", { required: true })}>
                <InputLogin
                  label='Meios de pagamento'
                  type='text'
                  name='payment'
                  placeholder='Digite o valor'
                  theme='signin'
                />
                {errors.payment && <p>Esse campo é obrigatório</p>}
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
            <FormControl {...register("image_link", { required: true })}>
              <InputLogin
                theme='signin'
                label='Foto do estabelecimento'
                type='text'
                name='image_link'
                placeholder='Link da imagem do estabelecimento'
              />
              {errors.image_link && <p>Esse campo é obrigatório</p>}
            </FormControl>
            <Container>
              <FormControl {...register("opening_hours", { required: true })}>
                <InputLogin
                  theme='signin'
                  label='Horário de funcionamento'
                  name='opening_hours'
                  type='text'
                  placeholder='Digite o horário'
                />
                {errors.opening_hours && <p>Esse campo é obrigatório</p>}
              </FormControl>
              <FormControl {...register("phone", { required: true })}>
                <InputLogin
                  label='Telefone'
                  theme='text'
                  name='phone'
                  type='text'
                  placeholder='Digite seu telefone para contato'
                />
                {errors.phone && <p>Esse campo é obrigatório</p>}
              </FormControl>
              <FormControl {...register("social_media", { required: true })}>
                <InputLogin
                  label='Social Media'
                  theme='text'
                  name='social_media'
                  type='text'
                  placeholder='Digite seu link do Instagram'
                />
                {errors.social_media && <p>Esse campo é obrigatório</p>}
              </FormControl>
            </Container>
            <FormControl {...register("description", { required: true })}>
              <InputLogin
                label='Descrição'
                theme='description'
                name='description'
                type='text'
                placeholder='Digite um breve texto de apresentação'
              />
              {errors.description && <p>Esse campo é obrigatório</p>}
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
          </Column>
        </SignUpPlaceBox>
        <SubmitButton theme='signin_owner' text='Cadastrar Estabelecimento' />
      </form>
      <Footer></Footer>
    </SignUpPlaceContainer>
  );
}
export default SignUpPlace;
