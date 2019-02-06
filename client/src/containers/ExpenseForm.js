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
          <Form horizontal onSubmit={this.handleSubmit}>
      <FormGroup controlId="formHorizontalDescription">
        <Col componentClass={ControlLabel} sm={2}>
          Description
        </Col>
        <Col sm={10}>
          <FormControl type="text" placeholder="Description" name="description" onChange={this.handleChange}/>
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalAmount">
        <Col componentClass={ControlLabel} sm={2}>
          Amount
        </Col>
        <Col sm={10}>
          <FormControl type="integer" placeholder="Amount" name="amount" onChange={this.handleChange}/>
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalCategory">
        <Col componentClass={ControlLabel} sm={2}>
          Category
        </Col>
        <Col sm={10}>
          <FormControl type="text" placeholder="Category" name="category" onChange={this.handleChange}/>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">Add Expense</Button>
        </Col>
      </FormGroup>
    </Form>

</div>
    )
  }
}

function mapStateToProps(state) {
  return {expenses: state.expenses.expenseInfo}
}

export default connect(mapStateToProps, { addExpense })(ExpenseForm)
