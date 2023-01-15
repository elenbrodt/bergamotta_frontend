
import baseApi from "./config"

export function averageById(props: string){
    return baseApi.get(`/averagerating/${props}`)
}