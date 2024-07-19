import { useState } from "react"

const LoginForm = ()=>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})

    const handleClick = (event)=>{
        event.preventDefault()

        setEmail('')
        setPassword('')
        setError('')
    }

    return <form>
        <div className="login-container">
            <h1>Login</h1>
            <p>Welcome back!</p>
            <hr></hr>

            <label><b>Email</b></label>
            <input value = {email} onChange={(event)=>{setEmail(event.target.value)}} type = "text" placeholder = "JohnDoe@example.com"/>
            {/* {error ? <>{error.email}</> : <></>} */}

            <label><b>Password</b></label>
            <input value = {password} onChange={(event)=>{setPassword(event.target.value)}} type = "password" placeholder = "Enter Password"/>

            <button type="submit" onClick={handleClick}>Sign Up</button>
        </div>
    </form>
}

export default LoginForm