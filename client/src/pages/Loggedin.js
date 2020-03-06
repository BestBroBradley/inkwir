import React from "react";
import {Grid, Container} from "semantic-ui-react";
import TakeSurvey2 from "../components/2TakeSurveyBtn";
import Taken from "../components/Taken";
import Status from "../components/Status";
import Created from "../components/Created";

function Loggedin() {
    return (
        <Container >
            <Grid class="bigBox">
            <Grid.Row columns={2}>
                    <Grid.Column>
                        <TakeSurvey2 />
                    </Grid.Column>
                    <Grid.Column>
                        <Taken />
                    </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                    <Grid.Column>
                        <Status />
                    </Grid.Column>
                    <Grid.Column>
                        <Created />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
          
        </Container>
    );
}


export default Loggedin;

