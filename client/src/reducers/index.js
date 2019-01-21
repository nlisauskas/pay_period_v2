import { combineReducers } from 'redux';
import incomesReducer from './incomes';
import expensesReducer from './expenses';
import usersReducer from './user';


export default combineReducers({
    incomes: incomesReducer,
    expenses: expensesReducer,
    user: usersReducer
});
