import { Radio } from "@mui/material";
import {FormControlLabelStyled} from "./style"

type UserTypeProps = {
  text: string;
  user_type?: string;
};

function UserType(props: UserTypeProps) {
  return <FormControlLabelStyled  value={props.user_type} control={<Radio color="success"/>} label={props.text} />;
}
export default UserType;
