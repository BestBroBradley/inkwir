import React, { Component } from 'react';
import './components/utils/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from "./components/pages/Account";
import Create from "./components/pages/Create";
import Homepage from "./components/pages/Homepage";
import Loggedin from "./components/pages/Loggedin";
import Results from "./components/pages/Results";
import Survey from "./components/pages/Survey";
import Update from "./components/pages/Update";
import Background from "./components/background_image.jpg";
import NavTabs from "./components/Navtabs";
import Footer from './components/footer';
import Menu from './components/menu';

var sectionStyle = {
    marginTop: -20,
    width: "100%",
    height: "1000px",
    backgroundImage: `url("${Background}")`
};



class Section extends Component {
    render(){
        return (
            <section style={sectionStyle}>
                {this.props.children}
            </section>
        );
    }
}

function App() {
        return (
          <Router>
            <Section>
            <Menu />
              <NavTabs />
              <Route exact path="/" component={Homepage} />
              <Route exact path="/account" component={Account} />
              <Route exact path="/create" component={Create} />
              <Route exact path="/loggedin" component={Loggedin} />
              <Route exact path="/results" component={Results} />
              <Route exact path="/survey" component={Survey} />
              <Route exact path="/update" component={Update} />
              <Footer />
            </Section>
          </Router>
        );
      };
    
      
export default App;
