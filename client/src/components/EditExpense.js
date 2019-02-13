import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateExpense } from '../actions/index'


class EditExpense extends Component {

handleEdit = (e) => {
  e.preventDefault();
  const newDescription = this.getDescription.value;
  const newAmount = this.getAmount.value;
  const data = {
    newDescription,
    newAmount
  }
  this.props.updateExpense(this.props.expense.id, data)
}

render() {
return (
<div>
  <form onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getDescription = input}
    defaultValue={this.props.expense.description} placeholder="Enter Description" /><br /><br />
    <input required type="integer" ref={(input) => this.getAmount = input}
    defaultValue={this.props.expense.amount} placeholder="Enter Amount" /><br /><br />
    <button>Update</button>
  </form>
</div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
           updateExpense: (id, data) => dispatch(updateExpense(id, data))
         }
       };

export default connect(null, mapDispatchToProps)(EditExpense);
