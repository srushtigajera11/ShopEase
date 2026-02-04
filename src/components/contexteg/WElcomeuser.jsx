import React from 'react'
import { useContext } from 'react'
import { DemoContext } from './DemoContext'
export default function WElcomeuser() {
    let demo = useContext(DemoContext)
    let LogOut = ()=>
    {
        demo.setislogin(false)
        demo.setusername("")
    }
  return (
    <div>wlcome: {demo.username}
     <input type="button" value="logout" onClick={()=>LogOut()}></input></div>
  )
}
