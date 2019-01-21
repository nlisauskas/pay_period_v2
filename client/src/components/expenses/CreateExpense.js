import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateExpense extends Component {

  constructor() {
    super();
    this.state = {
      expenseName: '',
      expenseAmount: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addExpense(this.state)
    this.setState({
      expenseName: '',
      expenseAmount: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add Expense</label><br></br>
            <label>Expense Description: </label><input
          type="text"
          onChange={this.handleChange} name="expenseName" value={ this.state.expenseName}/>
          <label> Expense Amount: </label><input
        type="text"
        onChange={this.handleChange} name="expenseAmount" value={ this.state.expenseAmount}/>
          </p>
          <input type="submit" />
       </form>
     </div>
   );
  }
};

const mapDispatchToProps = dispatch => ({
  addExpense: formData => dispatch({ type: 'ADD_EXPENSE', payload: formData })
})

export default connect(null, mapDispatchToProps)(CreateExpense);
