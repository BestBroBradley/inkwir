import React, { useContext, userState } from 'react'
import { Input, Card, Button } from 'semantic-ui-react'
import '../styles/index.css'
import UserContext from "../utils/UserContext";

const CreateSurvey= () => {
  const { userState } = useContext(UserContext);
  console.log(userState.loggedIn);

  return (
    <>
      { userState.loggedIn ? 
      (
          <div id="SurveyCard">
   
            <h3>Create a New Survey!</h3>
              <Input fluid placeholder='Survey Title:' />
              <br/>
              <Input fluid placeholder='Category:' />
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
 
              <Button id="buttonClr">Add another question!</Button>
              <Button id="buttonClr">Submit your survey!</Button>
          </div>) : (<h1>Please sign in to create a survey!</h1>)
      }
    </>
  )
}


export default CreateSurvey;
      
      