import { postRegister } from "./api/api"
import { useState } from "react"
import { Navigate } from "react-router-dom"

const RegisterForm = ()=>{

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState({})
    const [user, setUser] = useState('')
    const [focus, setFocus] = useState()

    const handleClick = (event)=>{
        event.preventDefault()
        setError({})
        postRegister(firstName, lastName, email, password).then(({user})=>{
            setUser(user)
        }).catch(({response})=>{
            setError(response.data)
        })
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
    <>
    {user && <Navigate to="/home" replace={true} />}
    <form>
        <div className="register-container">
            <h1>Sign Up</h1>
            <p>Welcome to "site name"! Sign up below to access amazing tools and features!</p>
            <hr></hr>

            <label>First Name</label>
            <input value = {firstName} onChange = {(event)=>{setFirstName(event.target.value)}} type = "text" placeholder = "John"/>
            {firstName.length >=1 || (error ? <p className="error">{error.firstName}</p> : <></>)}

            <label>Last Name</label>
            <input value = {lastName} onChange={(event)=>{setLastName(event.target.value)}} type = "text" placeholder = "Doe"/>
            {lastName.length >=1 || (error ? <p className="error">{error.lastName}</p> : <></>)}

            <label>Email</label>
            <input value = {email} onChange={(event)=>{setEmail(event.target.value)}} type = "text" placeholder = "JohnDoe@example.com"/>
            {error ? <p className="error">{error.email}</p> : <></>}

            <label>Password</label>
            <input value = {password} onFocus={()=>{setFocus(true)}} onChange={(event)=>{setPassword(event.target.value)}} type = "password" placeholder = "Enter Password"/>
            {(password.length < 8 && focus && <p className="error">Password must contain at least 8 characters</p>)}

            <label>Confirm Password</label>
            <input value = {confirmPassword} onChange={(event)=>{setConfirmPassword(event.target.value)}} type = "password" placeholder = "Repeat Password"/>
            {confirmPassword === password || <p className="error">Passwords do not match</p>}

            <button type="submit" onClick={handleClick} disabled = {password !== confirmPassword}>Sign Up</button>
        </div>
    </form></>)
}

export default RegisterForm