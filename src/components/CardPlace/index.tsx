import { CardContent, CardMedia, Rating } from "@mui/material";
import { CardBergamotta, LinkCard, Container } from "./styles";
import "./style.css";
import { averageById } from "../../services/MainApi/ratings";
import { useEffect, useState } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
interface CardProps {
  id: string;
  name: string;
  opening_hours: string;
  image_link: string;
  average_ticket_price: number;
  theme?: string;
  phone?: string;
  social_media?: string;
  width?: string;
  type?: string;
}

function CardPlace(props: CardProps) {
  const id = "/restaurantlocked/" + props.id;
  const [value, setValue] = useState<number>(3); //rating stars
  const [socials, setSocials] = useState<string>();

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
    setSocials(props.social_media);
  }, [props]);
  const at = socials?.split("/")[3];
  return (
    <LinkCard to={id} className={props.type}>
      <CardBergamotta id='myCard' className={props.theme}>
        <CardMedia
          component='img'
          alt='place_example'
          id='imageCard'
          image={props.image_link}
        />
        <CardContent>
          <h5>{props.name}</h5>
          <Rating id='stars' value={value} precision={0.5} readOnly />
          <Container>
            <AccessTimeFilledIcon />
            <p>{props.opening_hours}</p>
          </Container>
          {props.phone && (
            <>
              <Container>
                <PhoneIcon />
                <p>{props.phone}</p>
              </Container>
              <Container>
                <InstagramIcon />
                <p>{at}</p>
              </Container>
            </>
          )}
        </CardContent>
      </CardBergamotta>
    </LinkCard>
  );
}
export default CardPlace;
