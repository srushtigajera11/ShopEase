import React, { useContext } from 'react'
import WElcomeuser from './WElcomeuser'
import { DemoContext } from './DemoContext'
import Login1 from './Login1'
export default function Home() {  
    let context = useContext(DemoContext)
  return (
    <div>Home 
        {context.islogin?<WElcomeuser></WElcomeuser>:<Login1></Login1>}
        
    </div>
  )
}
