import React, { Component, useState, useEffect } from 'react';
import './styles/App.css';
import './styles/footer.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from "./pages/Account";
import NewAccount from "./pages/NewAccount";
import Create from "./pages/Create";
import Homepage from "./pages/Homepage";
import Loggedin from "./pages/Loggedin";
import Results from "./pages/Results";
import Survey from "./pages/Survey";
import Update from "./pages/Update";
import Background from "./styles/images/background_image.jpg";
import NavTabs from "./components/Navtabs";
import Footer from './components/footer';
import Menu from './components/menu';
import UserContext from './utils/UserContext';
import API from './utils/API'

var sectionStyle = {
  marginTop: -20,
  width: "100%",
  height: "5000px",
  backgroundImage: `url("${Background}")`,
  backgroundRepeat: "repeat",
  backgroundAttachment: 'fixed',
  backgroundRepeat: "repeat-x",
  
};

class Section extends Component {
  render() {
    return (
      <section style={sectionStyle}>
        {this.props.children}
      </section>
    );
  }
}

function App() {

  const [userState, setUserState] = useState({
    email: "",
    username: "",
    password: "",
    surveysMade: [],
    surveysTaken: [],
    age: 0,
    nationality: "",
    gender: "",
    results: [],
    loggedIn: false,
    user: null,
    failureMessage: null
  })

  const [currentUser, updateCurrentUser] = useState({
    currentuser: "",
  })

  const { email, username, password, age, nationality, gender, loggedIn } = userState

  useEffect(() => {
    // console.log(userState);
    isLoggedIn();
  }, [])

  const handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    setUserState({
      ...userState,
      [name]: value
    });
  };

  const handleLogin = (un, pw) => {
    if (un && pw) {
      API.login({
        username: un,
        password: pw
      }).then(user => {
        if (user.data.loggedIn) {
          setUserState({
            ...userState,
            loggedIn: true,
            user: user.data.user
          });
          console.log("log in successful");
          window.location.href = '/profile';
        } else {
          console.log("Something went wrong :(")
          console.log(user);
        }
      });
    }
  }

  const handleSignup = event => {
    event.preventDefault();
    console.log(`Received ${userState}`)
    if (username && password) {
      API.signup({
        email: email,
        username: username,
        password: password,
        age: age,
        nationality: nationality,
        gender: gender
      }).then(user => {
        if (user.data.loggedIn) {
          setUserState({
            ...userState,
            loggedIn: false,
            user: user.data.user
          });
          console.log("log in successful");
          window.location.href = '/profile';
        } else {
          console.log("something went wrong :(")
          console.log(user.data);
          setUserState({
            ...userState,
            failureMessage: user.data
          })
        }
      }
      )
    }
  }

  const isLoggedIn = () => {
    if (!loggedIn) {
      API.isLoggedIn().then(user => {
        if (user.data.loggedIn) {
          setUserState({
            ...userState,
            loggedIn: true,
            user: user.data.user
          })
          console.log(user)
          updateCurrentUser({
            currentuser: user.data.user
          });
        } else {
          console.log(user.data.message);
        }
      })
    }
  }

  const logout = () => {
    if (loggedIn) {
      API.logout().then(() => {
        console.log("logged out successfully");
        setUserState({
          ...userState,
          loggedIn: false,
          user: null
        })
      })
    }
  }
  
  return (
    <Router>
      <Section>
        <UserContext.Provider value={{ currentUser, userState, logout, isLoggedIn, handleSignup, handleLogin, handleInputChange }}>
          <Menu />
          <NavTabs />
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/account">
            <Account /> */}
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/NewAccount">
            <NewAccount />
          </Route>
          <Route exact path="/loggedin">
            <Loggedin />
          </Route>
          <Route exact path="/results">
            <Results />
          </Route>
          <Route exact path="/survey">
            <Survey />
          </Route>
         <Route exact path="/update">
            <Update />
          </Route>
          <Footer />
        </UserContext.Provider>
      </Section>
    </Router>
  )
}; 

export default App;