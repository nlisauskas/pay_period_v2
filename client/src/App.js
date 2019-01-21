import React, { Component } from 'react';
import { connect } from 'react-redux';
import IncomesContainer from './components/incomes/IncomesContainer'
import ExpensesContainer from './components/expenses/ExpensesContainer'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Header}/>
          <Route path="/" exact component={Home}/>
          <Route path="/income" component={IncomesContainer}/>
          <Route path="/expenses" component={ExpensesContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;
