import { Marker, Popup } from "react-leaflet";
import CardPlace from "../../components/CardPlace";

interface Points {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  image_link: string;
  average_ticket_price: number;
  opening_hours: string;
}
type MapProps = {
  points: Points[];
};
function Markers(props: MapProps) {
  const { points } = props;
  return (
    <>
      {points.map((point, index) => (
        <Marker position={[point.latitude, point.longitude]}>
          <Popup>
            <CardPlace
              id={point.id}
              key={index}
              name={point.name}
              opening_hours={point.opening_hours}
              image_link={point.image_link}
              average_ticket_price={point.average_ticket_price}
            />
          </Popup>
        </Marker>
      ))}
    </>
  );
}
export default Markers;
