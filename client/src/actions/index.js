export function getIncomes() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_INCOMES' });
    return fetch('http://localhost:3001/api/v1/incomes')
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

export function getExpenses() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_EXPENSES' });
    return fetch('http://localhost:3001/api/v1/expenses')
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

export function getTotalIncome(id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USER_INCOME' });
    return fetch('http://localhost:3001/api/v1/users/1/incomes')
      .then(response => response.json())
      .then(user => dispatch({ type: 'GET_USER', payload: user }));
  };
}

export function getTotalExpense(id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USER_EXPENSE' });
    return fetch('http://localhost:3001/api/v1/users/1/expenses')
      .then(response => response.json())
      .then(user => dispatch({ type: 'GET_USER', payload: user }));
  };
}
