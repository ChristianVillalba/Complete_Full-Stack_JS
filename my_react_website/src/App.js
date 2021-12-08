import React, {Component} from "react";
import PageWrapper from "./components/PageWrapper";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
      <PageWrapper >   
        <Route path="/" component={Home} />
        <Route path="/about" render={()=>{
          return(
            <h1>I am the about Route</h1>
          )
        } } />
        <Route path="/qwe" render={()=>{
          return(
            <h1>I am the qwe Route</h1>
          )
        } } /> 
        <Route path="/zxc" render={()=>{
          return(
            <h1>I am the zxc Route</h1>
          )
        } } />   
      </PageWrapper>
      </Router>
    );
  }
}

export default App;
