import baseApi from "./config"

export function byIdUser(props: string) {
    return baseApi.get(`/user/${props}`)
}

export function createBlogComment(req: any, props: string) {
    return baseApi.post(`/${props}/createblogcomment`,
        {
            comment: req.comment,
            date: req.date,
            recipe_id: req.recipe_id,
            user_id: req.user_id
        },
        {
            headers: {
                'Authorization': `Bearer ${req.token}`              
            }})
}

export function blogCommentList(props:string) {
    return baseApi.get(`/blogcomments/${props}`)
}