import React from "react";
// import  { Chart } from "react-google-charts";
import BarChart from "../components/BarChart";
import { Grid, Segment } from "semantic-ui-react";
import SingleSurvey from "../components/SingleSurvey";

function Results() {
  return (
    <Grid columns={2} divided>
     <Grid.Row stretched>
        <Grid.Column>
          <Segment>
<<<<<<< HEAD
          <BarChart />
=======
          <SingleSurvey />
          </Segment>
          <Segment>
          <SingleSurvey />
>>>>>>> 13a6ebd8258ffc4c1aad7eb93e48a4a792968465
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
          <SingleSurvey />
          </Segment>
          <Segment>
          <SingleSurvey />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
          <TakeSurvey />
          </Segment>
          <Segment>
          <TakeSurvey />
          </Segment>
          <Segment>
          <SingleSurvey />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
          
          
  );
}

export default Results;