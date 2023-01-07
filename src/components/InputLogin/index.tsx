import { InputBaseLogin, InputBox, InputLabel, InputBorder, IconPassword } from "./styles";
//import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface InputLoginProps {
  label: string;
  type: string;
  placeholder: string;
}

function InputLogin(props: InputLoginProps) {
  switch (props.type) {
    case "email":
      return (
        <InputBox>
          <InputLabel>{props.label}</InputLabel>
          <InputBorder>
            <InputBaseLogin
              placeholder={props.placeholder}
              inputProps={{ "aria-label": "search" }}
              type={props.type}
            />
          </InputBorder>
        </InputBox>
      );
    case "password":
      return (
        <InputBox>
          <InputLabel>{props.label}</InputLabel>
          <InputBorder>
            <InputBaseLogin
              placeholder={props.placeholder}
              inputProps={{ "aria-label": "search" }}
              type={props.type}
            />
            <IconPassword />
          </InputBorder>
        </InputBox>
      );

    default:
      return null;
  }
}

export default InputLogin;
