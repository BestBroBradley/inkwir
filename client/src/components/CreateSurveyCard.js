import React, { useEffect, useContext, useState } from 'react'
import { Input, Card, Button } from 'semantic-ui-react'
import '../styles/index.css'
import API from '../utils/API'
import UserContext from '../utils/UserContext'
import { SearchInput } from "../components/SearchCategories"

const CreateSurvey = () => {
  
  const { userState, currentUser } = useContext(UserContext)
  const { loggedIn } = userState
  const { _id } = currentUser.currentuser

  const [currentQuestion, setCurrentQuestion] = useState({
    title: "",
    category: "",
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    questionNumber: 1
  })

  const { questionNumber, title, category, question, answer1, answer2, answer3, answer4 } = currentQuestion

  const [submit, sendSubmit] = useState(false)

  const [newSurvey, updateSurvey] = useState({
    q1: "",
    a1: {}
  })

  const handleAdd = () => {
      switch (questionNumber) {
      case (1):
        updateSurvey({
          ...newSurvey,
          title: title,
          createdBy: currentUser.currentuser._id,
          q1: question,
          a1: {
            a: answer1,
            b: answer2,
            c: answer3,
            d: answer4
          }
        })
        setCurrentQuestion({
          ...currentQuestion,
          question: "",
          answer1: "",
          answer2: "",
          answer3: "",
          answer4: "",
          questionNumber: 2
        })
        break;
      case (2):
          updateSurvey({
            ...newSurvey,
            q2: question,
            a2: {
              a: answer1,
              b: answer2,
              c: answer3,
              d: answer4
            }
          })
          setCurrentQuestion({
            ...currentQuestion,
            question: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            questionNumber: 3
          })
          break;
      case 3:
          updateSurvey({
            ...newSurvey,
            q3: question,
            a3: {
              a: answer1,
              b: answer2,
              c: answer3,
              d: answer4
            }
          })
          setCurrentQuestion({
            ...currentQuestion,
            question: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            questionNumber: 4
          })
          break;
      case 4:
          updateSurvey({
            ...newSurvey,
            q4: question,
            a4: {
              a: answer1,
              b: answer2,
              c: answer3,
              d: answer4
            }
          })
          setCurrentQuestion({
            ...currentQuestion,
            question: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            questionNumber: 5
          })
          break;
      case 5:
          updateSurvey({
            ...newSurvey,
            q5: question,
            a5: {
              a: answer1,
              b: answer2,
              c: answer3,
              d: answer4
            }
          })
          setCurrentQuestion({
            ...currentQuestion,
            question: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            questionNumber: 6
          })
          break;
      case 6:
        alert(`Sorry, no more than 5 questions allowed.`)
        break;
      default:
        break;
    }
}

  const handleSelect = (item) => {
    updateSurvey({
      ...newSurvey,
      category: item
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    API.submitsurvey(newSurvey)
  }

  const handleInputChange = (event) => {
      const { name, value } = event.target
      setCurrentQuestion({
        ...currentQuestion,
        [name]: value
      })
  }

  return (
    <div id="SurveyCard">
      {loggedIn === true ? (
        <>
        <h3>Create a New Survey!</h3>
        <Input value={title}name="title" onChange={handleInputChange} fluid placeholder='Survey Title:'/>
        <br />
        <SearchInput handleSelect={handleSelect}/>
        <br />
        {/* <Input value={category} name="category" onChange={handleInputChange} fluid placeholder='Category:'/> */}
        <br />
        <Input value={question} name="question" onChange={handleInputChange} fluid placeholder='Enter a QUESTION here ...'/>
        <br />
        <br />
        <Input value={answer1} name="answer1" onChange={handleInputChange} fluid placeholder='Enter an ANSWER here ...'/>
        <br />
        <Input value={answer2} name="answer2" onChange={handleInputChange} fluid placeholder='Enter an ANSWER here ...'/>
        <br />
        <Input value={answer3} name="answer3" onChange={handleInputChange} fluid placeholder='Enter an ANSWER here ...'/>
        <br />
        <Input value={answer4} name="answer4" onChange={handleInputChange} fluid placeholder='Enter an ANSWER here ...'/>
        <br />
  
        <Button onClick={handleAdd} id="buttonClr">Add another question!</Button>
        <Button onClick={handleSubmit} id="buttonClr">Submit your survey!</Button>
        </>
      ) : (
        <h1>Please sign in to submit a survey</h1>
      )}
      
    </div>
  )
}

export default CreateSurvey;

