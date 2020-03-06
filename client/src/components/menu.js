import React, { useContext, userState } from 'react'
import '../styles/index.css';
import {
  Container,
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react'
import UserContext from "../utils/UserContext"


const Header = () => {


  const { userState, logout } = useContext(UserContext)

  console.log(userState.loggedIn)

  return (
  <div>
    <Menu fixed='top' inverted  id="menuBar">
      <Container>
        <Menu.Item as='a' header>
          <Image size='logo' src='logo-inkwir.png' href= "/" style={{ marginRight: '1.5em' }} />
        </Menu.Item>
        <Dropdown item simple text='. . .'>
          <Dropdown.Menu>
            { userState.loggedIn ? 
            (<><Dropdown.Item href="/update">Update Account</Dropdown.Item>
            <Dropdown.Item onClick={logout}>Sign Out</Dropdown.Item></>) :
            (<><Dropdown.Item href="/account">Create an Account</Dropdown.Item>
            <Dropdown.Item href="/signup">Sign In</Dropdown.Item></>) }
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  </div>
)}

export default Header