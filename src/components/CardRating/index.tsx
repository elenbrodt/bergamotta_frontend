import { Rating } from "@mui/material";
import { UserImg, Container, Box } from "./styles";

interface User {
  image_link: string;
  name: string;
  value?: string;
  stars: number;
}
function CardRating(props: User) {
  return (
    <Container>
      <UserImg src={props.image_link} />
      <Box>
        <p>{props.name}</p>
        <Rating value={props.stars} readOnly precision={0.5} />
        <input value={props.value} readOnly />
      </Box>
    </Container>
  );
}

export default CardRating;
