import React, { Component } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import UserContainer from './containers/UserContainer';
import IncomesContainer from './containers/IncomesContainer';
import ExpensesContainer from './containers/ExpensesContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {


  render() {
    return (
        <Router>
        <React.Fragment>
          <Header />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/user" component={UserContainer} />
          <Route exact path="/incomes" component={IncomesContainer} />
          <Route exact path="/expenses" component={ExpensesContainer} />
        </React.Fragment>
        </Router>
    );
  }
}

export default App;
