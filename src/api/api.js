import axios from 'axios'

const postRegister = (firstName, lastName, email, password)=>{
    return axios.post('http://localhost:9090/register', {firstName, lastName, email, password}).then((data)=>{
        console.log(data)
        return data
    })
}

export {postRegister}