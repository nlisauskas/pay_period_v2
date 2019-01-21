export default function incomesReducer(state = {
  loading: false,
  incomeInfo: [
    {
      description: '',
      amount: 0,
      category: '',
      user_id: 1
    }
  ]
}, action) {
  switch (action.type) {
    case "LOADING_INCOMES":
      return {loading: true, incomeInfo: state.incomeInfo}
    case "GET_INCOMES":
      console.log({loading: false, incomeInfo: action.payload})
      return {loading: false, incomeInfo: action.payload}
      case "SENDING_INCOME":
     return {loading: true, incomeInfo: state.incomeInfo}
     case "SENT_INCOME":
     return {loading: false, incomeInfo: [...state.incomeInfo, action.payload]}
     case "DELETING_INCOME":
    return {loading: true, incomeInfo: state.incomeInfo}
    case "DELETED_INCOME":
    return {loading: false, incomeInfo: state.incomeInfo.filter(incomeInfo => incomeInfo.id !== action.payload)}
    default:
      return state;
  }
};
