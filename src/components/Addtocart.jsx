import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './CartContext'

export default function Addtocart(props) {
    let pid = props.pid
    let context = useContext(CartContext)
    const [index,setindex] = useState(-1)
    const [count,setcount] = useState(0)
    useEffect(()=>
    {
        setindex(context.cart.findIndex((e)=>e.pid==pid))
        if(index!=-1)
        {
            setcount(context.cart[index].quantity)
        }
    })
    
    const AddItem =()=>
        {
        context.setcart([
    ...context.cart,
    { pid: pid, quantity: 1 }
  ]);
        setindex(context.cart.findIndex((e)=>e.pid==pid))
        setcount(1)
         console.log(context.cart)
    }
    let setItem=(flag)=>
    {
        if(flag=="+")
        {
               
               console.log(count)
               console.log(index)
               context.cart[index].quantity = count+1
               setcount(count+1 )

        }
        else
        {
            let q = context.cart[index].quantity
            if(q==1)
            {
                context.cart.splice(index,1)
                setcount(0)
                setindex(-1)
            }
            else
            {
                 console.log(count)
               console.log(index)
               context.cart[index].quantity = count-1
               setcount(count-1 )
            }
            
        }
        console.log(context.cart)
    }
    
    let cartbutton = <input type="button" value="Add to Cart"
    className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg w-full"
    onClick={()=>AddItem()}/>
    let ui = <div className="bg-sky-600 flex gap-4 hover:bg-sky-700 text-white px-6 py-3 rounded-lg w-full">
        <input type='button' value='-' onClick={()=>setItem("-")}/>{count}
        <input type='button' value='+'  onClick={()=>setItem("+")}/>
    </div>
  return (
    <div>{count==0?cartbutton:ui}</div>
  )
}