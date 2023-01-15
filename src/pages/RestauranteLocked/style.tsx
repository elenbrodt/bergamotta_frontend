import { CheckBox } from '@mui/icons-material';
import styled from 'styled-components';
import {colors} from "../../styles/theme";

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3{
        color: ${colors.primary};
        font-size: 24px;
        font-weight: 700;
        line-height: 26.4px;
    }
    h2{
        font-size: 32px;
        font-weight: 700;
        line-height: 35.2px;
    }
    img{
        width: 30vw;
    }
`
export const Title = styled.h1`
    color: ${colors.black},
    font-size: 40px;
    line-height: 44px;
    font-weight: 700;
`
export const Container = styled.div`
    display: flex;
    gap: 1vw;
    align-items: center;
`
export const PlaceContainer = styled.div`
    display: flex;
    padding: 3vh 4vw;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
`
export const FavoriteButton = styled (CheckBox)`
    color:${colors.error};
`