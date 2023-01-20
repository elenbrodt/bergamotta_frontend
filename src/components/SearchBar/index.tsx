import Filter from "../Filter";
import SearchInput from "../SearchInput";
import { SearchBarStyle } from "./styles";

function SearchBar() {
  return (
    <SearchBarStyle>
      <SearchInput />
      <Filter texto='Buscar' />
    </SearchBarStyle>
  );
}
export default SearchBar;
