import React from "react";

const Expense = props => (
  <div>
    <p>{props.description}: {props.amount}</p>
    <button onClick={() => props.deleteExpense(props.id)}>Delete Expense</button>
  </div>
);

export default Expense;
