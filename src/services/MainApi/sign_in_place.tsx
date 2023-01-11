import baseApi from "./config"

export function createPlace(){
    return baseApi.post('/createplace')
}