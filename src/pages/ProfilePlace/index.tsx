import { useEffect, useState } from "react";
import { averageById, ratingByPlaceId } from "../../services/MainApi/ratings";
import { placeByOwnerId } from "../../services/MainApi/sign_up_place";
import { useOwner } from "../../store/modules/owner";
import rate from "./../../assets/imagesProfile/rating.png";
interface PlaceProps {
  name: string;
  place_types_ids: any[];
  food_types_ids: any[];
  place_profiles_ids: any[];
  city: string;
  state: string;
  country: string;
  zipcode: string;
  district: string;
  street: string;
  place_number: string;
  complement: string;
  image_link: string;
  capacity: number;
  description: string;
  phone: string;
  average_ticket_price: string;
  social_media: string;
  opening_hours: string;
  payment: string;
  owner_id: string;
  id: string;
}
interface UserProps {
  id: string;
  image_link: string;
  name: string;
}
interface RatingProps {
  id: string;
  general_rating: string;
  welcoming_service: Boolean;
  ingredient_substitution: Boolean;
  instagrammable_food: Boolean;
  tasty_food: Boolean;
  cozy: Boolean;
  service_speed: Boolean;
  comment: string;
  user: UserProps;
}
function PlaceProfile() {
  const owner = useOwner();

  const [placeData, setPlace] = useState<PlaceProps>();
  const [ratingData, setRating] = useState<RatingProps>();

  useEffect(() => {
    if (owner.isLogged) {
      console.log(owner.findOwner.id);
      const getData = async () => {
        try {
          const response = await placeByOwnerId(owner.findOwner.id);
          console.log(response.data);
        } catch (error) {
          console.error(error);
          alert("Deu algo errado no catch 2");
        }
      };
      getData();
      if (placeData?.name) {
        const getRating = async () => {
          try {
            const response = await ratingByPlaceId(placeData?.id as string);
            setRating(response.data);
          } catch (error) {
            console.error(error);
            alert("Deu algo errado no catch 1");
          }
        };
        getRating();
      }
    }
  }, [setPlace, owner]);

  console.log(placeData);

  return (
    <div className='App'>
      <div>
        <div>
          <div>
            <img src={placeData?.image_link} alt='' />
            <h2>{placeData?.name}</h2>
          </div>
          <div>
            <div>
              <p>{ratingData?.general_rating}</p>
              <p>STARS</p>
            </div>
            <div>
              <img src={rate} alt='avaliações' />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default PlaceProfile;
