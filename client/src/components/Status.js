import React from "react";
import { Button } from 'semantic-ui-react'
import Statusbar from './SurveyStatus';

const buttonStyle = {
    background: "(5,15,30)",
    height: 400,
    width: 400,
   
    opacity: "50%",
    textColor: "White"

} 




const Status = () => {
   
    return (
       
        <Button style={buttonStyle} >
            <h2>Status</h2>
            <Statusbar />
        </Button>
        
    )
}


export default Status;