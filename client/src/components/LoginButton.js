import React from "react";
import { Button } from 'semantic-ui-react'

const buttonStyle = {
    
    height: 400,
    width: 400,
    opacity: "50%",
    Color: "#fd463c"

} 




const LoginButton = () => {
   
    return (
       
        <Button style={buttonStyle} >
        <h2>Login/Create Account</h2>
        </Button>
        
    )
}


export default LoginButton;