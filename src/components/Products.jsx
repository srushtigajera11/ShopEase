import React from 'react'
import { productsary } from './productdata'
import { useParams } from 'react-router-dom'
export default function Products() {
    let params = useParams()
    let cname = params.cname
    let obj = productsary.find((i)=>i.category == cname)
    let products = obj.items
    let ui = products.map((p)=>
    {
      return  <div key= {p.id} className='w-1/4 flex justify-center items-center text-center flex-col'>
        <img src={p.imgurl} alt="" className='w-4/5 aspect-square' />
        <div className='text-lg'>{p.name}</div>
        <div>Rs.{p.price}</div>
        </div>
    })
  return (
    <div>{cname}
    <br />
    <div className='flex gap-4 flex-wrap justify-center'>
        {ui}
        </div></div>
  )
}
