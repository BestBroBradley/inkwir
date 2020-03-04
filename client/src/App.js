import React, { Component } from 'react';
import './styles/App.css';
import './styles/footer.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from "./pages/Account";
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
              {/* {/* <NavTabs /> */}
              <Route exact path="/" component={Homepage} />
              <Route exact path="/account" component={Account} />
              <Route exact path="/create" component={Create} />
              <Route exact path="/loggedin" component={Loggedin} />
              <Route exact path="/results" component={Results} />
              <Route exact path="/survey" component={Survey} />
              <Route exact path="/update" component={Update} /> */}
            </Section>
              <Footer />
          </Router>
        );
      };
    
      
export default App;
