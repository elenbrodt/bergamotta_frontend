import { Link } from "react-router-dom";

function SingInLink (){
    return(
        <>
            <p>Não possui uma conta?</p>
            <Link to="/singin">Cadastre-se Aqui</Link>
        </>
    )
}

export default SingInLink