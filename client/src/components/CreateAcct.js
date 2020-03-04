import React, { useContext, useState, useEffect } from 'react'
import { Button, Form, Card } from 'semantic-ui-react'
import UserContext from "../utils/UserContext"

const CreateAcct = () => {

const test = useContext(UserContext)

const [state, updateState] = useState({
  validFirstname: false,
  validLastname: false,
  validEmail: false,
  validUsername: false,
  validPassword: false,
  confirmPassword: false,
  password: "",
  passwordMessage: ""
})

const { validFirstname, validLastname, validEmail, validUsername, validPassword, confirmPassword, password, passwordMessage } = state

useEffect(() => {
  console.log(state)
  validatePassword()
}, [])

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

const validatePassword = () => {
  let strongPassword = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);
  let valid = strongPassword.test(userState.password);
  if (!validPassword && valid) {
      updateState({
        ...state,
          validPassword: true
      });
  }
  if (validPassword && !valid) {
      updateState({
        ...state,
          validPassword: false,
      });
  }
}

const confirmPassword = () => {
  if (userState.password === confirmPassword && !confirmPassword && props.password) {
      updateState({
        ...state,
          confirmPassword: true
      });
  }
  if (props.password !== props.confirmPassword && confirmPassword) {
      updateState({
        ...state,
          confirmPassword: false
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