import baseApi from "./config"

export function listBlog(){
    return baseApi.get('/recipes')
}