import React from "react";
import CreateSurvey from "../components/CreateSurveyCard";
import { Container, Grid} from "semantic-ui-react";

function Create() {
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <CreateSurvey />
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default Create;