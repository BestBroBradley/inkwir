import React from "react";
import {Grid, Container} from "semantic-ui-react";
import TakeSurvey2 from "../components/2TakeSurveyBtn";
import SearchCategories from "../components/SearchCategories";
import Status from "../components/Status";


function Loggedin() {
    return (
        <Container >
        <Grid>
        <Grid.Row columns={1}>
                <Grid.Column>
                    <h2 id="welcome" >Welcome back to <img src={"/logo-inkwir-lg.png"} />!</h2>
                    
                </Grid.Column>
        </Grid.Row>   
            <Grid.Row columns={2} >
                <Grid.Column >
                    <TakeSurvey2 />
                </Grid.Column>
                <Grid.Column >
                    <Status />
                </Grid.Column>
            </Grid.Row>
        </Grid>
      
    </Container>
    );
}


export default Loggedin;

