import {Logo, Title, LoginBox} from "./styles"
import LogoSrc from "../../assets/image/logo_vertical.png"
//import VisibilityIcon from '@mui/icons-material/Visibility';
//import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputLogin from "../../components/InputLogin";
import PasswordReminder from "../../components/PasswordReminder"
function Login (){
    return (
        <>
            <LoginBox>
                <Logo src={LogoSrc}/>
                <Title>Olá, que bom ter você <br/> de volta!👋</Title>
                <InputLogin type="email" placeholder="exemplo@email.com" label="Email"/>
                <InputLogin type="password" placeholder="Digite sua senha" label="Senha" />
                <PasswordReminder/>
            </LoginBox>
        </>           
    )
}
export default Login