import React from 'react'
import { Input, Card, Button } from 'semantic-ui-react'

const TakeSurvey= () => (
    <div>
      <Card color='pink'> 
        <h3>Title:{}</h3>
        <h5>Category:{}  Author:{} </h5>
      
      <Input transparent placeholder='Question' /> />
        <br/>
        <br/>
      <Input fluid  />
        <br/>
      <Input fluid  />
        <br/>
      <Input fluid  />
        <br/>
      <Input fluid  />
        <br/>
      </Card> 
      <Button color='pink'>Next question!</Button>
      <Button color='pink'>Submit your survey!</Button>
    </div>
  )