import React, { Component } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Accounts from "./components/pages/Accounts";
import Create from "./components/pages/Create";
import Homepage from "./components/pages/Homepage";
import Loggedin from "./components/pages/Loggedin";
import Results from "./components/pages/Results";
import Survey from "./components/pages/Survey";
import Update from "./components/pages/Update";
import Background from "./components/background_image.jpg"

var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + {Background} + ")"
};

class Section extends Component {
    render(){
        return (
            <section style={sectionStyle}>
            </section>
        );
    }
}

import './App.css';

function App() {

    function App() {
        return (
          <Router>
            <div>
              <NavTabs />
              <Route exact path="/" component={Homepage} />
              <Route exact path="/accounts" component={Accounts} />
              <Route exact path="/create" component={Create} />
              <Route exact path="/loggedin" component={Loggedin} />
              <Route exact path="/results" component={Results} />
              <Route exact path="/survey" component={Survey} />
              <Route exact path="/update" component={Update} />
            </div>
          </Router>
        );
      };
    }
      
export default App;
