import baseApi from "./config";

export function createUser(req: any) {
  return baseApi.post("/createuser", {
    email: req.email,
    password: req.password,
    name: req.name,
    image_link: req.image_link,
    city: req.city,
    state: req.state,
    country: req.country,
  });
}
