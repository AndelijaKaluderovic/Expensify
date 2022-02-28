import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'SET':
            return {
                count: 101
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
})
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

//Actions 

///increment
store.dispatch({
    type: 'INCREMENT'
})
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
})
//reset
store.dispatch({
    type: 'RESET'
})
//set
store.dispatch({
    type: 'SET'
})
//decrement
store.dispatch({
    type: 'DECREMENT'
})
