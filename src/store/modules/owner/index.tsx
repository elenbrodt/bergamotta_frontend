import {createSlice} from '@reduxjs/toolkit'
import Cookie from 'js-cookie'
import { useSelector } from 'react-redux';

export interface OwnerState{
    token?: string, 
    findOwner: {
        id: string,
        name:string,
        email:string,
        password: string,
		image_link: string,
		cnpj: string,
		role: string,
		city: string,
		state: string,
		country: string,
		passwordReset: null,
		passwordExpired: null
    },
    isLogged: boolean,
}

const ownerReduce = createSlice({
    name: "owner",
    initialState:{
        isLogged: false,
    } as OwnerState,
    reducers:{
        setOwner(state, action){
            const owner = {
                token: action.payload.token,
                findOwner: action.payload.token.findOwner,
                isLogged: true
            }
            Object.assign(state, owner);
            Cookie.set("owner", JSON.stringify(owner))
        },
        removeOwner(state, action){
            Object.assign(state, {
                token: undefined,
                findOwner: undefined,
                isLogged: false,
            })
            Cookie.set("owner", "")
        }
    }

})

export const useOwner = () => {
    return useSelector((state: any) => state.owner) as OwnerState;
  };
  

export const {setOwner, removeOwner} = ownerReduce.actions;

export default ownerReduce.reducer;