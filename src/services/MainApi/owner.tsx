import baseApi from "./config";

export function createOwner(req: any) {
  return baseApi.post("/owner", {
    email: req.email,
    password: req.password,
    name: req.name,
    image_link: req.image_link,
    city: req.city,
    state: req.state,
    country: req.country,
    cnpj: req.cnpj,
    role: req.role,
  });
}

export function byIdOwner(props: string) {
  return baseApi.get(`/owner/${props}`);
}

export function updateOwner(req: any, props: string) {
  return baseApi.put(`/owner/${props}`, {
    email: req.email,
    password: req.password,
    name: req.name,
    image_link: req.image_link,
    city: req.city,
    state: req.state,
    country: req.country,
    cnpj: req.cnpj,
    role: req.role,
  });
}
