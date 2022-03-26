import React, { Component } from 'react';
import { Name, Overlay, Price ,ProductCard , Carticon} from './ProductStyle';
import Incart from './shopping-cart.png'


class Product extends Component {
      // check if item in cart 
      containsObject(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return true;
            }
        }
    
        return false;
    }

    render() {
        const {product , cur , productId , cart, getPrice} = this.props;
        return (           
            <ProductCard to={`details/${productId}`} >
                <img src={product.gallery[0]} alt=" product img " width="356px" height="338px" />
                <Name>{product.name} </Name>
                
                
                        <Price>
                        <span>{cur}</span>
                        <span>{getPrice(product)} </span>
                        </Price>
            
                        {!product.inStock &&
                        <Overlay>
                            <p> out of stock</p>
                        </Overlay>
                     }
                    {cart.findIndex(item => item.name === product.name) > -1  && 
                    <Carticon src={Incart} alt="in cart sign" width="40px" />}
            </ProductCard>
          
        );
    }
}

export default Product;

