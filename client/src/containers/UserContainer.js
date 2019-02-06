import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser, getTotalIncome, getTotalExpense } from '../actions/index'
import User from '../components/User';
import UserProfile from '../components/UserProfile';

class UserContainer extends Component {

    componentDidMount() {
      this.props.getUser();
    }

    daysRemaining() {
      console.log(Date.parse(this.props.user.next_pay_date) - Date.now())
      return (Math.round((Date.parse(this.props.user.next_pay_date) - Date.now()) / 86400000))
    }

    render() {

      const today = new Date();
      const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
      const fifteenth = new Date(today.getFullYear(), today.getMonth(), 15);

      function payDate() {
        if (today < fifteenth) {
      return fifteenth.toDateString();
        } else {
      return lastDayOfMonth.toDateString();
        }
      }

      function payDateGetDate() {
        if (today < fifteenth) {
      return fifteenth.getDate();
        } else {
      return lastDayOfMonth.getDate();
        }
      }

      const daysRemaining = payDateGetDate() - today.getDate();

      return(
        <div>
      <User name={this.props.user.name} payDate={payDate()} totalIncome={this.props.totalIncome} totalExpense={this.props.totalExpense} daysRemaining={daysRemaining} remainingBudget={this.props.totalIncome - this.props.totalExpense - this.props.user.savings_target} currentSavings={this.props.user.net_worth} savingsTarget={this.props.user.savings_target} onTrack="are"/>
        </div>
      )
  };
};

const mapStateToProps = (state) => {
  return { user: state.user.userInfo,
           totalIncome: state.incomes.totalIncome,
           totalExpense: state.expenses.totalExpense}
}

const mapDispatchToProps = (dispatch) => {
  return { getUser: () => dispatch(getUser())}
       };

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

//<UserProfile name={this.props.user.name} savings_target={this.props.user.savings_target} pay_frequency={this.props.user.pay_frequency} goal_retirement_age={this.props.user.goal_retirement_age} net_worth={this.props.user.net_worth}  />
