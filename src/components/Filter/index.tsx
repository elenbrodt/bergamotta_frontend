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
import IconButton from "@mui/material/IconButton";
import { TAGS } from "../../mock/tags";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { filters } from "../../services/MainApi/filter";

interface FilterProps {
  texto: string;
}

export default function Filter(props: FilterProps) {
  const { register, handleSubmit } = useForm();

  const [place_types_ids, setPlaceTypes] = useState([""]);
  const [food_types_ids, setFoodTypes] = useState([""]);
  const [place_profiles_ids, setPlaceProfiles] = useState([""]);

  const onSubmit = (data: any) => {
    setPlaceTypes(data.place_types_ids)
    setFoodTypes(data.food_types_ids)
    setPlaceProfiles(data.place_profiles_ids)
    getData();
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getData = async () => {
    const req = {
      place_types_ids: place_types_ids,
      food_types_ids: food_types_ids,
      place_profiles_ids: place_profiles_ids,
      
    };
    try {
      const response = await filters(req);
      console.log(response);
    } catch (error) {
      alert("Deu algo errado no catch");
    }
  };

  return (
    <>
      <FilterButton id="buttonFilter" onClick={handleClickOpen}>
        <IconButton>
          <img src={FilterIcon} alt="iconfilter" />
        </IconButton>
        <FilterLinkText>{props.texto}</FilterLinkText>
      </FilterButton>
      <DialogStyled open={open} onClose={handleClose}>
        <FilterTitle>Filtros</FilterTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              <button type="submit">teste</button>
            </FormGroupStyled>
          </form>
        </DialogContent>
        <DialogActions>
          <Button text="Ver resultados" redirect="/" />
        </DialogActions>
      </DialogStyled>
    </>
  );
}
