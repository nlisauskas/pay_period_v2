import React from "react";

const Income = props => (
  <div>
    <p>{props.description}: {props.amount}</p>
    <button onClick={() => props.deleteIncome(props.id)}>Delete Income</button>
  </div>
);

export default Income;
