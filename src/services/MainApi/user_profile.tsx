import baseApi from "./config";

export function byIdUser(props: string) {
  return baseApi.get(`/user/${props}`);
}

export function updateUser(req: any, props: string) {
  return baseApi.put(`/user/${props}`, {
    email: req.email,
    password: req.password,
    name: req.name,
    image_link: req.image_link,
    city: req.city,
    state: req.state,
    country: req.country,
  });
}
