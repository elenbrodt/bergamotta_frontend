//import TuneIcon from '@mui/icons-material/Tune';
import { Checkbox, DialogActions, DialogContent, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import FilterIcon from "../../assets/image/filter.png"
import { DialogStyled, FilterButton, FilterLinkText, FilterTitle, FormGroupStyled } from './styles';
import "./style.css"
import IconButton from '@mui/material/IconButton';
import { TAGS } from "../../mock/tags";
import Button from '../Button';

interface FilterProps {
    texto: string;
}

export default function  Filter(props: FilterProps){
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return(
        <>
        <FilterButton id="buttonFilter" onClick={handleClickOpen}> 
            <IconButton>
                <img src={FilterIcon} alt="iconfilter"/>
            </IconButton>
            <FilterLinkText>{props.texto}</FilterLinkText>
        </FilterButton>
        <DialogStyled open={open} onClose={handleClose}>
            <FilterTitle>Filtros</FilterTitle>
            <DialogContent>
                <FormGroupStyled>
                    <h3>Tipos de loja</h3>
                    {TAGS.map((tag, index) => 
                        {if(tag.tag_type==="Tipos de loja" ){
                            return <FormControlLabel
                            control={<Checkbox />}
                            label={tag.tag}
                            key={index}
                            />
                            }else return ""
                        }
                    )}
                    <h3>Tipo de cozinha</h3>
                    {TAGS.map((tag, index) => 
                        {if(tag.tag_type==="Tipo de cozinha" ){
                            return <FormControlLabel
                            control={<Checkbox />}
                            label={tag.tag}
                            key={index}
                            />
                            }else return ""
                        }
                    )}
                    <h3>Categorias</h3>
                    {TAGS.map((tag, index) => 
                        {if(tag.tag_type==="Categorias" ){
                            return <FormControlLabel
                            control={<Checkbox />}
                            label={tag.tag}
                            key={index}
                            />
                            }else return ""
                        }
                    )}
                    <h3>Experiências</h3>
                    {TAGS.map((tag, index) => 
                        {if(tag.tag_type==="Experiências" ){
                            return <FormControlLabel
                            control={<Checkbox />}
                            label={tag.tag}
                            key={index}
                            />
                            }else return ""
                        }
                    )}
                </FormGroupStyled>
            </DialogContent>
            <DialogActions>
                <Button text="Ver resultados" redirect='/'/>
            </DialogActions>
        </DialogStyled>
      </>
    )
}



