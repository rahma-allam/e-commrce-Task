import React, { Component, Fragment } from 'react';
import { Container ,ImgContainer ,InfoContainer , SwatchContainer , TextContainer,Price, AddCartBtn} from './ProductDetailsStyle';
import {CnxtConsumer} from '../../CnxtProvider'

class ProductDetails extends Component {   
  constructor(props){
      super(props);
     this.productData = this.props.product
      this.state={
          Imgsrc : this.productData.gallery[0],
        
      }  
    }
    // chang main img 
    changeSrc = (e)=>{
        e.preventDefault();
        this.setState({Imgsrc : e.target.getAttribute("src") })
    }
  


    render() {
        return (
             <Container>
              <ImgContainer>
               {this.productData.gallery[0] ? <img src={this.productData.gallery[0]} width="100px"  alt="proImg1" onClick={(e)=> this.changeSrc(e)}/> : <div></div>}                 
               {this.productData.gallery[1] ? <img src={this.productData.gallery[1]} width="100px"  alt="proImg2" onClick={(e)=> this.changeSrc(e)}/> : <div></div>}         
               {this.productData.gallery[2] ? <img src={this.productData.gallery[2]} width="100px"  alt="proImg3" onClick={(e)=> this.changeSrc(e)}/> : <div></div> } 
              </ImgContainer>
                <div>
                    <img src={this.state.Imgsrc} alt="proImg" width="610px" height="511px"/>
                </div>
                <InfoContainer>
                    <h2>{this.productData.brand}</h2>
                    <h3>{this.productData.name}</h3>                    
                     <CnxtConsumer>
                         {value =>{
                             return(
                                 <>
                             {this.productData.attributes.map(item => {
                             return <Fragment key={item.id}>
                             <label>{item.name}:</label>
                             <SwatchContainer>
                             {item.type === "swatch" && item.items.map((attr , id)=>{
                                 return <Fragment key={id}>
                                                <div onClick={()=> value.activeSwatch(id)}
                                                 className={value.swatchData === id ? "active" : ""} 
                                                 style={{backgroundColor: `${attr.value}`}}></div>
                                        </Fragment> 
                             })}  
                             </SwatchContainer>
                             <TextContainer>
                            {item.type === "text" && item.items.map((attr ,id ) => {
                                return <Fragment key={id} >
                                                <div
                                                    onClick={(e) =>value.activeText( e , item.name)}
                                                    className={value.attrData.indexOf(item.name) > -1 
                                                            && value.textData.indexOf(attr.displayValue) > -1
                                                            && value.attrData.indexOf(item.name) === value.textData.indexOf(attr.displayValue) ? "active" : ""}                                               >
                                                        {attr.displayValue}
                                                 </div>
                                         </Fragment>
                            })}      
                            </TextContainer>

                        </Fragment>
                       
                    })
                    
                    }
                                 <label>price : </label>
                                 {this.productData.prices.map((price ,id )=> {
                                      return (
                                        <Fragment key={id}>
                                        {price.currency.symbol === value.recCur && 
                                        <Price>
                                            <span>{price.currency.symbol}</span>
                                            {price.amount}
                                            </Price>
                                        }
                                        </Fragment>
                                    )
                                  })}
                                  <AddCartBtn onClick={()=>{
                                      value.addTocart(this.productData)
                                }}
                                
                                disabled={this.productData.inStock ? false : true}
                                >
                                     add to cart

                                     </AddCartBtn>
                                <div>

                                    <div dangerouslySetInnerHTML={{__html: this.productData.description}} />

                                </div>
                                 </>
                             )

                         }

                                   
                                                            
                         }
                     </CnxtConsumer>
                   
                </InfoContainer>
            </Container> 
           
        );
    }
}

export default ProductDetails;





                    
                    


