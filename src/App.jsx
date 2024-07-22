import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import Header from './Header'
import { useState } from 'react'


function App() {

  const [user, setUser] = useState(null)

  return (
    <>
      <Header setUser = {setUser} user = {user}></Header>
      <Routes>
      <Route path = "/" element = {<LoginForm/>}/>
      <Route path = "/register" element = {<RegisterForm/>}/>
      <Route path = "/login" element = {<LoginForm/>}/>
      <Route path = "/home" element = {<HomePage setUser = {setUser}/>}/>
    </Routes>
    </>
  )
}

export default App
