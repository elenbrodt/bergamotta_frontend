import baseApi from "./config";

export function byIdPlace(props: string) {
  return baseApi.get(`/place/${props}`);
}

export function updatePlace(req: any) {
  return baseApi.put(`/place/${req.place_id}`, {
    name: req.name,
    city: req.city,
    state: req.state,
    country: req.country,
    zipcode: req.zipcode,
    district: req.district,
    street: req.street,
    place_number: req.place_number,
    complement: req.complement,
    image_link: req.image_link,
    capacity: req.capacity,
    description: req.description,
    phone: req.phone,
    average_ticket_price: req.average_ticket_price,
    social_media: req.social_media,
    opening_hours: req.opening_hours,
    payment: req.payment,
    owner_id: req.owner_id,
  });
}
