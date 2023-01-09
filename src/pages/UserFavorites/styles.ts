import styled from 'styled-components';
import { colors, fonts } from '../../styles/theme';

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const RoundImage = styled.div`
margin-top: 51px;
width: 210px;
height: 210px;
border-radius: 100px;
`
export const ImgRound = styled.img`
width: 210px;
height: 210px;
border-radius: 100px;
`
export const UserName = styled.h2`
font-family: ${fonts.primary};
font-weight: 700;
font-size: 32px;
line-height: 35px;
color: ${colors.black};
`
export const FavoritesDiv = styled.div`
display: flex;
`
export const FavoritesDivLeft = styled.div`
display: flex;
flex-wrap: wrap;
`
export const FavTitles = styled.h3`
flex-grow: 2;
width: 174px;
height: 27px;
font-family: ${fonts.secondary};
font-weight: 700;
font-size: 24px;
line-height: 26px;
color: ${colors.black};
`
export const FavoritesDivRight = styled.div`
display: flex;
flex-wrap: wrap;
`