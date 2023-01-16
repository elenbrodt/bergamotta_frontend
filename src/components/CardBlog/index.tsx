import { CardMedia } from "@mui/material";
import {
  CardBlog,
  TitleBlog,
  TextBlog,
  BlogLinks,
  ContentCard,
} from "./styles";
import "./styles.css";

interface CardBlogProps {
  id: string;
  image_link: string;
  name: string;
  subtitle: string;
}

function BlogCard(props: CardBlogProps) {
  const id = "/blogarticle/" + props.id;

  return (
    <div>
      <BlogLinks to={id}>
        <CardBlog id='card'>
          <CardMedia
            component='img'
            alt='Imagem do Card'
            height='242'
            image={props.image_link}
          />
          <ContentCard>
            <TitleBlog>{props.name}</TitleBlog>
            <TextBlog>{props.subtitle}</TextBlog>
          </ContentCard>
        </CardBlog>
      </BlogLinks>
    </div>
  );
}
export default BlogCard;
