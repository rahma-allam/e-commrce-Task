import React, { Component } from 'react';
import Minicart from '../../components/MiniCart/MiniCart';
import { CartContainer, CartHeader } from './CartStyle';

class Cart extends Component {
    render() {
        return (
            <CartContainer>
                <CartHeader>cart</CartHeader>
                <hr width="90%"/>
                <Minicart/>
            </CartContainer>
        );
    }
}

export default Cart;
