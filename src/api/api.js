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


export {postRegister, postLogin, getUser, getLogout, getEvents}