import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Menu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          name=''
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item position= 'right'
          name='Update Account'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item position= 'right'
          name='Sign Out'
          active={activeItem === 'Sign Out'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}  
export default Menu;