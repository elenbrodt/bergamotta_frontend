import { SubmitButtonStyled } from "./styles"

interface SubmitButtonProps {
    text: string;
    theme?: string;
}

function SubmitButton (props: SubmitButtonProps){
    return (<SubmitButtonStyled type="submit" theme={props.theme}>{props.text}</SubmitButtonStyled>)
}

export default SubmitButton