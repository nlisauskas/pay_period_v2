import React, { Component } from 'react';
class EditExpenseForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.expense.id,
            description: this.props.expense.description,
            amount: this.props.expense.amount
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const { id, description, amount } = this.state;
        this.props.editExpense(id, description, amount);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input  name="description"
                    type="text"
                    placeholder="Description..."
                    value={this.state.description}
                    onChange={this.handleChange} />
            <input  name="amount"
                    type="text"
                    placeholder="Amount..."
                    value={this.state.amount}
                    onChange={this.handleChange} />
            <button>Update Expense</button>
        </form>
        )
    }
}
export default EditExpenseForm;
