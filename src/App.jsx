
// import E2home from './components/eg2/E2home'
// import PropsHome from './components/propsTask/PropsHome'
import './index.css'
import { Route,Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';
import imga from './assets/sale.png'
import AllProducts from './components/AllProducts';
import { useState } from 'react';
import { CartContext } from './components/CartContext';

import Cart from './components/Cart';

function App() {
  const location = useLocation();
  const currentPath = location.pathname
 const [cart,setcart] = useState([]);
  let leftUi = currentPath == '/' ? <img className='w-full h-[65vh] rounded-lg mt-5' src={imga}  alt="" />  : <Categories direction="bottom"></Categories>
  return (
    <>
    <CartContext.Provider value={{cart:cart,setcart:setcart}}>
    <Navbar />  
    <div className='flex'>
        <div className='w-1/6'>
      {leftUi}
  </div>
    <div className='w-5/6'>
    <Routes>
    
      <Route path='/' element={<Categories direction="right"></Categories>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/allProducts' element={<AllProducts />}></Route>
      <Route path='/product/:cname' element={<Product />}></Route>
       <Route path='/productDetails/:id' element={<ProductDetails />}></Route>
    </Routes></div> </div>
    {/* {/* <E2home />
     <PropsHome /> 
     <MapHome /> */}
     <Footer />
    </CartContext.Provider>
    </>

  )
}

export default App
