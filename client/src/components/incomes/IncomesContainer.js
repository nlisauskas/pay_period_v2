import React, { Component } from 'react';
import { connect } from 'react-redux'
import Income from './Income'

class IncomesContainer extends Component {

  renderIncomes = () => {
  return this.props.incomes.map(income => <Income delete={this.props.delete} key={income.id} income={income} />)
}

  render() {
    return(
      <div>
        {this.renderIncomes()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    incomes: state.income.incomes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: incomeText => dispatch({type: 'DELETE_INCOME', payload: incomeText })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomesContainer);
