import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateIncome extends Component {

  constructor() {
    super();
    this.state = {
      incomeSource: '',
      incomeAmount: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addIncome(this.state)
    this.setState({
      incomeSource: '',
      incomeAmount: ''
    })
  }

  render() {
    return(
      <div>
        <h3>Income Overview</h3>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add Income Stream</label><br></br>
            Source: <input
          type="text"
          onChange={this.handleChange} name="incomeSource" value={ this.state.incomeSource}/>
          <label> Amount: </label><input
        type="text"
        onChange={this.handleChange} name="incomeAmount" value={ this.state.incomeAmount}/>
          </p>
          <input type="submit" />
       </form>
     </div>
   );
  }
};

const mapDispatchToProps = dispatch => ({
  addIncome: formData => dispatch({ type: 'ADD_INCOME', payload: formData })
})

export default connect(null, mapDispatchToProps)(CreateIncome);
