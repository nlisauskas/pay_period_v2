import React from 'react';
import UserContainer from '../containers/UserContainer';
import IncomesContainer from '../containers/IncomesContainer';
import ExpensesContainer from '../containers/ExpensesContainer';

const Dashboard = () => {
  return (
    <div>
      <UserContainer />
      <IncomesContainer />
      <ExpensesContainer />
    </div>
  )
}

export default Dashboard
