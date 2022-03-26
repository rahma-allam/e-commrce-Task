import React, { Component } from 'react';
import Productlist from './pages/productList/ProductList';
import Navbar from './components/navbar/Navbar';
import DetailsQuery from './DetailsQuery';
import Cart from './pages/Cart/Cart';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
       <Routes>
          <Route  path='/' exact  element={<Productlist/>}/>
         
          <Route  path='/details/:id' element={<DetailsQuery/>}/>

          <Route  path='/cart' element={<Cart/>}/>
          
        </Routes>
      </div>
    );
  }
}

export default App;
