import React, { useState } from 'react'
import { Button, Form, Card } from 'semantic-ui-react'

const CreateAcct = () => {

const [state, updateState] = useState({
  validUsername: false,
  validPassword: false,
  confirmPassword: false
})

const validateUsername = () => {
  if (props.username.length > 1 && !validUsername) {
      updateState({
          ...state,
          validUsername: true
      });
  }
  if (props.username.length < 1 && validUsername) {
      updateState({
        ...state,
          validUsername: false
      });
  }
}

const validatePassword = () => {
  let strongPassword = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);
  let valid = strongPassword.test(props.password);
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
  if (props.password === props.confirmPassword && !confirmPassword && props.password) {
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
  {/* </Card.Group> */}
  </Card>
)
}

export default CreateAcct;