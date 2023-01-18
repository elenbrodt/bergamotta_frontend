import baseApi from "./config";

export function averageById(props: string) {
  return baseApi.get(`/averagerating/${props}`);
}

export function welcomingServiceById(props: string) {
  return baseApi.get(`/welcomingservice/${props}`);
}

export function ingredientSubstitutionById(props: string) {
  return baseApi.get(`/ingredientsubstitution/${props}`);
}
export function instagrammableFoodById(props: string) {
  return baseApi.get(`/instagrammablefood/${props}`);
}
export function tastyFoodById(props: string) {
  return baseApi.get(`/tastyfood/${props}`);
}
export function cozyById(props: string) {
  return baseApi.get(`/cozy/${props}`);
}
export function serviceSpeed(props: string) {
  return baseApi.get(`/servicespeed/${props}`);
}
export function userratingById(props: string) {
  return baseApi.get(`/ratingbyuser/${props}`);
}
export function ratingByPlaceId(props: string) {
  return baseApi.get(`/usercomment/${props}`);
}

export function createRating(req: any) {
  return baseApi.post(`/createrating`, {
    general_rating: req.general_rating,
    welcoming_service: req.ingredient_substitution,
    ingredient_substitution: req.ingredient_substitution,
    instagrammable_food: req.instagrammable_food,
    tasty_food: req.tasty_food,
    cozy: req.cozy,
    service_speed: req.service_speed,
    comment: req.comment,
    place_id: req.place_id,
    user_id: req.user_id,
  });
}
