import React, { Component, Fragment } from 'react'
import { CnxtConsumer } from '../../CnxtProvider'
import Product from '../product/Product';
import styled from 'styled-components'
import { Wrapper } from '../product/ProductStyle';

export default class ProductList extends Component {
  render() {
    return (
        <>
      <CnxtConsumer>
          {({recData , recCat , recCur , cart , getPrice }) => {
              if (recData.length>0){
                const catItem = recData.filter(item => item.name === recCat)
                 return catItem.map((item) =>{
                    return (
                      <Fragment key={Math.random()*10}>
                      <Container>
                    <Title> {item.name} </Title> 
                    <Wrapper>
                    {item.products.map(pro => {
                        return <Fragment key={pro.id}>
                            <Product product={pro} cur={recCur} productId={pro.id} cart={cart} getPrice={getPrice}></Product>
                        </Fragment>
                    })}
                    </Wrapper>
                    </Container>
                     </Fragment>)
                  })
              }
              
             
         }
        }
      </CnxtConsumer>
      </>
    )
  }
}

const Title =styled.h1`
color: #1D1F22;
font-size: 42px;
line-height: 160%;
text-transform: upperCase;
`
const Container = styled.div`
width: 90%;
margin: auto;
`