export function getIncomes(user_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_INCOMES' });
    return fetch(`http://localhost:3001/api/v1/users/${user_id}/incomes`)
      .then(response => response.json())
      .then(incomes => dispatch({ type: 'GET_INCOMES', payload: incomes }));
  };
}

export function addIncome(data) {
  const url = `http://localhost:3001/api/v1/incomes`
  return(dispatch) => {
    dispatch({type: 'SENDING_INCOME'});
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    }).then(response => response.json())
    .then(income => dispatch({type: 'SENT_INCOME', payload: income}))
    .catch(err => console.log(err))
  }
}

export function editIncome(id) {
  return(dispatch) => {
    dispatch({type: 'EDITING_INCOME', payload: id});
  }
}

export function updateIncome(id, data) {
  const url = `http://localhost:3001/api/v1/incomes/${id}`
  return(dispatch) => {
    dispatch({type: 'SENDING_INCOME'});
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify({description: data.newDescription, amount: data.newAmount}),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    }).then(response => response.json())
    .then(income => dispatch({type: 'UPDATED_INCOME', payload: income}))
    .catch(err => console.log(err))
  }
}

export function deleteIncome(id) {
  const url = `http://localhost:3001/api/v1/incomes/${id}`
  return(dispatch) => {
    dispatch({type: 'DELETING_INCOME'});
    fetch(url, {
      method: 'DELETE'
      }
    )
    .then(dispatch({type: 'DELETED_INCOME', payload: id}))
    .catch(err => console.log(err))
  }
}

export function getExpenses(user_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_EXPENSES' });
    return fetch(`http://localhost:3001/api/v1/users/${user_id}/expenses`)
      .then(response => response.json())
      .then(expenses => dispatch({ type: 'GET_EXPENSES', payload: expenses }));
  };
}

export function addExpense(data) {
  const url = `http://localhost:3001/api/v1/expenses`
  return(dispatch) => {
    dispatch({type: 'SENDING_EXPENSE'});
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    }).then(response => response.json())
    .then(expense => dispatch({type: 'SENT_EXPENSE', payload: expense}))
    .catch(err => console.log(err))
  }
}

export function editExpense(id) {
  return(dispatch) => {
    dispatch({type: 'EDITING_EXPENSE', payload: id});
  }
}

export function updateExpense(id, data) {
  const url = `http://localhost:3001/api/v1/expenses/${id}`
  return(dispatch) => {
    dispatch({type: 'SENDING_EXPENSE'});
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify({description: data.newDescription, amount: data.newAmount}),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    }).then(response => response.json())
    .then(expense => dispatch({type: 'UPDATED_EXPENSE', payload: expense}))
    .catch(err => console.log(err))
  }
}

export function deleteExpense(id) {
  const url = `http://localhost:3001/api/v1/expenses/${id}`
  return(dispatch) => {
    dispatch({type: 'DELETING_EXPENSE'});
    fetch(url, {
      method: 'DELETE'
      }
    )
    .then(dispatch({type: 'DELETED_EXPENSE', payload: id}))
    .catch(err => console.log(err))
  }
}

export function getUser() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USER' });
    return fetch('http://localhost:3001/api/v1/users/1')
      .then(response => response.json())
      .then(user => dispatch({ type: 'GET_USER', payload: user }));
  };
}

export function editUser(id) {
  return(dispatch) => {
    dispatch({type: 'EDITING_USER', payload: id});
  }
}

export function updateUser(id, data) {
  const url = `http://localhost:3001/api/v1/users/${id}`
  return(dispatch) => {
    dispatch({type: 'SENDING_USER'});
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify({
        name: data.newName,
        savings_target: data.newSavingsTarget,
        pay_frequency: data.newPayFrequency,
        goal_retirement_age: data.newGoalRetirement,
        net_worth: data.newNetWorth
        }),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    }).then(response => response.json())
    .then(user => dispatch({type: 'UPDATED_USER', payload: user}))
    .catch(err => console.log(err))
  }
}

export function getTotalIncome(user_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USER_INCOME' });
    return fetch(`http://localhost:3001/api/v1/users/${user_id}/incomes`)
      .then(response => response.json())
      .then(totalIncome => dispatch({ type: 'UPDATE_USER_INCOME', payload: totalIncome }));
  };
}

export function getTotalExpense(user_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USER_EXPENSE' });
    return fetch(`http://localhost:3001/api/v1/users/${user_id}/expenses`)
      .then(response => response.json())
      .then(totalExpense => dispatch({ type: 'UPDATE_USER_EXPENSE', payload: totalExpense }));
  };
}
