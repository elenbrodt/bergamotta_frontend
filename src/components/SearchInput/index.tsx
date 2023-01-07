import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { SearchBox } from "./styles";

function SearchInput() {
  return (
    <SearchBox>
      <SearchIcon />
      <InputBase
        placeholder="Encontre restaurantes..."
        inputProps={{ "aria-label": "search" }}
      />
    </SearchBox>
  );
}

export default SearchInput;
