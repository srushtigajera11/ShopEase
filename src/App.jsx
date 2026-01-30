import { useState } from 'react'
import './App.css'
import { Routes,Route, Link } from 'react-router-dom'
import Stateeg1 from './components/Stateeg1'
import Refeg from './components/Refeg'
import Effect from './components/Effect'
import Home from './components/Home'
import Categories from './components/Categories'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import { useLocation } from 'react-router-dom';
import sideimg from "./assets/sideimg.jpg"
import clr from "./assets/clr.webp"
function App() {
   const location = useLocation();
  const currentPath = location.pathname
  // console.log(currentPath)
  const [bgcolor,setbgcolor] = useState('')
  const [color,setcolor]=useState('black')
  let leftui = currentPath=="/"?<><img src={clr} className='w-full aspect-square' /><img src={sideimg} className='w-full h-[100dvh]'></img></>   :<Categories direction="bottom"></Categories>
  let changeTheme =(bgcolor,color)=>
  {
    setbgcolor(bgcolor)
    setcolor(color)
  }
  return (
    <>
    <div className='main' style={{backgroundColor:bgcolor,color:color}}>
      <div style={{textAlign:'right'}}>
        <input type="button" value="A" className='w-15'
        onClick={()=>changeTheme('skyblue','black')}
         style={{backgroundColor:'skyblue',color:'black'}}  />
        <input type="button" value="A" className='w-15'
  onClick={()=>changeTheme('yellow','black')}
        style={{backgroundColor:'yellow',color:'black'}}  />
        <input type="button" value="A"  className='w-15'
          onClick={()=>changeTheme('blue','white')}
        style={{backgroundColor:'blue',color:'white'}} />
        <input type="button" value="A" className='w-15' style={{backgroundColor:'orange',color:'black'}}
          onClick={()=>changeTheme('orange','black')} />
        <input type="button" value="A" className='w-15' style={{backgroundColor:'purple',color:'white'}} 
          onClick={()=>changeTheme('purple','white')}/>
      </div>
<Link to="/">Home</Link>
<div className='flex '>
  <div className='w-1/6'>
      {leftui}
  </div>
  <div className='w-5/6'>
<Routes>
  <Route path='/' element={<Categories direction="right"></Categories>}></Route>
  <Route path="/products/:cname" element={<Products></Products>}></Route>
  <Route path='/productDetails/:id' element={<ProductDetails></ProductDetails>}></Route>
  {/* <Route path='/' element={<Stateeg1></Stateeg1>}></Route>
  <Route path='/ref' element={<Refeg></Refeg>}></Route>
  <Route path='/effect' element={<Effect></Effect>}></Route>
  <Route path='/home' element={<Home></Home>}></Route> */}
  
</Routes>
</div>
</div>
</div>
  </>
  )
}

export default App
