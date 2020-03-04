import React from "react";
import { Button, Placeholder } from 'semantic-ui-react';
// import surveys from "./surveys";

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
        <h2>Last 5 Surveys Taken:</h2>
        <div className="content">
        <ul id='surveyLists'>
          <li>
            <strong href="">{Placeholder}</strong> 
          </li>
          <br></br>
          <li>
            <strong href="">{Placeholder}</strong> 
          </li>
          <br></br>
          <li>
            <strong href="">{Placeholder}</strong> 
          </li>
          <br></br>
          <li>
            <strong href="">{Placeholder}</strong> 
          </li>
          <br></br>
          <li>
            <strong href="">{Placeholder}</strong> 
          </li>
          <br></br>
         </ul>
      </div>
        </Button>
        
    )
}


export default Taken;