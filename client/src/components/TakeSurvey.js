import React, { useEffect, useState, Component } from 'react';
import { Input, Form, Radio, Button } from 'semantic-ui-react';
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

  const handleChange = (event) => {
    const { name, value } = event.target
    updateSurveyState({
      ...surveyState,
      [name]: value
    })
  }

  return (
    <>
      {surveyState.map(survey =>
        <div>
          <Form id="questions">
            <h3 id="answers">{survey.title}</h3>

            <h5>Category:{survey.category}</h5>

            <Question questions={survey.questions} />
          
          </Form>
        </div>)}
    </>
  )
}

export default TakeSurvey