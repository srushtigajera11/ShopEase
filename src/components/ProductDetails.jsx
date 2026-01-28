import React from 'react'
import { useParams } from 'react-router-dom'
import { productsary } from './productdata'
export default function ProductDetails() {
  let params = useParams()
  let pid = params.id
    // category: "Electronics",
    // items: [
    //   {
    //     id: 1,
    //     name: "Smartphone",
    //     price: 14999,
    //     imgurl: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
    //   },
    //   {
  let category_products = productsary.find((p)=>p.items.find((t)=>t.id==pid))
  let product = category_products.items.find((i)=>i.id==pid)

    
  console.log(JSON.stringify(product))
  return (
    <div>
    <div className='flex '>
      <div className='w-1/2'> 
    <img src={product.imgurl} className='w-4/5 aspect square' alt="" />
      </div>
      <div className='w-1/2'>
      {product.name}
      <br />
      {product.price}
      

      </div>

    </div>
    <div>
      show similer products
    </div>
    </div>
  )
}
