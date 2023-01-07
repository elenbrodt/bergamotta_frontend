import {  CardContent, CardMedia } from '@mui/material';
import { CardBlog, TitleBlog, TextBlog } from './styles';
import "./styles.css"

interface CardBlogProps {
    image_link: string;
    name: string;
    introduction: string;
}

function BlogCard (props: CardBlogProps){
    return(
        <CardBlog id="card">
            <CardMedia
            component="img"
            alt= "Imagem do Card"
            height="242"
            image= {props.image_link}
            />
            <CardContent>
                <TitleBlog>{props.name}</TitleBlog>
                <TextBlog>{props.introduction}</TextBlog>
            </CardContent>
      </CardBlog>
    )
}
export default BlogCard;