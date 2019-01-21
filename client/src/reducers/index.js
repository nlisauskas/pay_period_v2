import { combineReducers } from 'redux'
import manageIncome from './manageIncome';
import manageStatus from './manageStatus';
import manageExpense from './manageExpense';

export default combineReducers({income: manageIncome, status: manageStatus, expense: manageExpense})
