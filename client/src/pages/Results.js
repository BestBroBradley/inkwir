import React from "react";
// import  { Chart } from "react-google-charts";
import BarChart from "../components/BarChart";
import { Grid, Segment } from "semantic-ui-react";
import SingleSurvey from "../components/SingleSurvey";
import TakeSurvey from "../components/TakeSurvey";


function Results() {
  return (
    <Grid columns={2} divided>
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