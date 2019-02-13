import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateIncome } from '../actions/index'


class EditIncome extends Component {

handleEdit = (e) => {
  e.preventDefault();
  const newDescription = this.getDescription.value;
  const newAmount = this.getAmount.value;
  const data = {
    newDescription,
    newAmount
  }
  this.props.updateIncome(this.props.income.id, data)
}

render() {
return (
<div>
  <form onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getDescription = input}
    defaultValue={this.props.income.description} placeholder="Enter Description" /><br /><br />
    <input required type="integer" ref={(input) => this.getAmount = input}
    defaultValue={this.props.income.amount} placeholder="Enter Amount" /><br /><br />
    <button>Update</button>
  </form>
</div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
           updateIncome: (id, data) => dispatch(updateIncome(id, data))
         }
       };

export default connect(null, mapDispatchToProps)(EditIncome);
