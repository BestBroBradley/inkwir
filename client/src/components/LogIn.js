import React from 'react'
import { Button, Form, Card } from 'semantic-ui-react'

const LogIn = () => (
  <Card  id="logInCard">
  
  <Form>
    <h3>Log In :</h3>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>
    
    <Button color= 'pink' type='submit'>Log In</Button>
  </Form>
  
  </Card>
)

export default LogIn;