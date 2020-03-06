import React from "react";
// import  { Chart } from "react-google-charts";
import BarChart from "../components/BarChart";
import { Grid, Segment } from "semantic-ui-react";
import SingleSurvey from "../components/SingleSurvey";

function Results() {
  return (
    <Grid columns={3} divided>
     <Grid.Row stretched>
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
          <SingleSurvey />
          </Segment>
          <Segment>
          <SingleSurvey />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
          <BarChart />
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