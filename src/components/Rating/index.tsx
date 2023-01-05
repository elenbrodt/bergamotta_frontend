import RatingMui from '@mui/material/Rating';
import { useState } from 'react';

function Rating () {
    const [value, setValue] = useState<number | null>(1);
    return(
        
            <RatingMui
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        
    )
}
export default Rating