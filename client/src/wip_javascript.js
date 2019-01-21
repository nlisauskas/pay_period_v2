const today = new Date();
const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
const fifteenth = new Date(today.getFullYear(), today.getMonth(), 15);

function payDate() {
  if (today < fifteenth) {
return fifteenth.toDateString();
  } else {
return lastDayOfMonth.toDateString();
  }
}

function payDateGetDate() {
  if (today < fifteenth) {
return fifteenth.getDate();
  } else {
return lastDayOfMonth.getDate();
  }
}

const daysRemaining = payDateGetDate() - today.getDate();

function totalIncome(){if(this.state.incomes) {
    this.state.incomes.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.amount;},0);
    } else {
      return 0;
        };}

const remainingBudget = (this.state.totalIncome - this.state.totalExpense);
