import React from 'react'
import CreateIncome from './incomes/CreateIncome'
import IncomesContainer from './incomes/IncomesContainer'
import CreateExpense from './expenses/CreateExpense'
import ExpensesContainer from './expenses/ExpensesContainer'
import StatusContainer from './status/StatusContainer'

class Home extends React.Component {
  render() {
    return (
      <div className="App">
      <StatusContainer />
      <CreateIncome />
      <IncomesContainer />
      <CreateExpense />
      <ExpensesContainer />
      </div>
    )
  }
}

export default Home
