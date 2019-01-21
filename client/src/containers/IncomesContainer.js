import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIncomes, addIncome, deleteIncome } from '../actions/index'
import Income from '../components/Income';
import IncomeForm from './IncomeForm';
import EditIncomeForm from '../components/EditIncomeForm';

class IncomesContainer extends Component {

    componentDidMount() {
      this.props.getIncomes();
    }

    renderIncomes = () => this.props.incomes.incomeInfo.map((income, id) => <Income key={income.id} id={income.id} description={income.description} amount={income.amount} deleteIncome={this.props.deleteIncome} />)

    render() {
      console.log(this.props.incomes.incomeInfo)
      if(this.props.incomes.incomeInfo === null) {
        return(
          <div>
            <p>Still loading...</p>
          </div>
        );
      } else {
        return(
          <div>
            {this.renderIncomes()}
            <IncomeForm />
          </div>
        );
      }
    }
  };

const mapStateToProps = (state) => {
  return { incomes: state.incomes }
}

const mapDispatchToProps = (dispatch) => {
  return { getIncomes: () => dispatch(getIncomes()),
           addIncome: formData => dispatch(addIncome(formData)),
           deleteIncome: id => dispatch(deleteIncome(id))
         }
       };

export default connect(mapStateToProps, mapDispatchToProps)(IncomesContainer);
