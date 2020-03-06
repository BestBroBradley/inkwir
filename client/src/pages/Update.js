import React from "react";
import { Form, Card, Grid, Container } from 'semantic-ui-react';
import UpdateAcct  from "../components/UpdateAcct";


function Update() {
  return (
    <Container>
        
    <Grid>
      <Grid.Row>
          <Form>
        <UpdateAcct />
        </Form>
      </Grid.Row>
    </Grid>
  </Container>    
  );
}

export default Update;