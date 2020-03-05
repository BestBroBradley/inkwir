import React from "react";
import {Grid, Container} from "semantic-ui-react";
import TakeSurvey from "../components/TakeSurveybtn";
import Taken from "../components/Taken";
import Status from "../components/Status";
import Created from "../components/Created";

function Loggedin() {
    return (
        <Container>
            <Grid>
            <Grid.Row columns={2}>
                    <Grid.Column href="/Survey">
                        <TakeSurvey />
                    </Grid.Column>
                    <Grid.Column href="/LoggedIn">
                        <Taken />
                    </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                    <Grid.Column href="/LoggedIn">
                        <Status />
                    </Grid.Column>
                    <Grid.Column href="/LoggedIn">
                        <Created />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
          
        </Container>
    );
}


export default Loggedin;

