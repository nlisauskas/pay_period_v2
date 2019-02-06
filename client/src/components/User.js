import React from 'react';

const User = props => (
  <div className="single-user">
    <h2>Welcome back, {props.name}!</h2>
    <p>Your total expected income on {props.payDate} is {props.totalIncome}.</p>
    <p>So far, your expenses for this pay period amount to {props.totalExpense}.</p>
    <p>Over the next {props.daysRemaining} days, you can spend {props.remainingBudget / props.daysRemaining} per day or {props.remainingBudget} in total to achieve your savings target of {props.savingsTarget}.</p>
  </div>
)

export default User;


//<p>Based on your current savings of {props.currentSavings} and your current pay period savings target of {props.savingsTarget}, you {props.onTrack} on track for your planned retirement.</p>
