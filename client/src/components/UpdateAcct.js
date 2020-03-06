import React from 'react'
import { Button,  Form, Card } from 'semantic-ui-react'
import "../styles/index.css"

const UpdateAcct = () => (
<Card id="updateAccount">
  <Form  >
    <h3>Update Account:</h3>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email'/>
    </Form.Field>
    <Form.Field>
      <label>Old Password</label>
      <input placeholder='Old Password' />
    </Form.Field>
    <Form.Field>
      <label>New Password</label>
      <input placeholder='New Password' />
    </Form.Field>
    <Form.Field>
      <label>Confirm Password</label>
      <input placeholder='Confirm Password' />
    </Form.Field>
    
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
    <Button id="buttonClr" type='submit'>Update</Button>
    
  </Form>
</Card>
)


export default UpdateAcct;