import React from "react";

import LoginButton from "../LoginButton";
import TakeSurvey from "../TakeSurveybtn";
import {Grid, Container} from "semantic-ui-react";



function Homepage() {
    return (
        <Container>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <LoginButton />
                    </Grid.Column>
                    <Grid.Column>
                        <TakeSurvey />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
          
        </Container>
    );
}

export default Homepage;