import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import Card from '../Card/Card.jsx';
import Deck from '../Deck/Deck.jsx';

export default React.createClass({
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact={true} path="/" component={Dashboard} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/card" component={Card} />
                        <Route path="/deck" component={Deck} />
                    </Switch>
                </div>
            </Router>
        )
    }
})
