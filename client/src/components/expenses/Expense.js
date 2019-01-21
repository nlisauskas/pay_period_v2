import React from 'react'

const Expense = props => {
  return (
    <div>
      <span>{props.expense.expenseName}</span> <span>Amount: {props.expense.expenseAmount}</span> <button onClick={() => props.delete(props.expense.id)}>DELETE</button>
    </div>
  )
}

export default Expense;
