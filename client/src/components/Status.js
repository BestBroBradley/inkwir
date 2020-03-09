import React, { useContext, useEffect } from "react";
import { Button, Card, Progress } from 'semantic-ui-react'
import UserContext from "../utils/UserContext"

const buttonStyle = {
    background: "rgb(5, 15, 30)",
    height: 400,
    width: 400,
    opacity: "90%",
    color: "#ef291f",
    borderRadius: "10px"



} 

const statusBarStyle = {
    padding: "20rem"
}

const progress1 = {
    background: "#ffffff"

}

const Status = () => {
   
    const { userState } = useContext(UserContext)

    console.log(userState.surveysTaken.length)

    return (
        <Button style={buttonStyle} >
            <div> 
                    <h3>Survey Status</h3>
                    <h5>Complete 10 surveys to unlock the
                    ability to create your own surveys!</h5>
      
                    { userState.surveysTaken.length ? (<Progress className='progress1' color='#ef291f'  value={userState.surveysTaken.length} total='10' progress='ratio' />) : null}
                    { userState.surveysTaken.length >= 10 ? (<h4 color= 'grey'>Create your own surveys!</h4>) : null } 
               
            </div>
        </Button>
    )
}


export default Status;