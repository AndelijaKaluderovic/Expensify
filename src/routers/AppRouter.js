import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Create from '../components/Create'
import Dashboard from '../components/Dashboard'
import Edit from '../components/Edit'
import Help from '../components/Help'
import NotFound from '../components/NotFound'

const AppRouter = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/create" component={Create} />
                <Route path="/edit" component={Edit} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)
export default AppRouter