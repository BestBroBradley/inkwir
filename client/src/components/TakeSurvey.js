import React, { useEffect, useState, Component } from 'react';
import { Input, Form, Radio, Button } from 'semantic-ui-react';
import "../styles/index.css"
import API from '../utils/API';

const TakeSurvey = () => {
  const [state, updateState] = useState({
      answer: ""
  })

  let surveys = []

  useEffect(() => {
    API.getAll().then(res => {
      console.log(res.data)
      surveys = res
    });
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    updateState({
      ...state,
      [name]: value
    })
  }

  return (
    <div>
      <Form id="questions">
        <h3 id="answers">Title:{}</h3>

        <h5>Category:{}</h5>

        <h5> Author:{}</h5>

        <Input transparent placeholder='Question' />
        <br />
        <br />
        <Form.Field id="answers">
          <Radio
            label='answer 1'
            name='radioGroup'
            value='this'
            checked={() => updateState({ ...state, answer: "1"})}
            onChange={handleChange}
            class="answers"
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='answer 2'
            name='radioGroup'
            value='that'
            checked={() => updateState({ ...state, answer: "2"})}
            onChange={handleChange}
            id="answers"
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='answer 3'
            name='radioGroup'
            value='that'
            checked={() => updateState({ ...state, answer: "3"})}
            onChange={handleChange}
            id="answers"
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='answer 4'
            name='radioGroup'
            value='that'
            checked={() => updateState({ ...state, answer: "4"})}
            onChange={handleChange}

          />
        </Form.Field>
      </Form>
      <Button id="buttonClr" >Next question!</Button>
      <Button id="buttonClr" >Submit your survey!</Button>
    </div>
  )
}

export default TakeSurvey