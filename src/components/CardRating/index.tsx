import { TextField } from "@mui/material";
import { UserImg, Container, Box } from "./styles";

interface User {
  id: string;
  image_link: string;
  name: string;
}
function CardRating(props: User) {
  return (
    <Container>
      <UserImg src={props.image_link} />
      <Box>
        <p>{props.name}</p>
        <TextField />
      </Box>
    </Container>
  );
}

export default CardRating;
