import React, { useRef } from 'react'
import { useContext } from 'react'
import { DemoContext } from './DemoContext'
export default function Login1() {
    let context = useContext(DemoContext)
    let usernameref = useRef()
    let pwdref = useRef()
    let msgref = useRef()
    let checkLogin = ()=>
    {
        if(usernameref.current.value=="admin" && pwdref.current.value=="123456")
        {
         
            // alert("login success")
            context.setislogin(true)
            context.setusername("admin")
        }
        else
        {
            msgref.current.innerHTML="Invalid User"
        }
    }
  return (
    <div>Login:
        <p>
            Enter username:
            <input type="text" ref={usernameref}/>
        </p>
        <p>
            Enter PAssword:
            <input type="password" ref={pwdref}/>
        </p>
        <input type="button" value="Login" onClick={()=>checkLogin()} />
        <h2 style={{color:"red"}} ref={msgref}></h2>
    </div>
  )
}
