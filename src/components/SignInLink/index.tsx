import {SignInLinkBox, LinkSignIn} from "./style";
function SignInLink (){
    return(
        <SignInLinkBox>
            <p>Não possui uma conta?</p>
            <LinkSignIn to="/signin">Cadastre-se Aqui</LinkSignIn>
        </SignInLinkBox>
    )
}

export default SignInLink