
import Map from '../../components/Map';
import { SearchContainer, SideBar } from './styles';
import Header from "../../components/Header"
import SideList from "../../components/SideList"

import {CITY} from '../../mock/city';
import SearchBar from '../../components/SearchBar';
import GreenBanner from '../../components/GreenBanner';

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
                </SideBar>
                <Map city={CITY}/>
            </SearchContainer>
            
        </div>
    )
}

export default Search