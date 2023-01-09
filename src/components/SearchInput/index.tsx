
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import "./style.css"
import { SearchBox } from "./styles";

function SearchInput() {
  return (
    <SearchBox>
      <SearchIcon id="icon"/>
      <InputBase
        placeholder="São Paulo"
        inputProps={{ "aria-label": "search" }
        }
        id="input"
        disabled={false}
      />
    </SearchBox>
  );
}

export default SearchInput;
