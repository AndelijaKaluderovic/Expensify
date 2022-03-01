import { createStore, combineReducers } from "redux";
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters'

// here we will use default export () and return store so we can use it easier
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    );
    return store;
};