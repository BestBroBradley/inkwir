import React from "react";
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"

const buttonStyle = {
    background: "rgb(5, 15, 30)",
    height: 400,
    width: 400,
    opacity: "90%",
    color: "#ef291f",
    paddingTop: "10px",
    fontSize: "16pt"
 
    
    

} 




const TakeSurveyBtn2 = () => {
   
    return (
       
        <Button style={buttonStyle} to="/Survey">
        <Link>Start Survey Now!</Link>
        </Button>
        
    )
}


export default TakeSurveyBtn2;