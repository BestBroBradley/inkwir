import React from "react";
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"

const buttonStyle = {
    background: "rgb(5, 15, 30)",
    height: 400,
    width: 400,
    opacity: "90%",
    color: "#ef291f",
    paddingTop: "145px",
    fontColor:  "rgb(180, 58, 58)",
    fontSize: "16pt",
    borderRadius: "10px"
    
    

} 




const LoginButton = () => {
   
    return (
       
        <Button style={buttonStyle} href="/Account">
        <Link to="/Account">Login</Link>
        <h4>or</h4>
        <Link to="/NewAccount">Create Account</Link>
        </Button>
        
    )
}


export default LoginButton;