import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from './pages/home/Home'
import Users from './pages/users/Users'

export default props => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Redirect from="*" to="/" />
    </Switch>
)