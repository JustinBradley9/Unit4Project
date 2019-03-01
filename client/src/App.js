import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
// import SingleUser from './components/Users/SingleUser';

class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/guilds" component={LandingPage} />
        <Route exact path="/guilds/:guildsId" component={Homepage}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
