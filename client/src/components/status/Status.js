import React from 'react';

const Status = props => {

  return (
    <div>
      <div>Inflow: Your expected balance on {props.payDate} is {props.income}</div>
      <div>Outflow: Your total outflows since {props.lastPayDate} is {props.currentOutflows}</div>
      <div>You can spend {props.cashRemaining} more dollars by {props.payDate} to meet your savings target of {props.savingTarget}</div>
    </div>
  )
}

export default Status;
