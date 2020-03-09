import React, { useContext, useEffect } from "react";
import { Button, Card, Progress } from 'semantic-ui-react'
import UserContext from "../utils/UserContext"
import { Link } from "react-router-dom"

const buttonStyle = {
    background: "rgb(5, 15, 30)",
    height: 400,
    width: 400,
    opacity: "90%",
    color: "#ef291f",
    borderRadius: "10px"



} 

const Status = () => {
   
    const { userState } = useContext(UserContext)

    console.log(userState.surveysTaken.length)

    return (
        <Button style={buttonStyle} to= "/create" >
           
                  <Link><h3>Create your own survey!</h3></Link>   
        </Button>
    )
};


export default Status;