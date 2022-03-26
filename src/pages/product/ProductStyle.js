import styled from'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
display: grid;
grid-template-columns: 356px 356px 356px;
gap: 100px;
`
export const Name = styled.h2`
font-weight: 300;
font-size: 18px;
line-height: 160%;
margin-bottom: 0; 

`
export const Price = styled.span`
font-weight: 700;
font-size: 18px;
line-height: 160%;
`
export const ProductCard = styled(Link)`
color: #1D1F22;
text-decoration: none;
position: relative;
cursor : pointer;
`
export const Overlay = styled.div`
width: 356px ;
height: 338px ;
background-color: rgba(255,255,255,.2); 
position: absolute;
top:  0;
left: 0;
display: flex; 
justify-content: center;
align-items: center;
color: #8D8F9A;
font-weight: 400;
font-size: 24px;
`

export const  Carticon = styled.img`
position: absolute;
right: 35px ;
bottom: 60px;

`