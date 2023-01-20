import Map from "../../components/Map";
import { Banner, SearchContainer, SideBar, TextBanner } from "./styles";
import Header from "../../components/Header";
import SideList from "../../components/SideList";
import { Footer } from "../../components/Footer";

import { CITY } from "../../data/city";
import SearchBar from "../../components/SearchBar";

import CardPlace from "../../components/CardPlace";
import { useUser } from "../../store/modules/user";
import { useOwner } from "../../store/modules/owner";
import { Link } from "react-router-dom";

function Search() {
  const user = useUser();
  const owner = useOwner();

  return (
    <>
      <Header />
      <SearchContainer>
        <SideBar>
          <SearchBar />
          <SideList />
          {!user?.isLogged && !owner?.isLogged && (
            <Banner>
              <TextBanner>
                <h4>Quer acessar mais restaurantes?</h4>
                <p>Entre com sua conta para ter acesso a lista completa</p>
              </TextBanner>
              <Link to='/cadastro' id='link'>
                Crie sua conta
              </Link>
            </Banner>
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
    </>
  );
}

export default Search;
