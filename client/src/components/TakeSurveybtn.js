import React from "react";
import { Button } from 'semantic-ui-react'

const buttonStyle = {
    background: "rgb(5, 15, 30)",
    height: 400,
    width: 400,
    opacity: "90%",
    color: "#ef291f"
    

} 




const TakeSurveyBtn = () => {
   
    return (
       
        <Button style={buttonStyle} id="mainButton">
        <h2>Start Survey Now!</h2>
        </Button>
        
    )
}


export default TakeSurveyBtn;