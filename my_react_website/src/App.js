import React, {Component} from "react";
import PageWrapper from "./components/PageWrapper";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
    <PageWrapper >
      <Router>
      <Switch>
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </PageWrapper>
    );
  }
}

export default App;
