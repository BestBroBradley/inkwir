import React from "react";
import { Button } from 'semantic-ui-react'

const buttonStyle = {
    background: "rgb(5, 15, 30)",
    height: 400,
    width: 400,
    opacity: "90%",
    color: "#ef291f"

} 




const Created = () => {
   
    return (
       
        <Button style={buttonStyle} >
        <h2>Surveys Created</h2>
        </Button>
        
    )
}


export default Created;