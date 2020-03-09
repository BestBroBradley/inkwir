import React, { useState, useEffect } from 'react'
import { Input, Form, Radio } from 'semantic-ui-react'
import '../styles/index.css'

export const Question = (props) => {
  console.log(props)

  const handleChange = (question, value) => {
    setResultState({
      ...resultState,
      [question]: value
    })
  }
 
  const [resultState, setResultState] = useState({
    a1: "",
    a2: "",
    a3: "",
    a4: ""
  })

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
            value="a"
            checked={resultState.a1 === "a"}
            onChange={() => handleChange("a1", "a")}
            className="answers"
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={a1.b}
            name='b'
            value='b'
            checked={resultState.a1 === "b"}
            onChange={() => handleChange("a1", "b")}
            className="answers"
          />
        </Form.Field>
        { a1.c ? <Form.Field>
          <Radio
            label={a1.c}
            name='c'
            value='c'
            checked={resultState.a1 === "c"}
            onChange={() => handleChange("a1", "c")}
            className="answers"
          />
        </Form.Field> : null}
        { a1.d ? <Form.Field>
          <Radio
            label={a1.d}
            name='d'
            value='d'
            checked={resultState.a1 === "d"}
            onChange={() => handleChange("a1", "d")}
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
            value='a'
            checked={resultState.a2 === "a"}
            onChange={() => handleChange("a2", "a")}
            className="answers"
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={a2.b}
            name='b'
            value='b'
            checked={resultState.a2 === "b"}
            onChange={() => handleChange("a2", "b")}
            className="answers"
          />
        </Form.Field>
        { a2.c ? <Form.Field>
          <Radio
            label={a2.c}
            name='c'
            value='c'
            checked={resultState.a2 === "c"}
            onChange={() => handleChange("a2", "c")}
            className="answers"
          />
        </Form.Field> : null}
        { a2.d ? <Form.Field>
          <Radio
            label={a2.d}
            name='d'
            value='d'
            checked={resultState.a2 === "d"}
            onChange={() => handleChange("a2", "d")}
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
            value='a'
            checked={resultState.a3 === "a"}
            onChange={() => handleChange("a3", "a")}
            className="answers"
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={a3.b}
            name='b'
            value='b'
            checked={resultState.a3 === "b"}
            onChange={() => handleChange("a3", "b")}
            className="answers"
          />
        </Form.Field>
        { a3.c ? <Form.Field>
          <Radio
            label={a3.c}
            name='c'
            value='c'
            checked={resultState.a3 === "c"}
            onChange={() => handleChange("a3", "c")}
            className="answers"
          />
        </Form.Field> : null}
        { a3.d ? <Form.Field>
          <Radio
            label={a3.d}
            name='d'
            value='d'
            checked={resultState.a3 === "d"}
            onChange={() => handleChange("a3", "d")}
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
            value='a'
            checked={resultState.a4 === "a"}
            onChange={() => handleChange("a4", "a")}
            className="answers"
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={a4.b}
            name='b'
            value='b'
            checked={resultState.a4 === "b"}
            onChange={() => handleChange("a4", "b")}
            className="answers"
          />
        </Form.Field>
        { a4.c ? <Form.Field>
          <Radio
            label={a4.c}
            name='c'
            value='c'
            checked={resultState.a4 === "c"}
            onChange={() => handleChange("a4", "c")}
            className="answers"
          />
        </Form.Field> : null}
        { a4.d ? <Form.Field>
          <Radio
            label={a4.d}
            name='d'
            value='d'
            checked={resultState.a4 === "d"}
            onChange={() => handleChange("a4", "d")}
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
            value='a'
            checked={resultState.a5 === "a"}
            onChange={() => handleChange("a5", "a")}
            className="answers"
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={a5.b}
            name='b'
            value='b'
            checked={resultState.a5 === "b"}
            onChange={() => handleChange("a5", "b")}
            className="answers"
          />
        </Form.Field>
        { a5.c ? <Form.Field>
          <Radio
            label={a5.c}
            name='c'
            value='c'
            checked={resultState.a5 === "c"}
            onChange={() => handleChange("a5", "c")}
            className="answers"
          />
        </Form.Field> : null}
        { a5.d ? <Form.Field>
          <Radio
            label={a5.d}
            name='d'
            value='d'
            checked={resultState.a5 === "d"}
            onChange={() => handleChange("a5", "d")}
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