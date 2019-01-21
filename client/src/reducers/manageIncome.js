export default function manageIncome(state = {
  incomes: [],
  totalIncome: 0
}, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_INCOME':

      const income = {
        id: Math.random()*10000000000000000,
        incomeSource: action.payload.incomeSource,
        incomeAmount: action.payload.incomeAmount
      }
      console.log({ incomes: state.incomes.concat(income) });

      return { incomes: state.incomes.concat(income), totalIncome: state.totalIncome += parseInt(income.incomeAmount)};

      case 'DELETE_INCOME':

      let incomes = state.incomes.filter(income => income.id !== action.payload);

      let total = 0;

      for (var i = 0; i < incomes.length; i++) {
      total += parseInt(incomes[i].incomeAmount)
    }

      return {incomes: incomes,
        totalIncome: total }

    default:
      return state;
  }
}
