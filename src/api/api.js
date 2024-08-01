import axios from 'axios'

const postRegister = (firstName, lastName, email, password)=>{
    return axios.post('http://localhost:9090/user/register', {firstName, lastName, email, password}, {withCredentials: true}).then(({data})=>{
        return data
    })
}

const postLogin = (email, password) =>{
    return axios.post('http://localhost:9090/user/login', {email, password}, {withCredentials:true}).then(({data})=>{
        return data
    })
}

const getUser = ()=>{
    return axios.get('http://localhost:9090/user', {withCredentials: true}).then(({data})=>{
        return data
    })
}

const getLogout = ()=>{
    return axios.get('http://localhost:9090/user/logout', {withCredentials: true}).then(({data})=>{
        return data
    })
}

const getEvents = ()=>{
    return axios.get('http://localhost:9090/events', {withCredentials: true}).then(({data})=>{
        return data
    })
}

const postEvent = (eventName, eventStart, eventEnd, timezone, currency, eventLogo)=>{
    const eventDetails = {event: {name: {html: eventName,}, start: {utc: eventStart, timezone: timezone}, end: {utc: eventEnd, timezone: timezone},currency: currency, }}
    console.log(eventDetails)
    return axios.post('http://localhost:9090/events', eventDetails, {withCredentials: true})
}


export {postRegister, postLogin, getUser, getLogout, getEvents, postEvent}