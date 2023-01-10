import { ButtonLogin } from "./style";

interface ButtonProps {
    text: string;
    redirect: string;
    theme?: string;
}

function Button (props: ButtonProps) {
    return (
<ButtonLogin theme={props.theme} href={props.redirect}>{props.text}</ButtonLogin>
    );
}

export default Button;