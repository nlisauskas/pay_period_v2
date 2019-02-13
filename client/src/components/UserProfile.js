import React from "react";

const UserProfile = props => {

  return (
  <div>
    <ul>
      <li>Name: {props.name} </li>
      <li>Savings Target: {props.savings_target} </li>
      <li>Pay Frequency: {props.pay_frequency} </li>
      <li>Goal Retirement Age: {props.goal_retirement_age} </li>
      <li>Net Worth: {props.net_worth} </li>
    </ul>
    <button onClick={() => props.editUser(props.id)}>Edit Profile Information</button>
  </div>
)
};

export default UserProfile;
