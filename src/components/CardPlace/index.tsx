import {  CardContent, CardMedia, Rating } from '@mui/material';
import { CardBergamotta } from './styles';

function CardPlace (){
   
    return(
        <CardBergamotta >
            <CardMedia
            component="img"
            alt="place_example"
            height="150"
            image= "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?resize=1140%2C570&ssl=1"
            />
            <CardContent>
                <h5>nome</h5>
                <Rating value={3} readOnly/>
                <p>abertos</p>
            </CardContent>
      </CardBergamotta>
    )
}
export default CardPlace