import React from "react";
import  LogIn  from "../components/LogIn";
import CreateAcct  from "../components/CreateAcct";

import { Grid, Container } from "semantic-ui-react";

function Account() {
  return (
    <Container>
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column >
          <LogIn  />
        </Grid.Column>
        <Grid.Column >
          <CreateAcct />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Container>      


     
  );
}

export default Account;