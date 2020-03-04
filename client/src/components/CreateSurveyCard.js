import React from 'react'
import { Input, Card, Button } from 'semantic-ui-react'

const CreateSurvey= () => (
  <div>
    <Card color='pink'> 
      <h3>Create a New Survey!</h3>
      <Input fluid placeholder='Survey Title:' />
      <br/>
      <Input fluid placeholder='Category:' />
      <br/>
      <Input fluid placeholder='Author:' />
      <br/>
    <Input fluid placeholder='Enter a QUESTION here ...' />
      <br/>
      <br/>
    <Input fluid placeholder='Enter an ANSWER here ...' />
      <br/>
    <Input fluid placeholder='Enter an ANSWER here ...' />
      <br/>
    <Input fluid placeholder='Enter an ANSWER here ...' />
      <br/>
    <Input fluid placeholder='Enter an ANSWER here ...' />
      <br/>
    </Card> 
    <Button color='pink'>Add another question!</Button>
    <Button color='pink'>Submit your survey!</Button>
  </div>
)

export default CreateSurvey;