//import TuneIcon from '@mui/icons-material/Tune';
import {
  Checkbox,
  DialogActions,
  DialogContent,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import FilterIcon from "../../assets/image/filter.png";
import {
  DialogStyled,
  FilterButton,
  FilterLinkText,
  FilterTitle,
  FormGroupStyled,
} from "./styles";
import "./style.css";
import { TAGS } from "../../mock/tags";
import { useForm } from "react-hook-form";
import SubmitButton from "../SubmitButton";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/modules/filter";
import { useNavigate } from "react-router-dom";

interface FilterProps {
  texto: string;
}

export default function Filter(props: FilterProps) {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    dispatch(
      setFilter({
        place_types_ids: data.place_types_ids,
        food_types_ids: data.food_types_ids,
        place_profiles_ids: data.place_profiles_ids,
      })
    );
    reset(data.place_types_ids, data.food_types_ids);
    reset(data.place_profiles_ids);
    handleClose();
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <>
      <FilterButton id='buttonFilter' onClick={handleClickOpen}>
        <img src={FilterIcon} alt='iconfilter' />
        <FilterLinkText>{props.texto}</FilterLinkText>
      </FilterButton>
      <DialogStyled open={open} onClose={handleClose}>
        <FilterTitle>Filtros</FilterTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <FormGroupStyled>
              <h3>Tipos de loja</h3>
              {TAGS.map((tag, index) => {
                if (tag.tag_type === "place_types_ids") {
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
                if (tag.tag_type === "food_types_ids") {
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
              <h3>Categorias</h3>
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
                } else return "";
              })}
            </FormGroupStyled>
          </DialogContent>
          <DialogActions>
            <SubmitButton text='Ver resultados' />
          </DialogActions>
        </form>
      </DialogStyled>
    </>
  );
}
