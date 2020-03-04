import React, { useContext, useState, useEffect } from 'react'
import { Button, Form, Card } from 'semantic-ui-react'
import UserContext from "../utils/UserContext"

const CreateAcct = () => {

const {userState, handleInputChange, handleLogin, handleSignup, isLoggedIn, logout } = useContext(UserContext)

const [state, updateState] = useState({
  validEmail: false,
  validUsername: false,
  validPassword: false,
  confirmPassword: false,
  password: "",
  passwordMessage: ""
})

useEffect(() => {
  console.log(state)
  validatePassword()
  passwordMessage()
  validateEmail()
  validUsername()
},)

const validUsername = ()=> {
  if(userState.username.length > 4  && !validUsername ) {
      updateState({
          ...state,
          validUsername: true
      });
  }

  if(userState.username.length < 4  && validUsername) {
      updateState({
        ...state,
          validUsername: false
      });
  }
}

const validateUsername = () => {
  if (userState.username.length > 1 && !validUsername) {
      updateState({
          ...state,
          validUsername: true
      });
  }
  if (userState.username.length < 1 && validUsername) {
      updateState({
        ...state,
          validUsername: false
      });
  }
}

const validateEmail = () => {
  let validEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  let valid = validEmail.test(userState.email);
  if (!state.validEmail && valid) {
      updateState({
        ...state,
          validEmail: true
      });
  }
  if (state.validEmail && !valid) {
      updateState({
        ...state,
          validEmail: false
      });
  }
}

const validatePassword = () => {
  let strongPassword = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);
  let valid = strongPassword.test(userState.password);
  if (!state.validPassword && valid) {
      updateState({
        ...state,
          validPassword: true
      });
  }
  if (state.validPassword && !valid) {
      updateState({
        ...state,
          validPassword: false,
      });
  }
}

const confirmPassword = () => {
  if (state.confirmPassword && state.password !== "" && userState.password === state.password) {
      updateState({
        ...state,
          confirmPassword: true
      });
  }
  if (state.confirmPassword && state.password !== userState.password) {
      updateState({
        ...state,
          confirmPassword: false
      });
  }
}

const passwordMessage = () => {
  let message = "at least 8 letters, 1 capital & 1 number"
  if (userState.password !== "" && !state.validPassword && state.passwordMessage !== message) {
      updateState({
        ...state,
          passwordMessage: message
      });
  }
  if (state.validPassword && state.passwordMessage !== "") {
      updateState({
        ...state,
          passwordMessage: ""
      });
  }
  if (state.passwordMessage === message && userState.password === "") {
      this.setState({
          passwordMessage: ""
      });
  } 
}

return (
<Card>
  <Form>
    <h3>Create an Account:</h3>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>
    <Form.Field>
      <label>Confirm Password</label>
      <input placeholder='Confirm Password' />
    </Form.Field>
    <h3>Demographics:</h3>
    <h5>(for survey reference only)</h5>
    <Form.Field>
      <label>Age</label>
      <input placeholder='Age'/>
    </Form.Field>
    <Form.Field>
      <label>Gender</label>
      <input placeholder='Gender' />
    </Form.Field>
    <Form.Field>
      <label>Location</label>
      <input placeholder='Location' />
    </Form.Field>
    <Button color= 'pink' type='submit'>Submit</Button>
  </Form>
  
  </Card>
)
}

export default CreateAcct;