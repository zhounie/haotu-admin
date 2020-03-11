import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AdminIndex from './layout'
import 'antd/dist/antd.css'
const Main = () => {
    return (
        <Router>
            <Route path="/index" exact component={AdminIndex}></Route>
        </Router>
    )
}

export default Main;
