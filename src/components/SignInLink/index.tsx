import {SignInLinkBox, LinkSignIn} from "./style";
type SignInLinkProps={
    text: string;
    link: string;
}
function SignInLink (props: SignInLinkProps){
    return(
        <SignInLinkBox>
            <p>{props.text}</p>
            <LinkSignIn to="/cadastro">{props.link}</LinkSignIn>
        </SignInLinkBox>
    )
}

export default SignInLink