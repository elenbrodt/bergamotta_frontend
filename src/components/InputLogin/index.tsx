//import { ChangeEvent } from "react";

import { InputBaseLogin, InputBox, InputLabel, InputBorder, IconPassword } from "./styles";
//import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface InputLoginProps {
  label?: string;
  type: string;
  placeholder: string;
  theme?: string;
  name?: string;
  //onChange: (value:string) => void;
  
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
             //onChange={(event: any) => props.onChange(event.target.value)}
              name={props.name}
            
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
              name={props.name}
              type={props.type}
              className={props.theme}
             
              //onChange={(event: any) => props.onChange(event.target.value)}
            />
          </InputBorder>
        </InputBox>
      );
  }
}

export default InputLogin;
