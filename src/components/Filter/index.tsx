import TuneIcon from '@mui/icons-material/Tune';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, FormControlLabel, FormGroup } from '@mui/material';
import { useState } from 'react';
import { FilterButton, FilterLinkText, FilterTitle } from './styles';
import "./style.css"

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
        <FilterButton onClick={handleClickOpen}> 
            <TuneIcon/>
            <FilterLinkText>{props.texto}</FilterLinkText>
        </FilterButton>
        <Dialog  open={open} onClose={handleClose}>
            <FilterTitle id="modal">Filtros</FilterTitle>
            <DialogContent>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Todas as lojas" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Restaurante" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Bar" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Restobar" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Bistrô" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Lanchonete" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Café" />
                </FormGroup>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
      </>
    )
}



