//import { ChangeEvent } from "react";

import {
  InputBaseLogin,
  InputBox,
  InputLabel,
  InputBorder,
  IconPassword,
} from "./styles";
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
}

function InputLogin(props: InputLoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  switch (props.type) {
    case "password":
      return (
        <InputBox>
          <InputLabel>{props.label}</InputLabel>
          <InputBorder>
            <InputBaseLogin
              placeholder={props.placeholder}
              inputProps={{ "aria-label": "search" }}
              type={showPassword ? "text" : "password"}
              name={props.name}
            />
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              edge='end'
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputBorder>
        </InputBox>
      );

    default:
      return (
        <InputBox>
          <InputLabel className={props.theme}>{props.label}</InputLabel>
          <InputBorder>
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
