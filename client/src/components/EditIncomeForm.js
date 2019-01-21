import React, { Component } from 'react';
class EditIncomeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.income.id,
            description: this.props.income.description,
            amount: this.props.income.amount
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
        this.props.editIncome(id, description, amount);
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
            <button>Update Income</button>
        </form>
        )
    }
}
export default EditIncomeForm;
