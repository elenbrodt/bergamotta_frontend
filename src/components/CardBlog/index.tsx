import {  CardContent, CardMedia } from '@mui/material';
import { CardBlog, TitleBlog, TextBlog, BlogLinks } from './styles';
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
            <CardContent>
                <TitleBlog>{props.name}</TitleBlog>
                <TextBlog>{props.subtitle}</TextBlog>
            </CardContent>
      </CardBlog>
      </BlogLinks>
    )
}
export default BlogCard;