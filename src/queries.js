 import { gql } from "@apollo/client";

export const GET_CAT = gql`
query{
  categories{
   name
 }}
`


 export const GET_DATA = gql`
query{
  categories{
   name,
   products{
     id,
     name,
     inStock,
     gallery,
     description,
     category,
     attributes{
       id,
       name,
       type,
       items{
         displayValue,
         value
       }
     },
     brand,
     prices{
       amount,
       currency{
         label,
         symbol
       }
     }
   }
 }
     }
`
export const GET_CURRUNCY =gql`
query{
  currencies{
   label,
   symbol
 }}`

 
