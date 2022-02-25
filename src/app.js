import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

const routes = (
    <Router>
        <Routes>
        <Route path="/" element={<ExpenseDashboardPage />} exact />
        <Route path="/create" element={<AddExpensePage />} />
        <Route path="/edit" element={<EditExpensePage />} />
        <Route path="/help" element={<HelpPage />} />
        </Routes>
    </Router>
)

ReactDOM.render(routes, document.getElementById('app'));
