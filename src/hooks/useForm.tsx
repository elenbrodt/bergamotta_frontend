import { useState } from "react";

type FormData = {
    owner_id: string;
    name: string;
    place_types: string[];
    food_types: string[];
    place_profiles: string[];
    city: string;
    state: string;
    country: string;
    zipcode: string;
    district: string;
    street: string;
    place_number: string;
    complement: string;
    image_link: string;
    capacity: string;
    description: string;
    phone: string;
    average_ticket_price: string;
    social_media: string;
    opening_hours: string;
    payment: string;
};

export type FormHook = {
  formData: FormData;
  handleChange: (
    event: string
  ) => void;
  handleSubmit: (event: string) => void;
};

export function useForm(initialState: FormData): FormHook {
  const [formData, setFormData] = useState<FormData>(initialState);

  const handleChange = (event: any) => 
    {
      setFormData(event.target.value)
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formData);
        setFormData(initialState);
    };
  return {
    formData,
    handleChange,
    handleSubmit,
  };

}
