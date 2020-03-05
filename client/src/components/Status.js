import React from "react";
import { Button, Progress } from 'semantic-ui-react'


const buttonStyle = {
    background: "rgb(5, 15, 30)",
    height: 400,
    width: 400,
    opacity: "90%",
    color: "#ef291f"

} 

const statusBarStyle = {
    padding: "20rem"
}

const progress1 = {
    background: "#ffffff"

}

const Status = () => {
   
    return (
       
        <Button style={buttonStyle} >
            <div> 
                    <h3>Survey Status</h3>
                    <h5>Complete 10 surveys to unlock the
                    ability to create your own surveys!</h5>
      
                    <Progress class='progress1' color='#ef291f'  value='3' total='10' progress='ratio' />
                    <h4 color= 'grey'>Create your own surveys!</h4> 
               
            </div>
        </Button>
        
    )
}


export default Status;