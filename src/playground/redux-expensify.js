import { createStore, combineReducers } from 'redux';



// Store creation

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 600 }));
// store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));



const demoState = {
    expenses: [{
        id: 'poijasdflwe',
        description: 'January rent',
        note: 'This was the final payment for that address',
        amound: 12000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amound', //date or amound
        startDate: undefined,
        endDate: undefined
    }
}