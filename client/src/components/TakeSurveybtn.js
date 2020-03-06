import React from "react";
import { Button } from 'semantic-ui-react'

const buttonStyle = {
    background: "rgb(5, 15, 30)",
    height: 400,
    width: 400,
    opacity: "90%",
    color: "#ef291f",
    paddingTop: "170px",
    borderColor: "white"
    
    

} 




const TakeSurveyBtn = () => {
   
    return (
       
        <Button style={buttonStyle} href= "/Survey" >
        <h2>Start Survey Now!</h2>
        </Button>
        
    )
}


export default TakeSurveyBtn;