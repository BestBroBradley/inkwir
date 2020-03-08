import React from "react";
// import  { Chart } from "react-google-charts";
import BarChart from "../components/BarChart";
import { Grid, Container } from "semantic-ui-react";
import SingleSurvey from "../components/SingleSurvey";
import TakeSurvey from "../components/TakeSurvey";
import GroupResults from "../components/GroupResults";

function Results() {
    return (
        <Container>
            <Grid>
                <Grid.Row columns={1}>

                    <Grid.Column >
                        <h5 id="answers">Title:{}</h5>

                        <h5 id="fontPatrol">Category:{}</h5>

                        <h5 id="fontPatrol"> Your Username:{} </h5>


                        <BarChart />
                        <br></br>
                        <GroupResults />
                        <GroupResults />
                        <GroupResults />
                        <GroupResults />
                        <GroupResults />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>


    );
}

export default Results;