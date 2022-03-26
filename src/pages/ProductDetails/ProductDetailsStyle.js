import styled from 'styled-components'

export const Container = styled.section`
width: 85%;
margin: auto;
margin-top: 50px;
display: grid;
grid-template-columns: 150px 600px 1fr;
gap: 30px; 

`
export const ImgContainer = styled.div`
// margin-top : 8rem;
`
export const InfoContainer = styled.div`
// margin-top: 50px;
& h2{
    font-size: 30px;
    font-weight: 600;
}
& h3{
    font-size: 30px;
    font-weight: 400;
}
& label {
    font-family: Roboto Condensed;
    font-size : 18px;
    font-weight: 700;
}

`
export const SwatchContainer = styled.div`
display: flex;
padding: 10px 0;
& div{
    width : 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 5px;
    cursor: pointer

}
& .active{
    border: 2px solid black
}
`
export const TextContainer = styled.div`
display: flex;
& div{
    padding: 10px;
    cursor: pointer;
    border: 1px solid #000;
    margin-right: 5px;
    margin-bottom: 10px;

    
}
& .active{
    background-color: black;
    color: #fff;    
}

`
export const Price = styled.div`
font-size: 24px;
font-weight: 700;
padding: 10px 0;
& span{
    transfom : translatY(5px);
}

`
export const AddCartBtn = styled.button`
cursor: pointer;
width: 292px;
height: 52px;
color : white; 
background-color: #FF8500;
border : none;
font-weight: 600;
font-size: 16px;
text-transform: uppercase;
margin-bottom: 10px;
`
