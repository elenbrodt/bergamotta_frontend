
import Map from '../../components/Map';
import { SearchContainer, SideBar } from './styles';
import Header from "../../components/Header"
//import Rating from "../../components/Rating"
import SideList from "../../components/SideList"

import {CITY} from '../../mock/city';
import {POINTS} from '../../mock/points';
import SearchBar from '../../components/SearchBar';

function Search (){
    return(
        <div className="App">
            <Header/>
            <SearchContainer>
                <SideBar>
                    <SearchBar/>
                    <SideList/>
                </SideBar>
                <Map points={POINTS} city={CITY}/>
            </SearchContainer>
            
        </div>
    )
}

export default Search