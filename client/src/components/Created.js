import React from "react";
import { Button } from 'semantic-ui-react'

const buttonStyle = {
    background: "(5,15,30)",
    height: 400,
    width: 400,
    zIndex: "50",
    xIndex: "30",
    opacity: "70%",
    textColor: "White"

} 




const Created = () => {
   
    return (
       
        <Button style={buttonStyle} >
        <h2>Surveys Created</h2>
        </Button>
        
    )
}


export default Created;