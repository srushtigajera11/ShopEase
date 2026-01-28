import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Stateeg1 from './components/Stateeg1'
import Refeg from './components/Refeg'
import Effect from './components/Effect'
import Home from './components/Home'
import Categories from './components/Categories'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
function App() {
  const [bgcolor,setbgcolor] = useState('skyblue')
  const [color,setcolor]=useState('black')
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
<h1>hooks in react</h1>
<Routes>
  <Route path='/' element={<Categories></Categories>}></Route>
  <Route path="/products/:cname" element={<Products></Products>}></Route>
  <Route path='/productDetails/:id' element={<ProductDetails></ProductDetails>}></Route>
  {/* <Route path='/' element={<Stateeg1></Stateeg1>}></Route>
  <Route path='/ref' element={<Refeg></Refeg>}></Route>
  <Route path='/effect' element={<Effect></Effect>}></Route>
  <Route path='/home' element={<Home></Home>}></Route> */}
  
</Routes>
</div>
  </>
  )
}

export default App
