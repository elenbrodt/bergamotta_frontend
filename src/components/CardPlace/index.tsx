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
            height="150"
            image= "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?resize=1140%2C570&ssl=1"
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