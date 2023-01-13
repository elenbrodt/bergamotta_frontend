import baseApi from "./config"

export function byIdUser(props: string){
    return baseApi.get(`/user/${props}`)
}