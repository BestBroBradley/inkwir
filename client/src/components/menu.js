import React, { useContext, userState } from 'react'
import '../styles/index.css';
import {
  Container,
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react'
import UserContext from "../utils/UserContext"

function Header(props) {
  const loggedIn = props.isLoggedIn;
  if (loggedIn) {
      return <AuthHeader />;
  }
  return <NoAuthHeader />
}

const AuthHeader = () => {
  const { logout } = useContext(UserContext);
  
  return (
    <div>
      <Menu fixed="top" inverted id="menuBar">
        <Container>
          <Menu.Item as="a" header>
            <Image size="logo" src="logo-inkwir.png" href="/" style={{ marginRight: "1.5em "}} />
          </Menu.Item>
          <Dropdown item simple text=". . .">
            <Dropdown.Menu>
              <Dropdown.Item href="/Update">Update Account</Dropdown.Item>
              <Dropdown.Item onClick={logout}>Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    </div>
  )
}

const NoAuthHeader = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div>
      <Menu fixed="top" inverted id="menuBar">
        <Container>
          <Menu.Item as="a" header>
            <Image size="logo" src="logo-inkwir.png" href="/" style={{ marginRight: "1.5em" }} />
          </Menu.Item>
          <Dropdown item simple text=". . .">
            <Dropdown.Menu>
              <Dropdown.Item href="/Update">Update Account</Dropdown.Item>
              <Dropdown.Item onClick={isLoggedIn}>Sign In</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    </div>
  )
}







// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }
  
//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }
  
//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }
  
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
    
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick}>Sign Out</LogoutButton>;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick}>Sign In</LoginButton>;
//     }
    
//     return (
//       <div>
//       <Menu fixed='top' inverted  id="menuBar">
//         <Container>
//           <Menu.Item as='a' header>
//             <Image size='logo' src='logo-inkwir.png' href= "/" style={{ marginRight: '1.5em' }} />
//           </Menu.Item>
//           <Dropdown item simple text='. . .'>
//             <Dropdown.Menu>
//               <Dropdown.Item href="/Update">Update Account</Dropdown.Item>
//               <Dropdown.Item isLoggedIn={isLoggedIn} />
//               {button}
//             </Dropdown.Menu>
//           </Dropdown>
//         </Container>
//       </Menu>
//     </div>
//     )
//   }
// }

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Sign In
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Sign Out
//     </button>
//   );
// }

export default Header