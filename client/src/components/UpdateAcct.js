import React from 'react'
import { Button,  Form, Card } from 'semantic-ui-react'
import "../styles/index.css"

const UpdateAcct = () => (

 <div id="updateAccount" >  
    <h3>Update Account:</h3>

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
    <br></br>
    <br></br>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email'/>
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
    <br></br>
    <Button id="buttonClr" type='submit'>Update</Button>
    <br></br>
    
 </div>

)


export default UpdateAcct;