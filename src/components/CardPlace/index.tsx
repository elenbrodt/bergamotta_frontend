import {  CardContent, CardMedia, Rating } from '@mui/material';
import { CardBergamotta } from './styles';
import "./style.css"

interface CardProps {
    name: string;
    opening_hours: string;
    image_link: string;
}

function CardPlace (props: CardProps){

    const value = 1;
    return(
        <CardBergamotta id="myCard">
            <CardMedia
            component="img"
            alt="place_example"
            id="imageCard"
            image= {props.image_link}
            />
            <CardContent>
                <h5>{props.name}</h5>
                <Rating value={value} readOnly/>
                <p>{props.opening_hours}</p>
            </CardContent>
      </CardBergamotta>
    )
}
export default CardPlace