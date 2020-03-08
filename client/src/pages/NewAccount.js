import React from "react";
import CreateAcct  from "../components/CreateAcct";

import { Grid, Container } from "semantic-ui-react";

function NewAccount() {
  return (
    <Container>
    <Grid>
      <Grid.Row columns={1}>
        <Grid.Column >
          <CreateAcct  />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Container>      


     
  );
}

export default NewAccount;