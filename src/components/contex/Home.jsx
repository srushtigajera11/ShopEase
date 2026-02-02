import React, { useContext } from 'react'
import WElcomeuser from './Welcome'
import { DemoContext } from './Demo'
import Login1 from './Login'
export default function Home() {  
    let context = useContext(DemoContext)
  return (
    <div>Home 
        {context.islogin?<WElcomeuser></WElcomeuser>:<Login1></Login1>}
        
    </div>
  )
}