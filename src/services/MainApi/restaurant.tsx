
import baseApi from "./config"

export function byIdPlace(props: string){
    return baseApi.get(`/place/${props}`)
}