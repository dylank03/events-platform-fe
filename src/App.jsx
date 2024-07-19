import { useState } from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
      <Route path = "/" element = {<RegisterForm/>}/>
      <Route path = "/register" element = {<RegisterForm/>}/>
      <Route path = "/login" element = {<LoginForm/>}/>
    </Routes>
    </>
  )
}

export default App
