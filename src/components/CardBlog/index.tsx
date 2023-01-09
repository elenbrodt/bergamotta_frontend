import { CardMedia } from '@mui/material';
import { CardBlog, TitleBlog, TextBlog, BlogLinks, ContentCard } from './styles';
import "./styles.css"

interface CardBlogProps {
    image_link: string;
    name: string;
    subtitle: string;
}

function BlogCard (props: CardBlogProps){
    return(
        <BlogLinks href="/blog">
        <CardBlog id="card">
            <CardMedia
            component="img"
            alt= "Imagem do Card"
            height="242"
            image= {props.image_link}
            />
            <ContentCard>
                <TitleBlog>{props.name}</TitleBlog>
                <TextBlog>{props.subtitle}</TextBlog>
            </ContentCard>
      </CardBlog>
      </BlogLinks>
    )
}
export default BlogCard;