import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import Header from './Header'


function App() {

  return (
    <>
      <Header></Header>
      <Routes>
      <Route path = "/" element = {<LoginForm/>}/>
      <Route path = "/register" element = {<RegisterForm/>}/>
      <Route path = "/login" element = {<LoginForm/>}/>
      <Route path = "/home" element = {<HomePage/>}/>
    </Routes>
    </>
  )
}

export default App
