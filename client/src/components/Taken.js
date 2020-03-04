import React from "react";
import { Button } from 'semantic-ui-react'

const divStyle = {
    background: "rgb(5, 15, 30)",
    height: 400,
    width: 400,
    opacity: "90%",
    color: "#ef291f"

} 




const Taken = () => {
   
    return (
       
        <Button style={divStyle} >
        <h2>Surveys Taken</h2>
        </Button>
        
    )
}


export default Taken;