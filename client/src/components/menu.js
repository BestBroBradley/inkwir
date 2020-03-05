import React, { useContext } from 'react'
import '../styles/index.css';
import {
  Container,
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react'
import UserContext from "../utils/UserContext"


const Header = () => {

  const { logout } = useContext(UserContext)

  return (
  <div>
    <Menu fixed='top' inverted  id="menuBar">
      <Container>
        <Menu.Item as='a' header>
          <Image size='logo' src='logo-inkwir.png' href= "/" style={{ marginRight: '1.5em' }} />
        </Menu.Item>
        <Dropdown item simple text='. . .'>
          <Dropdown.Menu>
            <Dropdown.Item href="/Update">Update Account</Dropdown.Item>
            <Dropdown.Item onClick={logout}>Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  </div>
)}

export default Header