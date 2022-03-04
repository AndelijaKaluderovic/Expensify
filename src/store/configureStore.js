import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// here we will use default export () and return store so we can use it easier
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};