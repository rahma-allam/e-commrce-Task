import React, { Component, Fragment } from 'react';
import { Wrapper, Container, Navlist, Navitem,
    Shopnav, Sign, CurrncList, Countsign, MiniCartContainer, MiniCartArea,ButtonContainer, Total} from "./Navbarstyle.js";
import { CnxtConsumer } from '../../CnxtProvider';
import { ReactComponent as Logo } from "./shopping-bag-svgrepo-com.svg";
import { ReactComponent as ShoppingCart } from "./shopping-cart-svgrepo-com.svg";
import DropDown from "./icons8-chevron-down-50.png";
import ArrowUP from "./icons8-up-24.png";
import { Link } from 'react-router-dom';
import MiniCart from '../MiniCart/MiniCart.js';



class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            isPressed: false,
            countSign: false,
        }


    }

    ToggleState = () => {
        this.setState({ isPressed: !this.state.isPressed })
    }
    render() {
        return (
            <CnxtConsumer>
                {value => {
                    return (
                        <Wrapper>
                            <Container>
                                <Navlist>
                                    {value.catData.map((item, id) => {
                                        return (
                                            <Fragment key={id}>
                                                <Navitem className={item.name === value.recCat ? "active" : ""} onClick={(e) => value.setCategory(e)}>
                                                    <Link to='/' >{item.name}</Link>
                                                </Navitem>
                                            </Fragment>
                                        )
                                    })}

                                </Navlist>
                                <Logo alt="logo" width="30px" height="30px" ></Logo>
                                <Shopnav>
                                    <Sign onClick={() => this.ToggleState()} >{value.recCur}</Sign>
                                    <a href="# " onClick={() => this.ToggleState()} >
                                        <img src={this.state.isPressed ? ArrowUP : DropDown} width="10px" height="10px"  alt='icon arrow'/></a>
                                    <ShoppingCart alt="logo" width="20px" ></ShoppingCart>
                                    <Countsign show={value.cart.length > 0}
                                        onClick={() => { this.setState({ countSign: !this.state.countSign }) }} >
                                        {value.cart.length}
                                    </Countsign>
                                </Shopnav>

                            </Container>
                            <CurrncList show={this.state.isPressed}>
                                {value.recCurData.map((item, id) => {
                                    return (
                                        <Fragment key={id}>
                                            <li onClick={(e) => value.setCurrency(e)} symbol={item.symbol}>
                                                {item.symbol}
                                                {item.label}

                                            </li>
                                        </Fragment>
                                    )
                                })}
                            </CurrncList>

                            {this.state.countSign &&
                            <MiniCartContainer>
                            <MiniCartArea>
                            <h2>my bag, <span>{value.cart.length} items</span> </h2>
                                <MiniCart ></MiniCart>
                                <Total>
                                <div>total</div>
                                <div><span>{value.recCur}</span>{value.getTotal()}</div>
                               </Total>
                                <ButtonContainer>
                                <button className='view'  onClick={() => { this.setState({ countSign: !this.state.countSign }) }}>view page</button>
                                <Link   to="cart" className='check' onClick={() => { this.setState({ countSign: !this.state.countSign }) }}> check out </Link>
                            </ButtonContainer>
                        </MiniCartArea>
                    </MiniCartContainer>
                            }
                        </Wrapper>
                    )
                }}
            </CnxtConsumer>

        );
    }
}



export default Navbar;

