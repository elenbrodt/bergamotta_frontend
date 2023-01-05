import { colors } from "../../styles/theme";
import styled from 'styled-components';
import Link from "../../components/Link";


export const Title = styled.h1`
margin: 0;
width: 740px;
height: 170px;
font-weight: 700;
font-size: 40px;
line-height: 55px;
text-align: center;
z-index:1;
color: ${colors.black}
`
export const Title2 = styled.h2`
margin:0;
width: 322px;
height: 97.45px;
font-weight: 700;
font-size: 40px;
color: ${colors.error}
`
export const Text = styled.text`
margin:0;
color: ${colors.black};
width: 504px;
height: 125.58px;
font-weight: 400;
font-size: 20px;
line-height: 28px;
`
export const Imgbody = styled.img` 
margin:0;
width: 706.03px;
height: 483px;
`

export const Orangebg1 = styled.img` 
margin:0;
width: 898.4px;
height: 1039.92px;
`
export const Overlaid1 = styled.img`
position: absolute;
margin-top: 300px;
z-index: 1;
width: 725px;
height: 743px;
`
export const UpperBody = styled.div` 
display: flex;
justify-content: center;
`
export const UpperBodyLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center
`
export const BottonBody = styled.div`
display: flex;
justify-content: space-between;
`
export const BottonBodyLeft = styled.div`
display: flex;
position: relative;
`
export const BottonBodyRight = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

export const LinkButton = styled(Link)`
margin:0
`
