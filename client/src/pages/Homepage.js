import React, { userState } from "react";
import LoginButton from "../components/LoginButton";
import TakeSurvey from "../components/TakeSurveybtn";
import {Grid, Container} from "semantic-ui-react";



function Homepage(props) {
    const loggedIn = props.isLoggedIn;
    if (loggedIn) {
        return <HomepageAuth />;
    }
    return <HomepageNoAuth />
}


function HomepageAuth() {
    return (
        <Container>
            <Grid>
            <Grid.Row columns={1}>
                    <Grid.Column>
                        <h2 id="welcome" >Welcome to <img src={"/logo-inkwir-lg.png"} /> (Inquire): Survey App!</h2>
                        <h4 id="describe">The best place on the web for taking and making surveys!</h4>
                    </Grid.Column>
            </Grid.Row>   
                <Grid.Row columns={2} >
                    <Grid.Column >
                        <LoginButton />
                    </Grid.Column>
                    <Grid.Column >
                        <TakeSurvey />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
          
        </Container>
    );
}

function HomepageNoAuth() {
    return <h1>Please sign in.</h1> ;
}

export default Homepage;