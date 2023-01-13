
interface Place {
    id:string;
    name: string;
    latitude: number;
    longitude: number;
    opening_hours: string;
    image_link: string;
    average_ticket_price: number;
  }
interface FilterSearchProps {
    data: Place[]
}


function FilterSearch (props: FilterSearchProps){
    const data = props.data
    return (
      data.map((place, index)=>(
        console.log(place)
        
      ))
    )
}

export default FilterSearch