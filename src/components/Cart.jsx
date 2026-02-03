import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { productsary } from './productData';
import Addtocart from './Addtocart';
export default function Cart() {
    let context = useContext(CartContext);
    let ui =context.cart.map((e,index)=>
    {
        let p = productsary.find((ele)=>ele.id==e.pid)
        return <tr><td>{index+1}</td> 
        <td>{p.title}</td>
         <td>{p.price}</td>
         <td>{e.quantity}</td>
         <td>{p.price * e.quantity}</td>
        </tr>
    })
  return (
    <div><table>
        <thead>
            <tr>
                <td>sno</td>
                <td>Product</td>
                <td>PRice</td>
                <td>Quantity</td>
                <td>Total</td>
            </tr>
            </thead>
            <tbody>
                {ui}
            </tbody>
            </table></div>
  )
}
