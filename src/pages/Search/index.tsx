
import Map from '../../components/Map';
import { SearchContainer, SideBar } from './styles';
import Header from "../../components/Header"
import SideList from "../../components/SideList"

import {CITY} from '../../mock/city';
import SearchBar from '../../components/SearchBar';
import GreenBanner from '../../components/GreenBanner';
import CardPlace from '../../components/CardPlace';

function Search (){
    return(
        <div className="App">
            <Header/>
            <SearchContainer>
                <SideBar>
                    <SearchBar/>
                    <SideList/>
                    <GreenBanner id="greenCard" texto="Entre com sua conta para ter acesso a lista compoleta"
                        title = "Quer acessar mais restaurantes?" btn_text="CRIE SUA CONTA"/>
                     <CardPlace
                        id="000"
                        key="00"
                        name="Restaurant"
                        opening_hours="00h"
                        image_link="https://www.kitano.com.br/wp-content/uploads/2019/07/SSP_2480-Frango-assado-com-salsa-e-cebolinha-1.jpg"
                        average_ticket_price = {200}
                        theme="blocked"
                    />
                </SideBar>
                <Map city={CITY}/>
            </SearchContainer>
            
        </div>
    )
}

export default Search