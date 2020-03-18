import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AdminIndex from './layout'
import User from './user'
import Photo from './photo'
import 'antd/dist/antd.css'
import { Provider } from  'react-redux'
import store from '../store'
const Main = () => {
    return (
        <Provider store={store}>
            <Router>
                <Route path="/" render={
                    () => <AdminIndex>
                        <Route exact path="/user" component={ User } />
                        <Route exact path="/photo" component={ Photo } />
                    </AdminIndex>
                }></Route>
            </Router>
        </Provider>
    )
}

export default Main;
