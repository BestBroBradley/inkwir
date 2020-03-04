import React from 'react'
import {
  Container,
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react'


const menu = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='logo' src='logo-inkwir.png' style={{ marginRight: '1.5em' }} />
        
        </Menu.Item>
        

        <Dropdown item simple text='. . .'>
          <Dropdown.Menu>
            <Dropdown.Item>Update Account</Dropdown.Item>
            <Dropdown.Item>Sign Out</Dropdown.Item>
            
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  </div>
)

export default menu