import styled from 'styled-components'


export const MiniCartCont = styled.div`
width: 90%;
margin: auto;
text-transform: capitalize;
font-size: 16px;
font-family: Raleway;

`
export const Price =styled.div`
font-weight : 700;
`
export const ProContainer = styled.div`
display: flex;
justify-content: space-between;

`
export const ImgContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 5px;
& div {
    
    & div{
        margin: 5px 0;
        padding: 5px 10px;
        border: 1px solid #1D1F22;
        cursor: pointer;
    }
}

`
