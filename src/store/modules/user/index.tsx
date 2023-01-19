import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";
import { useSelector } from "react-redux";

export interface UserState {
  token: string;
  findUser: {
    id: string;
    name: string;
    email: string;
    password: string;
    image_link: string;
    passwordExpired: null;
    passwordReset: null;
  };
  isLogged: boolean;
}

const userReduce = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
  } as UserState,
  reducers: {
    setUser(state, action) {
      const user = {
        token: action.payload.token,
        findUser: action.payload.token.findUser,
        isLogged: true,
      };
      Object.assign(state, user);
      Cookie.set("user", JSON.stringify(user));
    },
    removeUser(state, action) {
      Object.assign(state, {
        token: undefined,
        findUser: undefined,
        isLogged: false,
      });
      Cookie.set("user", "");
    },
  },
});

export const useUser = () => {
  return useSelector((state: any) => state.user) as UserState;
};

export const { setUser, removeUser } = userReduce.actions;

export default userReduce.reducer;
