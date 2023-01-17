import { useEffect, useState } from "react";
import { averageById, ratingByPlaceId } from "../../services/MainApi/ratings";
import { placeByOwnerId } from "../../services/MainApi/sign_up_place";
import { useOwner } from "../../store/modules/owner";
import rate from "./../../assets/imagesProfile/rating.png"

function PlaceProfile() {

    interface PlaceProps {
        id: string;
        image_link: string;
        name: string;
    }

    const owner = useOwner();

    const [placeData, setPlace] = useState<PlaceProps>();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await placeByOwnerId(owner.findOwner.id);
                setPlace(response.data);
            } catch (error) {
                console.error(error)
                alert("Deu algo errado no catch")
            }
        }
        getData();
    }, [setPlace, owner])

    console.log(placeData)

    interface UserProps {
        id: string
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
        comment: string
        user: UserProps
    }

    const [ratingData, setRating] = useState<RatingProps>();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await ratingByPlaceId(placeData?.id as string);
                setRating(response.data);
            } catch (error) {
                console.error(error)
                alert("Deu algo errado no catch")
            }
        }
        getData();
    }, [setRating, placeData])

    
    return (
        <div className="App">
            <div>
                <div>
                    <div>
                        <img src={placeData?.image_link} alt="" />
                        <h2>{placeData?.name}</h2>
                    </div>
                    <div>
                        <div>
                            <p>{ratingData?.general_rating}</p>
                            <p>STARS</p>
                        </div>
                        <div>
                            <img src={rate} alt="avaliações" />
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );


}

export default PlaceProfile;
