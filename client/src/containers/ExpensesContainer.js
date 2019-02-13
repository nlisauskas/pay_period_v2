import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExpenses, addExpense, deleteExpense, editExpense, updateExpense } from '../actions/index'
import Expense from '../components/Expense';
import EditExpense from '../components/EditExpense';
import ExpenseForm from './ExpenseForm';

class ExpensesContainer extends Component {

    componentDidMount() {
      this.props.getExpenses();
    }

    renderExpenses = () => this.props.expenses.expenseInfo.map((expense, id) =>
        (
          <div key={expense.id}>
                {expense.isEditing ? <EditExpense key={expense.id} expense={expense} /> :
                <Expense key={expense.id} id={expense.id} description={expense.description} amount={expense.amount} deleteExpense={this.props.deleteExpense} editExpense={this.props.editExpense} />}
          </div>
        ));

    render() {
      console.log(this.props.expenses.expenseInfo)
      if(this.props.expenses.expenseInfo === null) {
        return(
          <div>
            <p>Still loading...</p>
          </div>
        )
      } else {
        return(
          <div>
            <h2>Sources of Expense</h2>
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
           deleteExpense: id => dispatch(deleteExpense(id)),
           editExpense: id => dispatch(editExpense(id))
         }
       };

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesContainer);
