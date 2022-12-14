import {  CardContent, CardMedia, Rating } from '@mui/material';
import { CardBergamotta, PriceBox, LinkCard } from './styles';
import "./style.css"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


interface CardProps {
    id: string;
    name: string;
    opening_hours: string;
    image_link: string;
    average_ticket_price: number;
    theme?: string;
}

function Price (price:number ){
    
    if (price < 50){
        return(
            <PriceBox>
                <AttachMoneyIcon/>
            </PriceBox>
            
        )
    }
    if (50 >= price || price <= 89){
        return (
            <PriceBox>
                <AttachMoneyIcon/>
                <AttachMoneyIcon/>
            </PriceBox>
        )
    }else if (price >90){
        return(
            <PriceBox>
                <AttachMoneyIcon/>
                <AttachMoneyIcon/>
                <AttachMoneyIcon/>
            </PriceBox>
        )
    }
}
function CardPlace (props: CardProps){
    const id= "/restaurantlocked/"+ props.id;
    
    return(
        <LinkCard to={id} className={props.theme}>
            <CardBergamotta id="myCard" className={props.theme}>
            <CardMedia
            component="img"
            alt="place_example"
            id="imageCard"
            image= {props.image_link}
            />
            <CardContent>
                <h5>{props.name}</h5>
                <Rating value={3.5} precision={0.5} readOnly/>
                {Price(props.average_ticket_price)}
                <p>{props.opening_hours}</p>
            </CardContent>      
      </CardBergamotta>
        </LinkCard>
        
    )
}
export default CardPlace