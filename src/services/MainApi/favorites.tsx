import baseApi from "./config";

export function userFavoriteById(req: any, props: string) {
    return baseApi.get(`/userfavorite/${props}`,
        {
            headers: {
                'Authorization': `Bearer ${req.token}`              
            }
        })
}