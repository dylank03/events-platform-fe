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
            console.log(response.data)
        })
    }

    return (
    <>
    {user && <Navigate to="/home" replace={true} />}
    <form>
        <div className="register-container">
            <h1>Sign Up</h1>
            <p>Welcome to "site name"! Sign up below to access amazing tools and features!</p>
            <hr></hr>

            <label className="form-label">First Name</label>
            <input className="form-input" value = {firstName} onChange = {(event)=>{setFirstName(event.target.value)}} type = "text" placeholder = "John"/>
            {firstName.length >=1 || <p className="error">{error.firstName}</p>}

            <label className="form-label">Last Name</label>
            <input className="form-input" value = {lastName} onChange={(event)=>{setLastName(event.target.value)}} type = "text" placeholder = "Doe"/>
            {lastName.length >=1 || <p className="error">{error.lastName}</p>}

            <label className="form-label">Email</label>
            <input className="form-input" value = {email} onChange={(event)=>{setEmail(event.target.value)}} type = "text" placeholder = "JohnDoe@example.com"/>
            <p className="error">{error.email}</p>

            <label className="form-label">Password</label>
            <input className="form-input" value = {password} onFocus={()=>{setFocus(true)}} onChange={(event)=>{setPassword(event.target.value)}} type = "password" placeholder = "Enter Password"/>
            {(password.length < 8 && focus && <p className="error">Password must contain at least 8 characters</p>)}

            <label className="form-label">Confirm Password</label>
            <input className="form-input" value = {confirmPassword} onChange={(event)=>{setConfirmPassword(event.target.value)}} type = "password" placeholder = "Repeat Password"/>
            {confirmPassword === password || <p className="error">Passwords do not match</p>}

            <button className="form-button" type="submit" onClick={handleClick} disabled = {password !== confirmPassword}>Sign Up</button>
        </div>
    </form></>)
}

export default RegisterForm