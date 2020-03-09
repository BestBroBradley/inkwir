import React, { useState, useEffect } from 'react'
import { Input, Form, Radio } from 'semantic-ui-react'
import '../styles/index.css'

export const Question = (props) => {
  console.log(props)

  // const [resultState, setResultState] = useState({
  //   a1
  // })

  const { a1, q1, a2, q2, a3, q3, a4, q4, a5, q5 } = props.questions[0]

  const checkQ1 = (a1 ? (
    <div>
        <Input transparent placeholder={q1} />
        <br />
        <br />
        <Form.Field id="answers">
          <Radio
            label={a1.a}
            name='a'
            value={a1.a}
            // checked={() => updateSurveyState({ ...surveyState, answer: "1"})}
            // onChange={handleChange}
            className="answers"
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={a1.b}
            name='b'
            value={a1.b}
            // checked={() => updateSurveyState({ ...surveyState, answer: "2"})}
            // onChange={handleChange}
            className="answers"
          />
        </Form.Field>
        { a1.c ? <Form.Field>
          <Radio
            label={a1.c}
            name='c'
            value={a1.c}
            // checked={() => updateSurveyState({ ...surveyState, answer: "3"})}
            // onChange={handleChange}
            className="answers"
          />
        </Form.Field> : null}
        { a1.d ? <Form.Field>
          <Radio
            label={a1.d}
            name='d'
            value={a1.d}
          // checked={() => updateSurveyState({ ...surveyState, answer: "4"})}
          // onChange={handleChange}
            className="answers"
          />
        </Form.Field> : null}
        </div> ) : null
  )
  const checkQ2 = (a2 ? (
    <div>
        <br/><hr/><br/>
        <Input transparent placeholder={q2} />
        <br />
        <br />
        <Form.Field id="answers">
          <Radio
            label={a2.a}
            name='a'
            value={a2.a}
            // checked={() => updateSurveyState({ ...surveyState, answer: "1"})}
            // onChange={handleChange}
            className="answers"
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={a2.b}
            name='b'
            value={a2.b}
            // checked={() => updateSurveyState({ ...surveyState, answer: "2"})}
            // onChange={handleChange}
            className="answers"
          />
        </Form.Field>
        { a2.c ? <Form.Field>
          <Radio
            label={a2.c}
            name='c'
            value={a1.c}
            // checked={() => updateSurveyState({ ...surveyState, answer: "3"})}
            // onChange={handleChange}
            className="answers"
          />
        </Form.Field> : null}
        { a2.d ? <Form.Field>
          <Radio
            label={a2.d}
            name='d'
            value={a2.d}
          // checked={() => updateSurveyState({ ...surveyState, answer: "4"})}
          // onChange={handleChange}
            className="answers"
          />
        </Form.Field> : null}
        </div> ) : null
  )
  const checkQ3 = (a3 ? (
    <div>
      <br/><hr/><br/>
        <Input transparent placeholder={q3} />
        <br />
        <br />
        <Form.Field id="answers">
          <Radio
            label={a3.a}
            name='a'
            value={a3.a}
            // checked={() => updateSurveyState({ ...surveyState, answer: "1"})}
            // onChange={handleChange}
            className="answers"
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={a3.b}
            name='b'
            value={a3.b}
            // checked={() => updateSurveyState({ ...surveyState, answer: "2"})}
            // onChange={handleChange}
            className="answers"
          />
        </Form.Field>
        { a3.c ? <Form.Field>
          <Radio
            label={a3.c}
            name='c'
            value={a3.c}
            // checked={() => updateSurveyState({ ...surveyState, answer: "3"})}
            // onChange={handleChange}
            className="answers"
          />
        </Form.Field> : null}
        { a3.d ? <Form.Field>
          <Radio
            label={a3.d}
            name='d'
            value={a3.d}
          // checked={() => updateSurveyState({ ...surveyState, answer: "4"})}
          // onChange={handleChange}
            className="answers"
          />
        </Form.Field> : null}
        { a4 ? <><br/><hr/><br/></> : null }
        </div> ) : null
  )
  const checkQ4 = (a4 ? (
    <div>
      <br/><hr/><br/>
        <Input transparent placeholder={q4} />
        <br />
        <br />
        <Form.Field id="answers">
          <Radio
            label={a4.a}
            name='a'
            value={a4.a}
            // checked={() => updateSurveyState({ ...surveyState, answer: "1"})}
            // onChange={handleChange}
            className="answers"
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={a4.b}
            name='b'
            value={a4.b}
            // checked={() => updateSurveyState({ ...surveyState, answer: "2"})}
            // onChange={handleChange}
            className="answers"
          />
        </Form.Field>
        { a4.c ? <Form.Field>
          <Radio
            label={a4.c}
            name='c'
            value={a4.c}
            // checked={() => updateSurveyState({ ...surveyState, answer: "3"})}
            // onChange={handleChange}
            className="answers"
          />
        </Form.Field> : null}
        { a4.d ? <Form.Field>
          <Radio
            label={a4.d}
            name='d'
            value={a4.d}
          // checked={() => updateSurveyState({ ...surveyState, answer: "4"})}
          // onChange={handleChange}
            className="answers"
          />
        </Form.Field> : null}
        </div> ) : null
  )
  const checkQ5 = (a5 ? (
    <div>
      <br/><hr/><br/>
        <Input transparent placeholder={q5} />
        <br />
        <br />
        <Form.Field id="answers">
          <Radio
            label={a5.a}
            name='a'
            value={a5.a}
            // checked={() => updateSurveyState({ ...surveyState, answer: "1"})}
            // onChange={handleChange}
            className="answers"
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={a5.b}
            name='b'
            value={a5.b}
            // checked={() => updateSurveyState({ ...surveyState, answer: "2"})}
            // onChange={handleChange}
            className="answers"
          />
        </Form.Field>
        { a5.c ? <Form.Field>
          <Radio
            label={a5.c}
            name='c'
            value={a5.c}
            // checked={() => updateSurveyState({ ...surveyState, answer: "3"})}
            // onChange={handleChange}
            className="answers"
          />
        </Form.Field> : null}
        { a5.d ? <Form.Field>
          <Radio
            label={a5.d}
            name='d'
            value={a5.d}
          // checked={() => updateSurveyState({ ...surveyState, answer: "4"})}
          // onChange={handleChange}
            className="answers"
          />
        </Form.Field> : null}
        </div> ) : null
  )

  return (
    <>
      {checkQ1}
      {checkQ2}
      {checkQ3}
      {checkQ4}
      {checkQ5}
    </>
  )
}