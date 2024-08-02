import axios from 'axios'

const postRegister = (firstName, lastName, email, password)=>{
    return axios.post('https://events-platform-be-mw7x.onrender.com/user/register', {firstName, lastName, email, password}, {withCredentials: true}).then(({data})=>{
        return data
    })
}

const postLogin = (email, password) =>{
    return axios.post('https://events-platform-be-mw7x.onrender.com/user/login', {email, password}, {withCredentials:true}).then(({data})=>{
        return data
    })
}

const getUser = ()=>{
    return axios.get('https://events-platform-be-mw7x.onrender.com/user', {withCredentials: true}).then(({data})=>{
        return data
    })
}

const getLogout = ()=>{
    return axios.get('https://events-platform-be-mw7x.onrender.com/user/logout', {withCredentials: true}).then(({data})=>{
        return data
    })
}

const getEvents = ()=>{
    return axios.get('https://events-platform-be-mw7x.onrender.com/events', {withCredentials: true}).then(({data})=>{
        return data
    })
}

const postEvent = (eventName, eventStart, eventEnd, timezone, currency, eventLogo)=>{
    const eventDetails = {event: {name: {html: eventName,}, start: {utc: eventStart, timezone: timezone}, end: {utc: eventEnd, timezone: timezone},currency: currency, }}
    console.log(eventDetails)
    return axios.post('https://events-platform-be-mw7x.onrender.com/events', eventDetails, {withCredentials: true})
}

const getEvent = (eventId)=>{
    return axios.get(`https://events-platform-be-mw7x.onrender.com/event/${eventId}`, {withCredentials: true})
}


export {postRegister, postLogin, getUser, getLogout, getEvents, postEvent, getEvent}