import { Title} from "./styles"
import "./styles.css"
interface TitleLoginProps {
    title: string;
    id?: string;
}

function TitleLogin (props: TitleLoginProps){
    return <Title className={props.id}>{props.title}</Title>
}
export default TitleLogin