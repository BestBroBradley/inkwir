import React from 'react'
import { Button,  Form, Card } from 'semantic-ui-react'

const UpdateAcct = () => (
<Card>
  <Form>
    <h3>Update Account:</h3>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Username' />
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
    <Button color= 'pink' type='submit'>Update</Button>
    <Button color= 'pink' type='submit'>Log Out</Button>
  </Form>
  </Card>
)


export default UpdateAcct;