import React, {Component} from 'react';
import { Input, Form, Radio } from 'semantic-ui-react';
import "../styles/index.css"


export default class SingleSurvey extends Component {
    state = {};
    handleChange = (e, { value }) => this.setState({ value })
  
render() {

     return (
       <div>
        <Form id="questions">
          <h3 id="answers">Title:{}</h3>
         
          <h5>Category:{}</h5> 
         
          <h5> Your Username:{} </h5>
      
      
         <Input transparent placeholder='Question' /> 
           <br/>
           <br/>
         <Form.Field id="answers">
          <Radio
            label='answer 1'
            name='radioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
            id="answers"
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='answer 2'
            name='radioGroup'
            value='that'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
            id="answers"
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='answer 3'
            name='radioGroup'
            value='that'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
            id="answers"
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='answer 4'
            name='radioGroup'
            value='that'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
            id="answers"
          />
        </Form.Field>
      </Form>
     
    </div>
  )
 }
}