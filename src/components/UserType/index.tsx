import { Radio } from "@mui/material";
import {FormControlLabelStyled} from "./style"

type UserTypeProps = {
  text: string;
  user_type?: string;
  onChange: (value?:string) => void;
  name: string;
};

function UserType(props: UserTypeProps) {
  return <FormControlLabelStyled name={props.name}  value={props.user_type} control={<Radio color="success" onChange={(e)=>{props.onChange(e.target.value)}}/>} label={props.text} />;
}
export default UserType;
