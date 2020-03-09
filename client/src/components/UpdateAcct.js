import React, { useEffect, useState, useContext } from 'react'
import { Button,  Form, Card } from 'semantic-ui-react'
import "../styles/index.css"
import UserContext from "../utils/UserContext"
import API from "../utils/API"

const UpdateAcct = () => {

const { currentUser, userState, isLoggedIn } = useContext(UserContext)
const { username, password, email, age, gender, nationality } = currentUser.currentuser

const [updates, setUpdates] = useState({
  email: email,
  oldpw: "",
  newpw: "",
  confirm: "",
  age: age,
  nationality: nationality,
  gender: gender,
  validEmail: true,
  validOldPW: true,
  validNewPW: true,
  validMatch: true
})

useEffect(() => {
  API.isLoggedIn().then(user => {
    const { email, password, age, nationality, gender, username } = user.data.user
    setUpdates({
      email: email,
      oldpw: "",
      newpw: "",
      confirm: "",
      age: age,
      nationality: nationality,
      gender: gender,
      validEmail: true,
      validOldPW: true,
      validNewPW: true,
      validMatch: true
    })
  })
  }, [])

  const testPW = (pw, text) => {
      let strongPassword = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);
      switch (pw) {
        case "oldpw":
          {(text.length) > 8 && strongPassword.test(text) ? setUpdates({ ...updates, oldpw: text, validOldPW: true}) : setUpdates({ ...updates, oldpw: text, validOldPW: false})}
          return;
        case "newpw":
          {(text.length) > 8 && strongPassword.test(text) || text.length === 0 ? setUpdates({ ...updates, newpw: text, validNewPW: true}) : setUpdates({ ...updates, newpw: text, validNewPW: false})}
          return;
        case "confirm":
          {(text !== updates.newpw) ? setUpdates({ ...updates, confirm: text, validMatch: false}) : setUpdates({ ...updates, confirm: text, validMatch: true})}
          return;
        default:
          break;
      }
  }

  const validateEmail = (value) => {
    let emailTest = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    let valid = emailTest.test(updates.email);
    
    if (valid) {
        setUpdates({
          ...updates,
            email: value,
            validEmail: true
        });
    }
    if (!valid) {
      setUpdates({
        ...updates,
        email: value,
        validEmail: false
      });
    }
  }

  const handleUpdate = (event) => {
    const value = event.target.value;
    const name = event.target.name;
  if (name !== "oldpw" && name!=="newpw" && name!=="confirm" && name!=="email") {
    setUpdates({
    ...updates,
    [name]: value
  })} else if (name === "email") {
    validateEmail(value)
  }
  else if (name === "oldpw" || name === "newpw" || name === "confirm") {
    testPW(name, value)
  }
}

const handleUpdateSubmit = (event => {
  event.preventDefault()

  if (updates.validEmail === true && updates.validOldPW === true  && updates.validNewPW === true && updates.validMatch === true) {
    const updatedUser = {
      id: currentUser.currentuser._id,
      email: updates.email,
      age: updates.age,
      nationality: updates.nationality,
      gender: updates.gender,
      oldpassword: updates.oldpw
    }
    if (updates.newpw !== "") {
      updatedUser.password = updates.confirm
    } else if (updates.newpw === "") {
      updatedUser.password = updates.oldpw
    }
    console.log(updatedUser)
    API.update(updatedUser)
  }
})

return (
<div id="updateAccount">
  <Form onSubmit={handleUpdateSubmit}>
    <h3>Update Account:</h3>
    <Form.Field>
      {/* <label>Username</label> */}
      <input value="username" value={username} placeholder='Username' />
    </Form.Field>
    <Form.Field>
      {/* <label>Current Password</label> */}
      <h4 style={{color: "#ef291f"}}>Please confirm your current password to update account.</h4>
      <input value={updates.oldpw} name="oldpw" onChange={handleUpdate} placeholder='Current Password' />
    </Form.Field>
    <br/>
    <Form.Field>
      <label>Email</label>
      <input value={updates.email} name="email" onChange={handleUpdate} placeholder={email} />
    </Form.Field>
    <Form.Field>
      <label>New Password</label>
      <input value={updates.newpw} name="newpw" onChange={handleUpdate} placeholder='New Password' />
    </Form.Field>
    <Form.Field>
      <label>Confirm Password</label>
      <input value={updates.confirm} name="confirm" onChange={handleUpdate} placeholder='Confirm Password' />
    </Form.Field>
    <Form.Field>
      <label>Age</label>
      <input value={updates.age} name="age" onChange={handleUpdate} placeholder={age}/>
    </Form.Field>
    <Form.Field>
      <label>Gender</label>
      <input value={updates.gender} name="gender" onChange={handleUpdate} placeholder={gender} />
    </Form.Field>
    <Form.Field>
      <label>Location</label>
      <input value={updates.nationality} name="nationality" onChange={handleUpdate} placeholder={nationality} />
    </Form.Field>
    <br></br>
    <Button id="buttonClr" type='submit'>Update</Button>
  </Form>
  <br/>
</div>
)}

export default UpdateAcct;