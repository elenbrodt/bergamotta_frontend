import { InputBaseLogin, InputBox, InputLabel, InputBorder, IconPassword } from "./styles";
//import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface InputLoginProps {
  label?: string;
  type: string;
  placeholder: string;
  theme?: string;
}

function InputLogin(props: InputLoginProps) {
  switch (props.type) {
    case "password":
      return (
        <InputBox>
          <InputLabel >{props.label}</InputLabel>
          <InputBorder >
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
      return (
        <InputBox>
          <InputLabel className={props.theme}>{props.label}</InputLabel>
          <InputBorder >
            <InputBaseLogin
              placeholder={props.placeholder}
              inputProps={{ "aria-label": "search" }}
              type={props.type}
              className={props.theme}
            />
          </InputBorder>
        </InputBox>
      );
  }
}

export default InputLogin;
