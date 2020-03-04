import React from "react";
import { Button } from 'semantic-ui-react'

const buttonStyle = {
   
    height: 400,
    width: 400,
    paddingLeft: 20,
    opacity: "50%",
   

} 




const TakeSurveyBtn = () => {
   
    return (
       
        <Button style={buttonStyle} >
        <h2>Start Survey Now!</h2>
        </Button>
        
    )
}


export default TakeSurveyBtn;