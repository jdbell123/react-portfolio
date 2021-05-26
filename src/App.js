import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";

function App() {

  return (
    <Router>
      <div data-component="DivInRouter" className="main-container d-flex flex-column vh-100">
        <NavBar data-component="NavBar"/>
        <Wrapper data-component="Wrapper">
          <Switch>
            <Route exact path="/" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/about" component={About}/>
            <Route path="" component={About}/>
          </Switch>  
        </Wrapper>
        <Footer data-component="Footer"/>
      </div>
    </Router>
  );

}

export default App;