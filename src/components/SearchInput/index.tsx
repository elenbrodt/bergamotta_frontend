import SearchIcon from "@mui/icons-material/Search";
import { FormGroup } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../store/modules/filter";

import { SearchBox } from "./styles";
function SearchInput() {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearch({ search: value }));
  }, [value]);

  return (
    <SearchBox>
      <SearchIcon />
      <FormGroup>
        <InputBase
          placeholder='Digite aqui...'
          inputProps={{ "aria-label": "search" }}
          id='input'
          type='text'
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </FormGroup>
    </SearchBox>
  );
}

export default SearchInput;
