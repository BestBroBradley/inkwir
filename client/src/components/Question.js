import React, { useState, useEffect } from 'react'
import { Input, Form, Radio, Button } from 'semantic-ui-react'
import '../styles/index.css'
import API from '../utils/API'

export const Question = (props) => {

  console.log(props.results._id)

  const { a1, q1, a2, q2, a3, q3, a4, q4, a5, q5 } = props.questions[0]


  const [resultState, setResultState] = useState({
    a1: "",
    a2: ""
  })

  const [updatedResults, setUpdatedResults] = useState(props.results ? props.results : {})

  const handleChange = (question, value) => {
    setResultState({
      ...resultState,
      [question]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const update = { ...updatedResults }
    if (resultState.a1) {
      switch (resultState.a1) {
        case "a":
          update.a1.a = update.a1.a + 1
          break;
        case "b":
          update.a1.b = update.a1.b + 1
          break;
        case "c":
          update.a1.c = update.a1.c + 1
          break;
        case "d":
          update.a1.d = update.a1.d + 1
          break;
        default:
          break;
      }
    }
    if (resultState.a2) {
      switch (resultState.a2) {
        case "a":
          update.a2.a = update.a2.a + 1
          break;
        case "b":
          update.a2.b = update.a2.b + 1
          break;
        case "c":
          update.a2.c = update.a2.c + 1
          break;
        case "d":
          update.a2.d = update.a2.d + 1
          break;
        default:
          break;
      }
    }
    if (resultState.a3) {
      switch (resultState.a3) {
        case "a":
          console.log(`result a`)
          update.a3.a = update.a3.a + 1
          break;
        case "b":
          update.a3.b = update.a3.b + 1
          break;
        case "c":
          update.a3.c = update.a3.c + 1
          break;
        case "d":
          update.a3.d = update.a3.d + 1
          break;
        default:
          break;
      }
    }
    if (resultState.a4) {
      switch (resultState.a4) {
        case "a":
          update.a4.a = update.a4.a + 1
          break;
        case "b":
          update.a4.b = update.a4.b + 1
          break;
        case "c":
          update.a4.c = update.a4.c + 1
          break;
        case "d":
          update.a4.d = update.a4.d + 1
          break;
        default:
          break;
      }
    }
    if (resultState.a5) {
      switch (resultState.a5) {
        case "a":
          update.a5.a = update.a5.a + 1
          break;
        case "b":
          update.a5.b = update.a5.b + 1
          break;
        case "c":
          update.a5.c = update.a5.c + 1
          break;
        case "d":
          update.a5.d = update.a5.d + 1
          break;
        default:
          break;
      }
    }
    setUpdatedResults(update)
    API.submitResult(props.results._id, update)
  }

  const checkQ1 = (a1 ? (
    <div>
      <Input fluid transparent placeholder={q1} />
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
      {a1.c ? <Form.Field>
        <Radio
          label={a1.c}
          name='c'
          value='c'
          checked={resultState.a1 === "c"}
          onChange={() => handleChange("a1", "c")}
          className="answers"
        />
      </Form.Field> : null}
      {a1.d ? <Form.Field>
        <Radio
          label={a1.d}
          name='d'
          value='d'
          checked={resultState.a1 === "d"}
          onChange={() => handleChange("a1", "d")}
          className="answers"
        />
      </Form.Field> : null}
    </div>) : null
  )
  const checkQ2 = (a2 ? (
    <div>
      <br /><hr /><br />
      <Input fluid transparent placeholder={q2} />
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
      {a2.c ? <Form.Field>
        <Radio
          label={a2.c}
          name='c'
          value='c'
          checked={resultState.a2 === "c"}
          onChange={() => handleChange("a2", "c")}
          className="answers"
        />
      </Form.Field> : null}
      {a2.d ? <Form.Field>
        <Radio
          label={a2.d}
          name='d'
          value='d'
          checked={resultState.a2 === "d"}
          onChange={() => handleChange("a2", "d")}
          className="answers"
        />
      </Form.Field> : null}
    </div>) : null
  )
  const checkQ3 = (a3 ? (
    <div>
      <br /><hr /><br />
      <Input fluid transparent placeholder={q3} />
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
      {a3.c ? <Form.Field>
        <Radio
          label={a3.c}
          name='c'
          value='c'
          checked={resultState.a3 === "c"}
          onChange={() => handleChange("a3", "c")}
          className="answers"
        />
      </Form.Field> : null}
      {a3.d ? <Form.Field>
        <Radio
          label={a3.d}
          name='d'
          value='d'
          checked={resultState.a3 === "d"}
          onChange={() => handleChange("a3", "d")}
          className="answers"
        />
      </Form.Field> : null}
      {a4 ? <><br /><hr /><br /></> : null}
    </div>) : null
  )
  const checkQ4 = (a4 ? (
    <div>
      <br /><hr /><br />
      <Input fluid transparent placeholder={q4} />
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
      {a4.c ? <Form.Field>
        <Radio
          label={a4.c}
          name='c'
          value='c'
          checked={resultState.a4 === "c"}
          onChange={() => handleChange("a4", "c")}
          className="answers"
        />
      </Form.Field> : null}
      {a4.d ? <Form.Field>
        <Radio
          label={a4.d}
          name='d'
          value='d'
          checked={resultState.a4 === "d"}
          onChange={() => handleChange("a4", "d")}
          className="answers"
        />
      </Form.Field> : null}
    </div>) : null
  )
  const checkQ5 = (a5 ? (
    <div>
      <br /><hr /><br />
      <Input fluid transparent placeholder={q5} />
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
      {a5.c ? <Form.Field>
        <Radio
          label={a5.c}
          name='c'
          value='c'
          checked={resultState.a5 === "c"}
          onChange={() => handleChange("a5", "c")}
          className="answers"
        />
      </Form.Field> : null}
      {a5.d ? <Form.Field>
        <Radio
          label={a5.d}
          name='d'
          value='d'
          checked={resultState.a5 === "d"}
          onChange={() => handleChange("a5", "d")}
          className="answers"
        />
      </Form.Field> : null}
    </div>) : null
  )

  return (
    <>
      {checkQ1}
      {checkQ2}
      {checkQ3}
      {checkQ4}
      {checkQ5}
      <Button onClick={handleSubmit} id="buttonClr" >Submit your survey!</Button>
    </>
  )
}