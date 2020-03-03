import React from "react";
import { Button } from 'semantic-ui-react'

const buttonStyle = {
    background: "(5,15,30)",
    height: 400,
    width: 400,
    
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