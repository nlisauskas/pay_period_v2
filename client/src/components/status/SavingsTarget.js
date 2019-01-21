import React, { Component } from 'react';
import { connect } from 'react-redux';

class SavingsTarget extends Component {

  constructor() {
    super();
    this.state = {
      savingsTarget: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({
      savingsTarget: event.target.value
     });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.setSavings(this.state)
    this.setState({
      savingsTarget: ''
    })
  }

  render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
      <h3>What's Your Savings Target?</h3>
      <input onChange={this.handleChange} value={this.state.savingsTarget}></input>
      <button type="submit">Submit Savings Target</button>
      </form>
    </div>
  )
}
}

const mapDispatchToProps = dispatch => ({
  setSavings: formData => dispatch({ type: 'SET_SAVINGS', payload: formData })
})

export default connect(null, mapDispatchToProps)(SavingsTarget);
