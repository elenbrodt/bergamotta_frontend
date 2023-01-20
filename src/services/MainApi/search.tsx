import baseApi from "./config";

export function listPlace() {
  return baseApi.get("/places");
}
