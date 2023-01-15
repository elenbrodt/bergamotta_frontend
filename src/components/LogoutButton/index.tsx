import { useDispatch } from "react-redux";
import { removeOwner } from "../../store/modules/owner";
import { removeUser } from "../../store/modules/user";
import {LogoutButtonStyled} from "./styled"

function LogoutButton (){

    const dispatch = useDispatch();
    
    const handleClick=()=>{
        dispatch(removeUser({}));
        dispatch(removeOwner({}));
    }

    return(
        <LogoutButtonStyled onClick={(e)=>handleClick()}>
            Logout
        </LogoutButtonStyled>
    )
}
export default LogoutButton

