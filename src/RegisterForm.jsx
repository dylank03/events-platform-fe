import { postRegister } from "./api/api"
import { useState } from "react"

const RegisterForm = ()=>{

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState({})

    const handleClick = (event)=>{
        event.preventDefault()
        postRegister(firstName, lastName, email, password).then(({user})=>{
            console.log(user)
        }).catch(({response})=>{
            setError(response.data)
        })
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setError('')
    }

    return <form>
        <div className="container">
            <h1>Sign Up</h1>
            <p>Welcome to "site name"! Sign up below to access amazing tools and features!</p>
            <hr></hr>

            <label><b>First Name</b></label>
            <input value = {firstName} onChange = {(event)=>{setFirstName(event.target.value)}} type = "text" placeholder = "John"/>

            <label><b>Last Name</b></label>
            <input value = {lastName} onChange={(event)=>{setLastName(event.target.value)}} type = "text" placeholder = "Doe"/>

            <label><b>Email</b></label>
            <input value = {email} onChange={(event)=>{setEmail(event.target.value)}} type = "text" placeholder = "JohnDoe@example.com"/>
            {/* {error ? <>{error.email}</> : <></>} */}

            <label><b>Password</b></label>
            <input value = {password} onChange={(event)=>{setPassword(event.target.value)}} type = "password" placeholder = "Enter Password"/>

            <label><b>Confirm Password</b></label>
            <input value = {confirmPassword} onChange={(event)=>{setConfirmPassword(event.target.value)}} type = "password" placeholder = "Repeat Password"/>

            <button type="submit" onClick={handleClick}>Sign Up</button>
        </div>
    </form>
}

export default RegisterForm