import Map from "../../components/Map";
import { SearchContainer, SideBar } from "./styles";
import Header from "../../components/Header";
import SideList from "../../components/SideList";
import { Footer } from "../../components/Footer";

import { CITY } from "../../mock/city";
import SearchBar from "../../components/SearchBar";
import GreenBanner from "../../components/GreenBanner";
import CardPlace from "../../components/CardPlace";
import { useUser } from "../../store/modules/user";
import { useOwner } from "../../store/modules/owner";

function Search() {
  const user = useUser();
  const owner = useOwner();

  return (
    <div className='App'>
      <Header />
      <SearchContainer>
        <SideBar>
          <SearchBar />
          <SideList />
          {!user?.isLogged && !owner?.isLogged && (
            <GreenBanner
              href='/cadastro'
              id='greenCard'
              texto='Entre com sua conta para ter acesso a lista completa'
              title='Quer acessar mais restaurantes?'
              btn_text='CRIE SUA CONTA'
            />
          )}
          {!user?.isLogged && !owner?.isLogged && (
            <CardPlace
              id='000'
              key='00'
              name='Restaurant'
              opening_hours='00h'
              image_link='https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              average_ticket_price={200}
              theme='blocked'
            />
          )}
        </SideBar>
        <Map city={CITY} />
      </SearchContainer>
      <Footer />
    </div>
  );
}

export default Search;
