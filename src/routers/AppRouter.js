import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import AddExpensePage from '../components/AddExpensePage';
import Dashboard from '../components/Dashboard';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';


const AppRouter = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)
export default AppRouter