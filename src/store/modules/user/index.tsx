import {createSlice} from '@reduxjs/toolkit'
import Cookie from 'js-cookie'
import { useSelector } from 'react-redux';

export interface UserState{
    token?: string,
    email?: string, 
    isLogged: boolean;
}

const userReduce = createSlice({
    name: "user",
    initialState:{
        isLogged: false,
    } as UserState,
    reducers:{
        setUser(state, action){
            const user = {
                token: action.payload.token,
                email: action.payload.email,
                isLogged: true
            }
            Object.assign(state, user);
            Cookie.set("user", JSON.stringify(user))
        },
        removeUser(state, action){
            Object.assign(state, {
                token: undefined,
                email: undefined,
                isLogged: false,
            })
        }
    }

})

export const useUser = () => {
    return useSelector((state: any) => state.user) as UserState;
  };
  

export const {setUser, removeUser} = userReduce.actions;

export default userReduce.reducer;