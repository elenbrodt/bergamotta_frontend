import { Checkbox, DialogContent, FormControlLabel } from "@mui/material";
import { useState } from "react";
import FilterIcon from "../../assets/image/filter.png";
import {
  DialogStyled,
  FilterButton,
  FilterLinkText,
  FilterTitle,
  FormGroupStyled,
  ButtonStyled,
  GoodsTags,
} from "./styles";
import "./style.css";
import { TAGS } from "../../mock/tags";
import { useForm } from "react-hook-form";
import SubmitButton from "../SubmitButton";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/modules/filter";
import { useNavigate } from "react-router-dom";
import { colors } from "../../styles/theme";

interface FilterProps {
  texto: string;
}

export default function Filter(props: FilterProps) {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(
      setFilter({
        place_types_ids: data.place_types_ids,
        food_types_ids: data.food_types_ids,
        place_profiles_ids: data.place_profiles_ids,
      })
    );
    reset(data.place_types_ids, data.food_types_ids);
    reset(data.place_profiles_ids);
    //handleClose();
    console.log(caracteristicasValues);
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  const [caracteristicasValues, setCaracteristicasValues] = useState<
    Record<string, boolean>
  >({
    descontraído: false,
    formal: false,
    intimista: false,
    iluminacao_baixa: false,
    iluminacao_alta: false,
    pet_friendly: false,
    musica_vivo: false,
    musica_ambiente: false,
    sustentável: false,
  });

  const toggleCaracteristicas = (caracteristica: any) => {
    setCaracteristicasValues({
      ...caracteristicasValues,
      [caracteristica]: !caracteristicasValues[caracteristica],
    });
  };
  return (
    <>
      <FilterButton id='buttonFilter' onClick={handleClickOpen}>
        <img src={FilterIcon} alt='iconfilter' />
        <FilterLinkText>{props.texto}</FilterLinkText>
      </FilterButton>
      <DialogStyled open={open} onClose={handleClose}>
        <FilterTitle>Filtros</FilterTitle>
        <form id='myForm' onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <FormGroupStyled>
              <h3>Tipos de lojas</h3>
              {TAGS.map((tag, index) => {
                if (tag.tag_category === "Tipos de lojas") {
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
              <h3>Tipo de cozinha</h3>
              {TAGS.map((tag, index) => {
                if (tag.tag_category === "Tipos de cozinha") {
                  return (
                    <FormControlLabel
                      {...register("food_types_ids")}
                      control={<Checkbox value={tag.tag_id} />}
                      label={tag.tag}
                      key={index}
                    />
                  );
                } else return "";
              })}
              <h3>Ambiente</h3>

              <GoodsTags>
                {TAGS.map(({ tag_id, tag, tag_category }) => {
                  if (tag_category === "Ambiente") {
                    return (
                      <button
                        key={tag_id}
                        value={tag_id}
                        style={{
                          backgroundColor: caracteristicasValues[tag_id]
                            ? colors.secondary
                            : "",
                          color: caracteristicasValues[tag_id] ? "white" : "",
                        }}
                        onClick={() => toggleCaracteristicas(tag_id)}
                        type='button'
                        {...register("place_profiles_ids")}
                      >
                        {tag}
                      </button>
                    );
                  }
                })}
              </GoodsTags>

              <h3>Preferência</h3>
              {TAGS.map((tag, index) => {
                if (tag.tag_category === "Preferência") {
                  return (
                    <FormControlLabel
                      {...register("place_profiles_ids")}
                      control={<Checkbox value={tag.tag_id} />}
                      label={tag.tag}
                      key={index}
                    />
                  );
                } else return "";
              })}
            </FormGroupStyled>
          </DialogContent>
          <ButtonStyled>Ver resultados</ButtonStyled>
        </form>
      </DialogStyled>
    </>
  );
}
