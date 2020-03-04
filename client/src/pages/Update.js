import React from "react";
import { Button, Form, Card } from 'semantic-ui-react';
import UpdateAcct  from "../components/UpdateAcct";


function Update() {
  return (
    <div>
      <Card>
        <Form>
          <UpdateAcct />
        </Form>
      </Card>
    </div>
  );
}

export default Update;