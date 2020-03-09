import React from "react";
import { Button, Dropdown, Menu, Container, Input } from 'semantic-ui-react';
// import surveys from "./surveys";

const divStyle = {
  background: "rgb(5, 15, 30)",
  height: 400,
  width: 400,
  opacity: "90%",
  color: "#ef291f",
  zIndex: -1,
  // position: relative

}
export const SearchInput = (props) => {
  const options = [
  { key: 'travel', text: 'Travel', value: 'travel' },
  { key: 'food', text: 'Food', value: 'food' },
  { key: 'sports', text: 'Sports', value: 'sports' },
  { key: 'pop', text: 'Pop Culture', value: 'pop' },
  { key: 'news', text: 'News/Politics', value: 'news' },
  { key: 'internet', text: 'Internet', value: 'internet' },
  { key: 'super', text: 'Superpowers/Just for Fun', value: 'super' },
  { key: 'misc', text: 'Miscellaneous', value: 'misc' },
]

const handleChange = (event) => {
  props.handleSelect(event.target.textContent)
}

  return (  
  <Menu compact>
<Dropdown name="category" onChange={handleChange} placeholder='Categories' search selection options={options} />
  </Menu>
)}

const SearchCategories = () => {

  return (

    <Button style={divStyle} >
      <h2>Search categories for a survey:</h2>
      <div className="content" href="/LoggedIn">
        <ul id='surveyLists'>

          <Container>

            <SearchInput>

            </SearchInput>


          </Container>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <br />
        
        
        <h2>Search for a survey title</h2>
        <Input placeholder='Search...' />
      </div>
    </Button>

  )
}


export default SearchCategories;