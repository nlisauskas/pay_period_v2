import React, { Component } from 'react'
import { Form, FormGroup, Button, Col, FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux'
import { addExpense } from '../actions/index'

class ExpenseForm extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      description: '',
      amount: 0,
      category: '',
      user_id: 1
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addExpense(this.state)
    this.setState({
      description: '',
      amount: 0,
      category: '',
      user_id: 1
    });
    var form = document.getElementById("expense-form");
    form.reset();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      user_id: 1
    })
  }

  render() {
    return (
      <div className="expense-container">
      <h1 className='center'> Add a new expense! </h1>
      <form id="expense-form" onSubmit={this.handleSubmit}>
        <label>Description</label><br></br>
        <input type="text" placeholder="Description" name="description" onChange={this.handleChange}/><br></br>
        <label>Amount</label><br></br>
        <input type="integer" placeholder="Amount" name="amount" onChange={this.handleChange}/><br></br>
        <label>Category</label><br></br>
        <input type="text" placeholder="Category" name="category" onChange={this.handleChange}/><br></br>
        <button type="submit">Add Expense</button>
      </form>
</div>
    )
  }
}

function mapStateToProps(state) {
  return {expenses: state.expenses.expenseInfo}
}

export default connect(mapStateToProps, { addExpense })(ExpenseForm)
