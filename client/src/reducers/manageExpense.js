export default function manageExpense(state = {
  expenses: [],
  totalExpense: 0
}, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_EXPENSE':

      const expense = {
        id: Math.random()*10000000000000000,
        expenseName: action.payload.expenseName,
        expenseAmount: action.payload.expenseAmount
      }
      console.log({ expenses: state.expenses.concat(action.payload.expenseName) });

      return { expenses: state.expenses.concat(expense), totalExpense: state.totalExpense += parseInt(expense.expenseAmount) };

      case 'DELETE_EXPENSE':

      let expenses = state.expenses.filter(expense => expense.id !== action.payload);

      let total = 0;

      for (var i = 0; i < expenses.length; i++) {
      total += expenses[i].expenseAmount
    }

      return {expenses: expenses,
        totalExpense: total }

    default:
      return state;
  }
}
