import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIncomes, addIncome, deleteIncome, editIncome, updateIncome } from '../actions/index'
import Income from '../components/Income';
import EditIncome from '../components/EditIncome';
import IncomeForm from './IncomeForm';

class IncomesContainer extends Component {

    componentDidMount() {
      this.props.getIncomes();
    }

    renderIncomes = () => this.props.incomes.incomeInfo.map((income, id) =>
        (
          <div key={income.id}>
                {income.isEditing ? <EditIncome key={income.id} income={income} /> :
                <Income key={income.id} id={income.id} description={income.description} amount={income.amount} deleteIncome={this.props.deleteIncome} editIncome={this.props.editIncome} />}
          </div>
        ));

    render() {
      console.log(this.props.incomes.incomeInfo)
      if(this.props.incomes.incomeInfo === null) {
        return(
          <div>
            <p>Still loading...</p>
          </div>
        )
      } else {
        return(
          <div>
            <h2>Sources of Income</h2>
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
           deleteIncome: id => dispatch(deleteIncome(id)),
           editIncome: id => dispatch(editIncome(id))
         }
       };

export default connect(mapStateToProps, mapDispatchToProps)(IncomesContainer);
