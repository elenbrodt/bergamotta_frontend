import baseApi from "./config"

export function listBlog(){
    return baseApi.get('/recipes')
}

export function byIdBlog(props: string){
    return baseApi.get(`/recipe/${props}`)
}