import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/index'


class EditUser extends Component {

handleEdit = (e) => {
  e.preventDefault();
  const newName = this.getName.value;
  const newSavingsTarget = this.getSavingsTarget.value;
  const newPayFrequency = this.getPayFrequency.value;
  const newGoalRetirement = this.getGoalRetirement.value;
  const newNetWorth = this.getNetWorth.value;
  const data = {
    newName,
    newSavingsTarget,
    newPayFrequency,
    newGoalRetirement,
    newNetWorth
  }
  this.props.updateUser(this.props.user.id, data)
}

render() {
return (
<div>
  <form onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getName = input}
    defaultValue={this.props.user.name} placeholder="Enter Name" /><br /><br />
    <input required type="integer" ref={(input) => this.getSavingsTarget = input}
    defaultValue={this.props.user.savings_target} placeholder="Enter Savings Target" /><br /><br />
    <select required ref={(input) => this.getPayFrequency = input} defaultValue={this.props.user.pay_frequency} placeholder="Enter Pay Frequency">
      <option value="Weekly">Weekly</option>
      <option value="Bi-Weekly">Every Two Weeks</option>
      <option value="Semi-Monthly">Semi-Monthly</option>
      <option value="First of Month">First of Month</option>
      <option value="Last of Month">Last of Month</option>
    </select><br /><br />
    <input required type="integer" ref={(input) => this.getGoalRetirement = input}
    defaultValue={this.props.user.goal_retirement_age} placeholder="Enter Goal Retirement" /><br /><br />
    <input required type="integer" ref={(input) => this.getNetWorth = input}
    defaultValue={this.props.user.net_worth} placeholder="Enter Net Worth" /><br /><br />
    <button>Update Profile</button>
  </form>
</div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
           updateUser: (id, data) => dispatch(updateUser(id, data))
         }
       };

export default connect(null, mapDispatchToProps)(EditUser);

/*

*/
