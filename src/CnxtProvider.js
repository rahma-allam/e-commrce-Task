import React, { createContext} from 'react';
import { useState , useEffect } from 'react';
import { GET_CURRUNCY, GET_DATA , GET_CAT} from './queries';
import { useQuery } from '@apollo/client';

const cnxt = createContext();

const CnxtProvider = props => {
  // for all  Data
let [recData , setData] = useState([]);
let {data} = useQuery(GET_DATA);

// for category data
let [catData , setCatData] = useState([])
let [recCat , setCat] = useState("all");
const categoryData = useQuery(GET_CAT).data;
const setCategory = (e) =>{
  e.preventDefault();
  setCat(e.target.innerHTML);  
}
// for currency data 
let [recCurData , setCurData] = useState([]);
let [recCur , setCur] = useState( "$" );
const currrncData = useQuery(GET_CURRUNCY).data;
const setCurrency = (e) =>{
  e.preventDefault();
  setCur(e.target.getAttribute("symbol"));  
  
}

// inCart 

let [cart , setCart] = useState([]);

let addTocart = (productData) => {
  const indexOfObject = cart.findIndex(item => item.name === productData.name);
if(indexOfObject > -1) { 
  return false
} else {
  setCart(prevCart =>[...prevCart, productData])
}
}

///  remove from cart function
let removePro =(pro)=>{
  let cartPros = [...cart];
  const index = cartPros.findIndex(item => item.name === pro.name);
  cartPros.splice(index ,1);
  setCart(cartPros)

}


//  get price 

let getPrice =(pro)=>{
  let pricefromData 
  pro.prices.map((price) => {
    if( price.currency.symbol === recCur){
      pricefromData = price.amount
    }
    return pricefromData
  })
  return pricefromData
           
}

// get Total function
let total =0 ;
 const getTotal = () =>{
   for(let i=0 ; i < cart.length ; i++){
    
    total +=  (counter[i]> 0 ? counter[i]: 1 )* getPrice(cart[i])
       
      }
      total.toFixed(2)
     return total
 }


// increase counter function 
let [counter , setCounter] = useState([]);
let [proID , setProid] = useState([])
const increaseCount = (id) => {

  if (proID.indexOf(id) > -1) {
      let ind = proID.indexOf(id);
      let counters = [...counter]
      let oldCount = counters[ind];
      let newCount = oldCount + 1;
      counters[ind] = newCount;
      setCounter( counters )
  }
  else {

      setProid( [...proID, id] );
      setCounter( [...counter, 2] );
  }

}
// decrease counter function 
const decreaseCount = (id, pro) => {

  if (proID.indexOf(id) > -1) {
      let ind = proID.indexOf(id);
      let counters = [...counter]
      let oldCount = counters[ind];
      let newCount = oldCount - 1;
      if (newCount <= 0) {
        removePro(pro);
      } else {

          counters[ind] = newCount;
          setCounter( counters )
      }
  }
  else {

     setProid( [...proID, id] );
     setCounter( [...counter, 1] );
  }

}


  // for attributes 
   // active swatch function for swatch attr
   let [swatchData , setSwatch] = useState("");
   const activeSwatch = (id) =>{
    setSwatch(id)
   }

    // active text function for text attr
    let [attrData , setAttr] = useState([]);
    let [textData , setText] = useState([]);
    const activeText = (e , newattrName) => {
      let displayValue = e.target.innerText;
      if(textData.indexOf(displayValue)> -1){
       console.log("value is her")
           let ind = textData.indexOf(displayValue);
           let attrs= [...attrData];
          if(attrs[ind] !== newattrName){
            console.log("differ attr")
              if (attrs.indexOf(newattrName) > -1){
                console.log("attr is her")
                let values= [...textData];
                values[ind] = displayValue;
                setText( values)
              }
              else{
                console.log(" attr not here");
                setAttr([...attrData , newattrName]);
                setText([...textData , displayValue])  
              }
          }
          else{
            console.log(" same attr");
            let values= [...textData];
           values[ind] = displayValue;
           setText( values)
          }   }
          else if(attrData.indexOf(newattrName)> -1){
            console.log("attr name not value")
                let ind = attrData.indexOf(newattrName);
                let values= [...textData];
                values[ind] = displayValue;
                setText( values)
        }
   else {      
     setAttr([...attrData , newattrName]);
     setText([...textData , displayValue])    
    }   
  }
  
     


useEffect(()=>{
  if(data){
    setData(data.categories)
  }
  if(currrncData){
    setCurData(currrncData.currencies)
  }
  if(categoryData){
    setCatData(categoryData.categories)
  }
},[data, currrncData , categoryData] )
// return values to use in components.
return (<cnxt.Provider value={{
  recData ,
  catData,
  recCat,
  recCur,
  recCurData,
  cart,
  attrData ,
  textData ,
  swatchData,
  counter,
  proID,
  setCategory,
  setCurrency,
  addTocart,
  activeSwatch,
  activeText,
  removePro,
  getPrice,
  decreaseCount,
  increaseCount,
  getTotal
}
  
  }>
    
     {props.children} </cnxt.Provider>)
       
  
}
export const CnxtConsumer  = cnxt.Consumer;
export default CnxtProvider;