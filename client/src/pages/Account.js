import React from "react";
import  Menu from "../components/menu";
import  LogIn  from "../components/LogIn";
import CreateAcct  from "../components/CreateAcct";

import { Grid, Container } from "semantic-ui-react";
function Account() {
  return (
    <Container>
    <Grid>
      <Grid.Row columns={1}>
        <Grid.Column>
          <Menu />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2}>
        <Grid.Column>
          <LogIn />
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