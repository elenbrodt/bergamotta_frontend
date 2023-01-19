import { Radio } from "@mui/material";
import { FormControlLabelStyled } from "./style";

type UserTypeProps = {
  text: string;
  value?: string;
  onChange: (value?: string) => void;
  name?: string;
  checked?: boolean;
};

function UserType(props: UserTypeProps) {
  return (
    <FormControlLabelStyled
      name={props.name}
      value={props.value}
      control={
        <Radio
          checked={props.checked}
          color='success'
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
        />
      }
      label={props.text}
    />
  );
}
export default UserType;
