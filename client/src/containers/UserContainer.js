import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/index'
import User from '../components/User';

class UserContainer extends Component {

    componentDidMount() {
      this.props.getUser();
    }

    render() {
      return(
      <User name={this.props.user.name} payDate={this.props.user.next_pay_date} totalIncome={this.props.user.total_income} totalExpense={this.props.user.total_expense} daysRemaining={this.props.user.days_until_next_paydate} remainingBudget={this.props.user.remaining_budget} currentSavings={this.props.user.net_worth} savingsTarget={this.props.user.savings_target} onTrack={this.props.user.on_track_for_retirment}/>
      )
  };
};

const mapStateToProps = (state) => {
  return { user: state.user.userInfo }
}

const mapDispatchToProps = (dispatch) => {
  return { getUser: () => dispatch(getUser())}
       };

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
