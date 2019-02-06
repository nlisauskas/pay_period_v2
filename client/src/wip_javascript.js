

function payDateGetDate() {
  if (today < fifteenth) {
return fifteenth.getDate();
  } else {
return lastDayOfMonth.getDate();
  }
}

const daysRemaining = payDateGetDate() - today.getDate();
