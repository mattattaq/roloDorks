import React from 'react';
import{ BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../App.jsx'
import { Dashboard } from '../Dashboard/Dashboard.jsx';

export default () => {
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ App } />
            <Route path="/dashboard" exact component={ Dashboard } />
        </Switch>
    </BrowserRouter>
}