import React, { Component, Fragment } from 'react';
import { MiniCartCont, ProContainer, ImgContainer, Price} from './MiniCartStyle'
import { CnxtConsumer } from '../../CnxtProvider';
import { SwatchContainer, TextContainer } from '../../pages/ProductDetails/ProductDetailsStyle.js';


class Minicart extends Component {
    render() {
        return (
            <CnxtConsumer>
                {value => {
                    return (
                        <MiniCartCont>
                            
                            {value.cart.map((pro, id) => {
                                return (
                                    <Fragment key={id}>
                                        <ProContainer>
                                            <div>
                                                <p>{pro.brand} </p>
                                                <p>{pro.name}</p>
                                                <Price>
                                                <span>{value.recCur}</span>
                                                {value.counter[id] > 1 ?  value.getPrice(pro) * value.counter[id] : value.getPrice(pro) }
                                                </Price>
                                                {pro.attributes.map(item => {
                                                    return <Fragment key={item.id}>
                                                        <SwatchContainer>
                                                            {item.type === "swatch" && item.items.map((attr, id) => {
                                                                return <Fragment key={id}>
                                                                    <div className={value.swatchData === id ? "active" : ""}
                                                                        style={{ backgroundColor: `${attr.value}` }}></div>
                                                                </Fragment>
                                                            })}
                                                        </SwatchContainer>
                                                        <TextContainer>
                                                            {item.type === "text" && item.items.map((attr, id) => {
                                                                return (<Fragment key={id} >
                                                                    <div
                                                                        className={value.attrData.indexOf(item.name) > -1
                                                                            && value.textData.indexOf(attr.displayValue) > -1
                                                                            && value.attrData.indexOf(item.name) === value.textData.indexOf(attr.displayValue) ? "active" : ""}
                                                                    >
                                                                        {attr.displayValue}
                                                                    </div>
                                                                </Fragment>)
                                                            })}
                                                        </TextContainer>

                                                    </Fragment>
                                                })}
                                            </div>
                                            <ImgContainer>
                                                <div>
                                                    <div className='plus' onClick={() => value.increaseCount(id)}>+</div>
                                                    <div>{value.counter[id] || "1"}</div>
                                                    <div className='minus' onClick={() => value.decreaseCount(id, pro)}>-</div>
                                                </div>
                                                <div>
                                                    <img src={pro.gallery[0]} width="105px" height="137px" alt='product pic'></img>
                                                </div>
                                            </ImgContainer>
                                        </ProContainer>
                                    </Fragment>)
                            })}
                           


                        </MiniCartCont>

                    )
                }}
            </CnxtConsumer>
        );
    }
}

export default Minicart;
