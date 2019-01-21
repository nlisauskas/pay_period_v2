import React, { Component } from 'react';
import { connect } from 'react-redux'
import Expense from './Expense'

class ExpensesContainer extends Component {

  renderExpenses = () => {
  return this.props.expenses.map(expense => <Expense delete={this.props.delete} key={expense.id} expense={expense} />)
}

  render() {
    return(
      <div>
        {this.renderExpenses()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    expenses: state.expense.expenses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: expenseText => dispatch({type: 'DELETE_EXPENSE', payload: expenseText })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesContainer);
