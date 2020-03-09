import React from "react";
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"

const buttonStyle = {
    background: "rgb(5, 15, 30)",
    height: 400,
    width: 400,
    opacity: "90%",
    color: "#ef291f",
    paddingTop: "30px",
    color:  "rgb(180, 58, 58)",
    fontSize: "16pt",
    borderRadius: "10px"
    
    

} 




const TakeSurveyBtn = () => {
   
    return (
       

        <Button style={buttonStyle} to= "/Survey" >
        <Link><h2>Start Survey Now!</h2></Link>

        </Button>
        
    )
}


export default TakeSurveyBtn;