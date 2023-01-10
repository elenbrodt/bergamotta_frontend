import { ButtonLogin } from "./style";

interface ButtonProps {
    text: string;
    redirect: string;
    theme?: string;
}

function Button (props: ButtonProps) {
    return (
<ButtonLogin theme="submit" href={props.redirect}>{props.text}</ButtonLogin>
    );
}

export default Button;