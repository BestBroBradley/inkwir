import React, { useEffect, useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import "../styles/index.css"
import API from '../utils/API';
import { Question } from "./Question"

const TakeSurvey = () => {
  const [surveyState, updateSurveyState] = useState([])

  useEffect(() => {
    API.getAll().then(res => {
      console.log(res.data)
      updateSurveyState(res.data)
    });
  }, [])

  return (
    <>
      {surveyState.map(survey =>
        <div>
          <Form id="questions">
            <h3 id="answers">{survey.title}</h3>

            <h5>Category:{survey.category}</h5>

            <Question _id={survey._id} results={survey.results} questions={survey.questions} />
          </Form>
        </div>)}
    </>
  )
}

export default TakeSurvey