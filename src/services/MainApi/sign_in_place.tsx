import baseApi from "./config"

export function createPlace(req: any, props: string) {
    return baseApi.post('/createplace',
        {
            name: req.name,
            place_types_ids: [req.place_types_ids],
            food_types_ids: [req.food_types_ids],
            place_profiles_ids: [req.place_profiles_ids],
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
        },
        {
            headers: {
                'Authorization': `Bearer ${req.token}`
            }
        })
}