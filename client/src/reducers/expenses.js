export default function expensesReducer(state = {
  loading: false,
  expenseInfo: [
    {
      description: '',
      amount: 0,
      category: '',
      user_id: 1
    }
  ],
  totalExpense: 0
}, action) {
  switch (action.type) {
    case "LOADING_EXPENSES":
      return {loading: true, expenseInfo: state.expenseInfo, totalExpense: state.totalExpense}
    case "GET_EXPENSES":
      let totalExpense
        if(action.payload.length > 1) {
          totalExpense = action.payload.reduce((a, b) => ({amount: a.amount + b.amount})).amount
        } else if(action.payload.length === 1) {
          totalExpense = action.payload[0].amount
        } else {
          totalExpense = 0
        }
      console.log({loading: false, expenseInfo: action.payload, totalExpense: totalExpense})
      return {loading: false, expenseInfo: action.payload, totalExpense: totalExpense}
      case "SENDING_EXPENSE":
     return {loading: true, expenseInfo: state.expenseInfo, totalExpense: state.totalExpense}
     case "SENT_EXPENSE":
     return {loading: false, expenseInfo: [...state.expenseInfo, action.payload], totalExpense: state.totalExpense + action.payload.amount}
     case "DELETING_EXPENSE":
    return {loading: true, expenseInfo: state.expenseInfo, totalExpense: state.totalExpense}
    case "DELETED_EXPENSE":
    return {loading: false, expenseInfo: state.expenseInfo.filter(expenseInfo => expenseInfo.id !== action.payload), totalExpense: state.totalExpense - state.expenseInfo.find(expenses => expenses.id === action.payload).amount}
    default:
      return state;
  }
};
