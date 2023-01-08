import { Marker, Popup} from 'react-leaflet'
interface Points {
    name: string;
    latitude: number;
    longitude: number;
  }
type MapProps = {
    
    points: Points[];
}
function Markers (props: MapProps){
    const { points} = props; 
    return (
        <>
            {points.map(point=>
            <Marker position={[point.latitude, point.longitude]}>
                <Popup>
                    {point.name}
                </Popup>
            </Marker>
        )}
        </>
        
    )
}
export default Markers