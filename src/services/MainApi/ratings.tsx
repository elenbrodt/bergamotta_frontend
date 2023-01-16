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
export function userratingById( props: string) {
  return baseApi.get(`/ratingbyuser/${props}`);
}
