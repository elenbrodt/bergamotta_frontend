import {Section} from "./style";

interface BoxProps{
    background: string;
    children: JSX.Element;
}

function Box(props: BoxProps) {
    return <Section background={props.background}>{props.children}</Section>;
}

export default Box;