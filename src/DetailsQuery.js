import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import ProductDetails from './pages/ProductDetails/ProductDetails'

const DetailsQuery = () => {
  const { id } = useParams();
     const GET_PRODUCT =  gql`query{
        product(id : "${id}"){
          name,
          inStock,
          gallery,
          description,
          category,
          brand,
          attributes{
            id,
            name,
            type,
            items{
              displayValue,
              value
            }
          },
          prices{
            amount,
            currency{
              label,
              symbol
            }
            
          }
            
          }
        }
          `
          let details = useQuery(GET_PRODUCT).data;
         
         
    return (
    
        <div>
           {details && <ProductDetails product={details.product} >
            
            </ProductDetails>}
        </div>
    );
}

export default DetailsQuery;
