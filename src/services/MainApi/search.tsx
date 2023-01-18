import baseApi from "./config";

export function listPlace() {
  return baseApi.get("/places");
}

/* export function searchPlaces(query: string) {
  return baseApi.get(`/search/?q=${query}`);
}
 */
