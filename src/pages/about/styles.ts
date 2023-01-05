import { colors } from "../../styles/theme";
import styled from 'styled-components';


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
color: ${colors.primary}
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
margin-top:-220px;
margin-bottom: -220px;
width: 808.4px;
height: 1039.92px;
`
export const Overlaid1 = styled.img`
position: absolute;
margin-top: 80px;
z-index: 1;
width: 725px;
height: 743px;
float: inline-start;
`
export const UpperBody = styled.div` 
display: flex;
justify-content: center;
margin-bottom: 125px;
`
export const UpperBodyLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
`
export const BottonBody = styled.div`
display: flex;
justify-content: space-between;
background-color: ${colors.light_one};

`
export const BottonBodyLeft = styled.div`
display: flex;
position: sticky;
background-color: ${colors.light_one};
z-index: 1;
margin-top: 100px;
margin-bottom: 100px;
`
export const BottonBodyRight = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: ${colors.light_one};
margin-top: 100px;
margin-bottom: 100px;
background-color: ${colors.light_one};
`
export const GreenBannerContainer = styled.div`
margin-top: 122px;
`
export const FormContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 12px;
`
export const FormContainerRight = styled.div`
display: flex;
position: relative;
`

export const Orangebg2 = styled.img`
width: 780.88px;
height: 662.04px;
`
export const Overlaid2 = styled.img`
position: absolute;
margin-top: 160px;
margin-right: 160px;
z-index: 1;
width: 685px;
height: 501px;
float: inline-start;
`
