import React, {Component} from 'react';
import { Input, Form, Radio } from 'semantic-ui-react';
import "../styles/index.css"


export default class GroupResults extends Component {
    state = {};
    handleChange = (e, { value }) => this.setState({ value })
  
render() {

     return (
       <div id="questions">  
         <Input transparent placeholder='Question' /> 
           <br/>
           <br/>
         <Form.Field id="answers"
            label='answer 1'
            name='radioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
            class="answers"
          >
        </Form.Field>
        <br></br>
        <Form.Field
            label='answer 2'
            name='radioGroup'
            value='that'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
            id="answers"
          >
        </Form.Field>
        <br></br>
        <Form.Field
            label='answer 3'
            name='radioGroup'
            value='that'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
            id="answers"
          >
        </Form.Field>
        <br></br>
        <Form.Field
            label='answer 4'
            name='radioGroup'
            value='that'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
            
          >
        </Form.Field>
     
     
    </div>
  )
 }
}
