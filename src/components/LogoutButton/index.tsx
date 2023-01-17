import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeOwner } from "../../store/modules/owner";
import { removeUser } from "../../store/modules/user";
import { LogoutButtonStyled } from "./styled";

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(removeUser({}));
    dispatch(removeOwner({}));
    navigate("/");
  };

  return (
    <LogoutButtonStyled onClick={(e) => handleClick()}>
      Logout
    </LogoutButtonStyled>
  );
}
export default LogoutButton;
