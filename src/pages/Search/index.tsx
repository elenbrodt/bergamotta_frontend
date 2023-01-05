
import Map from '../../components/Map';
import { Title } from './styles';
import Header from "../../components/Header"
import Rating from "../../components/Rating"

import {CITY} from '../../mock/city';
import {POINTS} from '../../mock/points';

function Search (){
    return(
        <div className="App">
            <Header/>
            <Title>Bergamotta</Title>
            <Rating/>         
            <Map points={POINTS} city={CITY}
            />
        </div>
    )
}

export default Search