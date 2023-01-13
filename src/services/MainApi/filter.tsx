import baseApi from "./config"

export function filters(req: any)
{
    return baseApi.post('/filter', 
         {  place_types_ids: req.place_types_ids, 
            food_types_ids: req.food_types_ids, 
            place_profiles_ids: req.place_profiles_ids})
            
}