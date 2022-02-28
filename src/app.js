import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
    <div>
        <p>This is from dishboard component</p>
    </div>
)
const AddExpensePage = () => (
    <div>
        <p>This is from add expense component</p>
    </div>
)
const EditExpensePage = () => (
    <div>
        <p>This is from add edit component</p>
    </div>
)
const HelpPage = () => (
    <div>
        <p>This is from add help component</p>
    </div>
)
const NotFoundPage = () => (
    <div>
        <p>404! - <Link to="/">Go Home</Link></p>
    </div>
)
const Header = () => (
    <div>
        <h2>Expensify</h2>
        <nav>
            <NavLink to="/" activeClassName="is-active" exact={true}>  Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create</NavLink>
            <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </nav>
    </div>
)

const routes = (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routes, document.getElementById('app'));
