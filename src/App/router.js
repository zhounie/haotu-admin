import React from 'react'
import { Switch, Route, Redirect, BrowserRouter as Router, useRouteMatch } from 'react-router-dom'
import { Provider } from  'react-redux'
import store from '../store'

import history from '../browserHistory'
import PageError from '../components/PageError'
import Auth from '../Auth'
import Project from '../layout'
import User from '../pages/user'
import Photo from '../pages/photo'
import Demo from '../pages/demo'

const Routes = () => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Redirect exact from="/" to="/project" />
                <Route path="/auth" component={Auth}></Route>
                <Route path="/project" render={
                    () => (
                        <Project>
                            <Route exact path="/project/user" component={ User } />
                            <Route exact path="/project/photo" component={ Photo } />
                            <Route exact path="/project/demo" component={ Demo } />
                        </Project>
                    )
                }></Route>
                <Route component={PageError}></Route>
            </Switch>
        </Router>
    </Provider>
)

export default Routes;