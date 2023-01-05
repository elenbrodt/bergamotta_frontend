import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import {SearchBox} from "./styles"

function SearchBar(){
    return (
        <div>
            <SearchBox>
                <SearchIcon />
                <InputBase
                    placeholder="Encontre um restaurante…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </SearchBox>
        </div>
    )
}

export default SearchBar