import React from "react";
import { Form, Card } from 'semantic-ui-react';
import UpdateAcct  from "../components/UpdateAcct";


function Update() {
  return (
    <div style={{ marginLeft: 400}}>
      <Card>
        <Form>
          <UpdateAcct />
        </Form>
      </Card>
    </div>
  );
}

export default Update;