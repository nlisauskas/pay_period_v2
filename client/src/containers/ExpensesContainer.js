import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExpenses, addExpense, deleteExpense } from '../actions/index'
import Expense from '../components/Expense';
import ExpenseForm from './ExpenseForm';
import EditExpenseForm from '../components/EditExpenseForm';

class ExpensesContainer extends Component {

    componentDidMount() {
      this.props.getExpenses();
    }

    renderExpenses = () => this.props.expenses.expenseInfo.map((expense, id) => <Expense key={expense.id} id={expense.id} description={expense.description} amount={expense.amount} deleteExpense={this.props.deleteExpense} />)

    render() {
      console.log(this.props.expenses.expenseInfo)
      if(this.props.expenses.expenseInfo === null) {
        return(
          <div>
            <p>Still loading...</p>
          </div>
        );
      } else {
        return(
          <div>
            {this.renderExpenses()}
            <ExpenseForm />
          </div>
        );
      }
    }
  };

const mapStateToProps = (state) => {
  return { expenses: state.expenses }
}

const mapDispatchToProps = (dispatch) => {
  return { getExpenses: () => dispatch(getExpenses()),
           addExpense: formData => dispatch(addExpense(formData)),
           deleteExpense: id => dispatch(deleteExpense(id))
         }
       };

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesContainer);
