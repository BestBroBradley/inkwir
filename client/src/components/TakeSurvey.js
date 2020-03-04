import React, {Component} from 'react';
import { Input, Form, Radio, Button } from 'semantic-ui-react';


export default class TakeSurvey extends Component {
    state = {};
    handleChange = (e, { value }) => this.setState({ value })
  
render() {

     return (
       <div>
        <Form>
          <h3>Title:{}</h3>
          <h5>Category:{}  Author:{} </h5>
      
         <Input transparent placeholder='Question' /> 
           <br/>
           <br/>
         <Form.Field>
          <Radio
            label='answer 1'
            name='radioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='answer 2'
            name='radioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='answer 3'
            name='radioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='answer 4'
            name='radioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
      <Button color='pink'>Next question!</Button>
      <Button color='pink'>Submit your survey!</Button>
    </div>
  )
 }
}
