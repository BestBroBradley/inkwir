import React, { useContext, useState } from 'react'
import { Button, Form, Card } from 'semantic-ui-react'
import UserContext from "../utils/UserContext"



const LogIn = () => {
  const { handleLogin } = useContext(UserContext)

  const [login, setLogin] = useState({
    username: "",
    password: "",
  })

  const handleInput = (event) => {
      const { name, value } = event.target
      setLogin({
        ...login,
        [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleLogin(login.username, login.password)
  }

  return (
 
<div>
  <Form id="updateAccount">
    <h3>Log In :</h3>
    <Form.Field>
      <label>Username</label>
      <input value={login.username} name="username" placeholder='Username' onChange={handleInput}/>
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input value={login.password} placeholder='Password' name="password" onChange={handleInput}/>
    </Form.Field>
    
    <Button id="buttonClr" type='submit' onClick={handleSubmit}>Log In</Button>
  </Form>
  </div>
)}

export default LogIn;