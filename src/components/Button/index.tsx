import { ButtonLogin } from "./style";

interface ButtonProps {
    text: string;
    redirect: string;
}

function Button (props: ButtonProps) {
    return (
<ButtonLogin href={props.redirect}>{props.text}</ButtonLogin>
    );
}

export default Button;