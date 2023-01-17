import { CardContent, CardMedia, Rating } from "@mui/material";
import { CardBergamotta, LinkCard, Container } from "./styles";
import "./style.css";
import { averageById } from "../../services/MainApi/ratings";
import { useEffect, useState } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

interface CardProps {
  id: string;
  name: string;
  opening_hours: string;
  image_link: string;
  average_ticket_price: number;
  theme?: string;
}

function CardPlace(props: CardProps) {
  const id = "/restaurantlocked/" + props.id;
  const [value, setValue] = useState<number>(1); //rating stars

  useEffect(() => {
    const getAverage = async () => {
      try {
        const response = await averageById(props.id);
        setValue(response.data);
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    if (props.id !== "000") {
      getAverage();
    }
  }, [props]);

  return (
    <LinkCard to={id} className={props.theme}>
      <CardBergamotta id='myCard' className={props.theme}>
        <CardMedia
          component='img'
          alt='place_example'
          id='imageCard'
          image={props.image_link}
        />
        <CardContent>
          <h5>{props.name}</h5>
          <Rating value={value} precision={0.5} readOnly />
          <Container>
            <AccessTimeFilledIcon />
            <p>{props.opening_hours}</p>
          </Container>
        </CardContent>
      </CardBergamotta>
    </LinkCard>
  );
}
export default CardPlace;
