import {Title} from "./styles"
import {listPlace} from "../../services/MainApi/search"
import { useEffect, useState } from "react";

interface Place {
    name: string;
    latitude: number;
    longitude: number;
}

export default function SideList (){
    const [places, setPlaces] = useState<Place[]>([]);

    useEffect (()=> {
        const getData = async () => {
            try{
                const response = await listPlace();
                setPlaces (response.data);
                console.log(response.data)
            }catch(error){
                alert("Deu algo errado no catch")
            }
        }
        getData();
    }, [setPlaces])
    return (
        <div>
            <Title>Lista de Restaurantes</Title>
            <ul>
                {places.map((place, index)=> (
                    <li key={index}>{place.name}</li>
                ))}
            </ul>
        </div>
    )
}