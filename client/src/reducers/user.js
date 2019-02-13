export default function usersReducer(state = {
  loading: false,
  userInfo: [
    {
      savings_target: 0,
      age: 0,
      last_pay_date: '',
      pay_frequency: '',
      on_track_for_retirement: false,
      name: '',
      goal_retirement_age: 0,
      net_worth: 0,
      isEditing: false
    }
  ],
  totalIncome: 0,
  totalExpense: 0
}, action) {
  switch (action.type) {
    case "LOADING_USER":
      return {loading: true, userInfo: state.userInfo}
    case "GET_USER":
      return {loading: false, userInfo: action.payload}
    case "LOADING_USER_EXPENSE":
      return {loading: true, userInfo: state.userInfo}
    case "UPDATE_USER_EXPENSE":
    let totalExpense
    if(action.payload.length > 1) {
        totalExpense = action.payload.reduce((a, b) => ({amount: a.amount + b.amount})).amount
    } else if(action.payload.length === 1) {
      totalExpense = action.payload[0].amount
    } else {
      totalExpense = 0
    }
      return {loading: true, userInfo: state.userInfo, totalExpense: totalExpense}
    case "SENDING_USER":
     return {loading: true, userInfo: state.userInfo}
     case "SENT_USER":
     return {loading: false, userInfo: [...state.userInfo, action.payload]}
     case "DELETING_USER":
    return {loading: true, userInfo: state.userInfo}
    case "DELETED_USER":
    return {loading: false, userInfo: state.userInfo.filter(userInfo => userInfo.id !== action.payload)}
    case "EDITING_USER":
    return {loading: false, userInfo: {...state.userInfo, isEditing:!state.userInfo.isEditing} }
    case 'UPDATED_USER':
    return {loading: false, userInfo:
           {...state.userInfo,
           name: action.payload.name,
           savings_target: action.payload.savings_target,
           pay_frequency: action.payload.pay_frequency,
           goal_retirement_age: action.payload.goal_retirement_age,
           net_worth: action.payload.net_worth,
           isEditing: !state.userInfo.isEditing}
    }
    default:
      return state;
  }
};
