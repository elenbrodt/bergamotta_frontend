import { Link } from "react-router-dom";

function SignInLink (){
    return(
        <>
            <p>Não possui uma conta?</p>
            <Link to="/signin">Cadastre-se Aqui</Link>
        </>
    )
}

export default SignInLink