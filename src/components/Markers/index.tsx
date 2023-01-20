import { Marker, Popup } from "react-leaflet";
import CardPlace from "../../components/CardPlace";
import { useOwner } from "../../store/modules/owner";
import { useUser } from "../../store/modules/user";
import "./styles.css";

interface Points {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  image_link: string;
  average_ticket_price: number;
  opening_hours: string;
  social_media: string;
  phone: string;
}
type MapProps = {
  points: Points[];
};
function Markers(props: MapProps) {
  const user = useUser();
  const owner = useOwner();
  const { points } = props;

  if (user.isLogged || owner.isLogged) {
    return (
      <>
        {points.map((point, index) => (
          <Marker
            position={[point.latitude, point.longitude]}
            eventHandlers={{
              mouseover: (event) => event.target.openPopup(),
            }}
            key={index}
          >
            <Popup className='pop'>
              <CardPlace
                id={point.id}
                key={index}
                name={point.name}
                opening_hours={point.opening_hours}
                image_link={point.image_link}
                average_ticket_price={point.average_ticket_price}
                phone={point.phone}
                social_media={point.social_media}
              />
            </Popup>
          </Marker>
        ))}
      </>
    );
  }
  return (
    <>
      {points.slice(0, 4).map((point, index) => (
        <Marker
          position={[point.latitude, point.longitude]}
          eventHandlers={{
            mouseover: (event) => event.target.openPopup(),
          }}
          key={index}
        >
          <Popup className='pop'>
            <CardPlace
              id={point.id}
              key={index}
              name={point.name}
              opening_hours={point.opening_hours}
              image_link={point.image_link}
              average_ticket_price={point.average_ticket_price}
              phone={point.phone}
              social_media={point.social_media}
            />
          </Popup>
        </Marker>
      ))}
    </>
  );
}
export default Markers;
