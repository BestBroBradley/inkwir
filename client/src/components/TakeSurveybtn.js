import React from "react";
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"

const buttonStyle = {
    background: "rgb(5, 15, 30)",
    height: 400,
    width: 400,
    opacity: "90%",
    color: "#ef291f",
    paddingTop: "175px",
    color:  "rgb(180, 58, 58)",
    fontSize: "16pt",
    
    

} 




const TakeSurveyBtn = () => {
   
    return (
       
        <Button style={buttonStyle} href= "/Survey" >
        <Link>Start Survey Now!</Link>
        </Button>
        
    )
}


export default TakeSurveyBtn;