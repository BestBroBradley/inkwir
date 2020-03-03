import React from "react";
import { Button } from 'semantic-ui-react'

const buttonStyle = {
    background: "(5,15,30)",
    padding: "100px",
    zIndex: "50",
    xIndex: "30",
    opacity: "70%",
    textColor: "White"

} 




const TakeSurveyBtn = () => {
   
    return (
       
        <Button style={buttonStyle} >
        <h2>Start Survey Now!</h2>
        </Button>
        
    )
}


export default TakeSurveyBtn;