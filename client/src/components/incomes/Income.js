import React from 'react'

const Income = props => {
  return (
    <div>
      <span>Source: {props.income.incomeSource} </span> <span>Amount: {props.income.incomeAmount}</span> <button onClick={() => props.delete(props.income.id)}>DELETE</button>
    </div>
  )
}

export default Income;
