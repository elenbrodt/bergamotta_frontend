import "./style.css"
import { LinkCard } from "./styles";


interface CardProps {
    id: string;
    image_link: string;
    name: string;
    subtitle: number;
    introduction: string;
    ingredients: number;
    directions: string;
  }


function CardBlogArticle (props: CardProps){
    const id= "/blogarticle/"+ props.id;
    return(
        <LinkCard to={id} >
            <img src={props.image_link} alt="Imagem blog"/>
            <h2>{props.name}</h2>
            <h3>{props.subtitle}</h3>
            <p>{props.introduction}</p>
            <p>{props.ingredients}</p>
            <p>{props.directions}</p>
        </LinkCard>
    )
}
export default CardBlogArticle