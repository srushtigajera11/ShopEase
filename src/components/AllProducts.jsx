import React from 'react'
import { Link } from 'react-router-dom'
import { productsary } from './productData'
import Addtocart from './Addtocart'

export default function () {
    let ui = productsary.map((p)=>{
        return <div key={p.id} className='flex text-center mb-1.5'>
            <Link to={'/productDetails/'+p.id}>
              {/* Image */}
            <div className="h-44 flex justify-center items-center overflow-hidden">
              <img
                src={p.thumbnail}
                alt=""
                className="h-full object-contain group-hover:scale-110 transition duration-300"
              />
            </div>
             <p className="mt-3 font-semibold text-gray-800 line-clamp-2 group-hover:text-sky-600">
              {p.title}
            </p>
            <p className="text-green-600 font-bold text-lg mt-2">
              ${p.price}
            </p><Addtocart pid={p.id}></Addtocart>

            {/* Rating */}
            {/* <div className="text-yellow-400 text-sm mt-1">
              ⭐ {Math.floor(p.rating)}
            </div> */}
            </Link>
        </div>

    })
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {ui}
    </div>
  )
}
