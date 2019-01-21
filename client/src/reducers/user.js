export default function usersReducer(state = {
  loading: false,
  userInfo: [
    {
      savings_target: 0,
      age: 0,
      pay_frequency: '',
      total_income: 0,
      total_expense: 0,
      days_until_next_paydate: 0,
      remaining_budget: 0,
      on_track_for_retirement: false,
      name: '',
      goal_retirement_age: 0,
      net_worth: 0
    }
  ]
}, action) {
  switch (action.type) {
    case "LOADING_USER":
      return {loading: true, userInfo: state.userInfo}
    case "GET_USER":
      console.log({loading: false, userInfo: action.payload})
      debugger
      return {loading: false, userInfo: action.payload}
      case "SENDING_USER":
     return {loading: true, userInfo: state.userInfo}
     case "SENT_USER":
     return {loading: false, userInfo: [...state.userInfo, action.payload]}
     case "DELETING_USER":
    return {loading: true, userInfo: state.userInfo}
    case "DELETED_USER":
    return {loading: false, userInfo: state.userInfo.filter(userInfo => userInfo.id !== action.payload)}
    default:
      return state;
  }
};
