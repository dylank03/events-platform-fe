import { useState } from "react"
import { postLogin } from "./api/api"
import { Navigate } from "react-router-dom";

const LoginForm = ()=>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const [error, setError] = useState({})

    const handleClick = (event)=>{
        event.preventDefault()
        postLogin(email,password).then(({user})=>{
            setUser(user)
        }).catch(({response})=>{
            setError(response.data)
        })
        setEmail('')
        setPassword('')
        setError('')
    }

    return (

     <>
    {user && <Navigate to="/home" replace={true} />}
    <form>
        <div className="login-container">
            <h1>Login</h1>
            <p>Welcome back!</p>
            <p>Don't have an account yet? <a href= '/register'>sign up here!</a></p>
            <hr></hr>

            <label>Email</label>
            <input value = {email} onChange={(event)=>{setEmail(event.target.value)}} type = "text" placeholder = "JohnDoe@example.com"/>
            {error ? <p className="error">{error.email}</p> : <></>}

            <label>Password</label>
            <input value = {password} onChange={(event)=>{setPassword(event.target.value)}} type = "password" placeholder = "Enter Password"/>
            {error ? <p className="error">{error.password}</p> : <></>}

            <button type="submit" onClick={handleClick}>Login</button>
        </div>
    </form></>)
}

export default LoginForm