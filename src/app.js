import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
     hasRendered = true;
    };
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
// <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/f9qwUQW56qC7BeCfCM" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/joinhoney-f9qwUQW56qC7BeCfCM">via GIPHY</a></p>


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
         renderApp()
         if(history.location.pathname === '/'){
             history.push('/dashboard')
         };
        });
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/');
    };
});
