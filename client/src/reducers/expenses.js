export default function expensesReducer(state = {
  loading: false,
  expenseInfo: [
    {
      description: '',
      amount: 0,
      category: '',
      user_id: 1
    }
  ]
}, action) {
  switch (action.type) {
    case "LOADING_EXPENSES":
      return {loading: true, expenseInfo: state.expenseInfo}
    case "GET_EXPENSES":
      console.log({loading: false, expenseInfo: action.payload})
      return {loading: false, expenseInfo: action.payload}
      case "SENDING_EXPENSE":
     return {loading: true, expenseInfo: state.expenseInfo}
     case "SENT_EXPENSE":
     return {loading: false, expenseInfo: [...state.expenseInfo, action.payload]}
     case "DELETING_EXPENSE":
    return {loading: true, expenseInfo: state.expenseInfo}
    case "DELETED_EXPENSE":
    return {loading: false, expenseInfo: state.expenseInfo.filter(expenseInfo => expenseInfo.id !== action.payload)}
    default:
      return state;
  }
};
