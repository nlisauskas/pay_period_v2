export default function incomesReducer(state = {
  loading: false,
  incomeInfo: [
    {
      description: '',
      amount: 0,
      category: '',
      user_id: 1,
      isEditing: false
    }
  ],
  totalIncome: 0,
}, action) {
  switch (action.type) {
    case "LOADING_INCOMES":
      return {loading: true, incomeInfo: state.incomeInfo, totalIncome: state.totalIncome}
    case "GET_INCOMES":
      let totalIncome
      if(action.payload.length > 1) {
        totalIncome = action.payload.reduce((a, b) => ({amount: a.amount + b.amount})).amount
      } else if(action.payload.length === 1) {
        totalIncome = action.payload[0].amount
      } else {
        totalIncome = 0
      }
      console.log({loading: false, incomeInfo: action.payload, totalIncome: totalIncome})
      return {loading: false, incomeInfo: action.payload, totalIncome: totalIncome}
      case "SENDING_INCOME":
     return {loading: true, incomeInfo: state.incomeInfo, totalIncome: state.totalIncome}
     case "SENT_INCOME":
     return {loading: false, incomeInfo: [...state.incomeInfo, action.payload], totalIncome: state.totalIncome + action.payload.amount}
     case "EDITING_INCOME":
     return {loading: false, incomeInfo: state.incomeInfo.map((income) => income.id === action.payload ? {...income, isEditing:!income.isEditing}:income),
              totalIncome: state.totalIncome}
    case 'UPDATED_INCOME':
    return {loading: false, incomeInfo: state.incomeInfo.map((income)=>{
      if(income.id === action.payload.id) {
        return {
           ...income,
           description:action.payload.description,
           amount:action.payload.amount,
           isEditing: !income.isEditing
        }
      } else return income;
    }),
             totalIncome: state.totalIncome - state.incomeInfo.find(incomes => incomes.id === action.payload.id).amount + action.payload.amount}
     case "DELETING_INCOME":
    return {loading: true, incomeInfo: state.incomeInfo, totalIncome: state.totalIncome}
    case "DELETED_INCOME":
    return {loading: false, incomeInfo: state.incomeInfo.filter(incomeInfo => incomeInfo.id !== action.payload), totalIncome: state.totalIncome - state.incomeInfo.find(incomes => incomes.id === action.payload).amount}
    default:
      return state;
  }
};
