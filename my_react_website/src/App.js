import React, {Component} from "react";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from "react-redux";

// Pages
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Services from "./components/Common/Services";
import Portfolio from "./components/Common/Portfolio";
import Team from "./components/Common/Team";
import Contact from "./components/Pages/Contact";
import Login from "./components/Pages/Login";
import AdminWrapper from "./components/AdminWrapper";


class App extends Component {

  render() {
    return (
      <Router>
        <Route path="/admin" render={props => (
          <AdminWrapper>
            <Login/>
          </AdminWrapper>
        )}/>
      
        <Route exact={true} path="/" render={props => (
            <PageWrapper>
             <Home {...props} />
            </PageWrapper>)}  
        />
        <Route path="/about" render={props => (
            <PageWrapper>
             <About {...props} />
            </PageWrapper>)}  
        />
        {/* <Route path="/services" component={Services}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/team" component={Team}/> */}
        <Route path="/contact" render={props => (
            <PageWrapper>
             <Contact {...props} />
            </PageWrapper>)}  
        />
      
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (App);
