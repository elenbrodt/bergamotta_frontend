import RatingMui from '@mui/material/Rating';
import { useState } from 'react';
function Home (){
    const [value, setValue] = useState<number | null>(2);
    
    return(
        <div>
            <h1>Bergmotta</h1>
            <RatingMui
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </div>
    )
}

export default Home