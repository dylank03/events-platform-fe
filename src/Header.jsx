import { useState, useEffect } from "react"
import { getLogout } from "./api/api"
import { Navigate } from "react-router-dom"

const Header = ({setUser, user})=>{

    const [loggedOut, setLoggedOut] = useState(false)

    const handleClick = (event)=>{
        event.preventDefault()
        getLogout().then(()=>{
          setLoggedOut(true)
          setUser(null)
        })
    }

    useEffect(()=>{
      setLoggedOut(false)
    })


    return  (<>{loggedOut && <Navigate to= "/" replace = {true}/>}
    
    <ul>
    <li><a href = "/">SITE</a></li>
    {user ? <li style = {{float: "right"}}><a onClick={handleClick}>Log Out</a></li> : <><li style = {{float:"right"}}><a href="/register">Sign Up</a></li>
    <li style ={{float:"right"}}><a href="/login">Login</a></li></>}
  </ul></>) 
}

export default Header  