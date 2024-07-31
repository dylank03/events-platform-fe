import { getEvents, getUser } from "./api/api"
import { useState, useEffect } from "react"
import { getLogout } from "./api/api"
import { Navigate } from "react-router-dom"

const HomePage = ({setUser})=>{
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [events, setEvents] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getUser().then(({user})=>{
            setFirstName(user.firstName)
            setLastName(user.lastName)
            setUser(user)
        }).catch((err)=>{
            console.log(err.response)
        })
        getEvents().then(({events})=>{
            setLoading(false)
            setEvents(events)
        })
    }, [loading])

    console.log(events)

    
    return (<><h1>Homepage</h1><h2>Welcome {firstName} {lastName} </h2><h1>{}</h1></>)
}

export default HomePage