//import { ChangeEvent } from "react";

import { InputBaseLogin, InputBox, InputLabel } from "./styles";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useState } from "react";
import { IconButton } from "@mui/material";

interface InputLoginProps {
  label?: string;
  type: string;
  placeholder: string;
  theme?: string;
  name?: string;
  defaultValue?: any;
  value?: any;
}

function InputLogin(props: InputLoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  switch (props.type) {
    case "password":
      return (
        <InputBox>
          <InputLabel>{props.label}</InputLabel>
          <div className='container'>
            <InputBaseLogin
              placeholder={props.placeholder}
              type={showPassword ? "text" : "password"}
              name={props.name}
              defaultValue={props.defaultValue}
              value={props.value}
            />
            <i>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </i>
          </div>
        </InputBox>
      );

    default:
      return (
        <InputBox>
          <InputLabel className={props.theme}>{props.label}</InputLabel>
          <InputBaseLogin
            placeholder={props.placeholder}
            //inputProps={{ "aria-label": "search" }}
            name={props.name}
            type={props.type}
            className={props.theme}
            defaultValue={props.defaultValue}
          />
        </InputBox>
      );
  }
}

export default InputLogin;
