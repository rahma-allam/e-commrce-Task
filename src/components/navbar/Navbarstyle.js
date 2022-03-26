import styled from 'styled-components';

export const Wrapper = styled.section`
height: 80px;
`

export  const Container = styled.div`
height: 100%;
width : 90%;
margin: auto;
display: flex;
justify-content: space-between; 
align-items: center; 
`;

export const Navlist = styled.ul`
text-align: center;
height: 100%;
padding: 0; 
margin: 0;
list-style: none;
display: flex;
justify-content: space-between; 
align-items: center;
& .active{
    border-bottom: 2px solid #FF8500; 
    & a{
        color: #FF8500;
    }
}
`;  



export const Navitem = styled.li`
padding: 10px;
font-size : 16px;
font-weight:400; 
lin-eheight: 19.2px;
text-transform: uppercase;
& a {
text-decoration: none;
color: #1D1F22;
}

}
`
export const Shopnav =styled.div`  
display: flex;
justify-content: space-evenly ;
align-items: normal; 
& a{
    background-color: white ;
    padding-right: 15px; 
}
`
export const Sign = styled.div`
font-size: 20px;
padding-right: 5px; 
cursor: pointer;
`
export const Countsign = styled.div`
width:20px;
height: 20px;
border-radius: 50%;
background-color : black ; 
color: white;
position: absolute;
top: 23px ;
right: 50px;
text-align: center;
cursor: pointer;
display: none;
${props => props.show &&({
    display: 'block'
    })}

`

export const CurrncList = styled.ul`
background-color: white;
 z-index: 999999;
 margin: 5px;
 padding: 0;
 position: absolute;
 top: 60px ;
 right: 5%;
 border-radius: 3px;
 box-shadow: 1px 1px 20px 0 rgb(0 0 0 / 15%);
 list-style: none;
 display : none ;
 ${props => props.show &&({
 display: 'block'
 })}
    
 & li {
        padding: 6px 15px;
        cursor: pointer;
        &:hover  {
            background-color: #eee ; 
        }
    & a{
        text-decoration: none;
        color:  #1D1F22;
        & span {

            padding-left: 10px;  
        }
       
    }

 }
`

export const MiniCartContainer = styled.div`
position: absolute;
left:0;
right: 0 ;
top: 78px;
min-height: 100%;
background-color: rgba(57, 55, 72, 0.22);
z-index: 1000;
`

export const MiniCartArea = styled.div`
background-color: white;
min-height: 100%;
width: 30%;
margin-left: auto;
& h2{
    margin-left: 5%;
    margin-top: 0;
    font-weight: 700;
& span{
    font-weight: 300;
}
}
    
`
export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
gap: 10px;
align-items: center;
padding: 10px ;
& button{
    padding : 10px 50px;
    cursor: pointer;
    text-transform : uppercase;
}
& .view{
    background-color: white;
    color: #1D1F22;
    border: 1px solid #1D1F22;
   
}
& .check {
    padding : 10px 50px;
    cursor: pointer;
    text-transform : uppercase;
    background-color : #ff8500;
    border: none;
    color: white ;
    text-decoration : none;

}
`
export const Total = styled.div`
display: flex;
justify-content: space-between;
width:  85%;
margin: auto ;
font-weight: 700;


`