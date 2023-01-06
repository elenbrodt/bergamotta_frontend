import {Button, A} from "./style";

interface LinkProps {
    texto: string;
    redirect: string;
    size?: string;
}

function Link(props: LinkProps) {
    return (
        <Button size={props.size || "big"}>
            <A href={props.redirect}>{props.texto}</A>
        </Button>
    );
}

export default Link;