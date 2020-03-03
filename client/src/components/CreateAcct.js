import React from 'react'
import { Button, Form, Card } from 'semantic-ui-react'

const CreateAcct = () => (
  <Card>
    {/* <Card.Group itemsPerRow={2}> */}
  <Form>
    <h3>Create an Account:</h3>
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

export default CreateAcct;