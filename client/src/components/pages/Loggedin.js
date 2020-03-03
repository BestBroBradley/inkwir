import React from "react";
import {Grid, Container} from "semantic-ui-react";
import TakeSurvey from "../../components/TakeSurveybtn";
import Taken from "../../components/Taken";
import Status from "../../components/Status";
import Created from "../../components/Created";

function Loggedin() {
    return (
        <Container>
            <Grid>
            <Grid.Row columns={2}>
                    <Grid.Column>
                        <TakeSurvey />
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

