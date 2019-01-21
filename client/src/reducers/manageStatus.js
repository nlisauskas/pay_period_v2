export default function manageStatus(state = {
  savingsTarget: ''
}, action) {
  console.log(action);
  switch (action.type) {
      case 'SET_SAVINGS':

      let savingsTarget = parseInt(action.payload.savingsTarget);

      return { savingsTarget: state.savingsTarget = savingsTarget};

      default:
        return state;
  }
}
