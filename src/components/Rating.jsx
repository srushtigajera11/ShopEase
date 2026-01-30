import React from 'react'
import { productsary } from './productData'

export default function Rating(props) {
    let rating = props.rating;
    console.log(rating)
    let ui = [];
    for (let i = 1; i <= 5; i++) {
        ui.push(
            <span  key={i} className={i <= rating ? "text-yellow-500" : "text-gray-300"}>★</span>
        );
    }

  return (
    <div>
      {ui}
    </div>
  )
}
