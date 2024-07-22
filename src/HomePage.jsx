import { getUser } from "./api/api"
import { useState, useEffect } from "react"
import { getLogout } from "./api/api"
import { Navigate } from "react-router-dom"

const HomePage = ({setUser})=>{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [loggedOut, setLoggedOut] = useState(false)

    const handleClick = ()=>{
        getLogout().then(setLoggedOut(true))
    }

    useEffect(()=>{
        getUser().then(({user})=>{
            setFirstName(user.firstName)
            setLastName(user.lastName)
            setUser(user)
        }).catch((err)=>{
            console.log(err.response)
        })
    }, [])

    
    return (<>{loggedOut && <Navigate to="/" replace={true} />}<h1>Homepage</h1><h2>Welcome {firstName} {lastName} </h2></>)
}

export default HomePage