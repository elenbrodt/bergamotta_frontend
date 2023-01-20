import { CardContent, CardMedia } from "@mui/material";
import { CardBergamotta, LinkCard, Container } from "./styles";
import "./style.css";

interface PlacesProps {
  id: string;
  image_link: string;
  name: string;
}
interface RatingProps {
  id: string;
  comment: string;
  place: PlacesProps;
}
function ProfileRatingCard(props: RatingProps) {
  return (
    <LinkCard to={props.place.id}>
      <CardBergamotta id='myCard'>
        <CardMedia
          component='img'
          alt='place_example'
          id='imageCard'
          image={props.place.image_link}
        />
        <CardContent>
          <h5>{props.place.name}</h5>
          <Container>
            <p>{props.comment}</p>
          </Container>
        </CardContent>
      </CardBergamotta>
    </LinkCard>
  );
}

export default ProfileRatingCard;
