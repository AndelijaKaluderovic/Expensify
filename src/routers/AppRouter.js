import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import AddExpensePage from '../components/AddExpensePage';
import Dashboard from '../components/Dashboard';
import EditExpense from '../components/EditExpense';
import NotFound from '../components/NotFound';
import PrivateRoute from '../components/PrivateRoute'

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={Dashboard}/>
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpense} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)
export default AppRouter