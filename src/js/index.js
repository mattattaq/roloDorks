import React from 'react';
import ReactDOM from 'react-dom';

import { sayHi } from './message';
import App from './App.jsx';
import { NavBar } from './NavBar/NavBar.jsx';
import {Dashboard } from './Dashboard/Dashboard.jsx';
import { Card } from './Card/Card.jsx';
import { Deck } from './Deck/Deck.jsx';
const css = require('../sass/main.sass');

import { AppContainer } from 'react-hot-loader';


//needed for HMR
function render(Component) {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('app')
	)
}

render(App)

// Hot Module Replacement API - prevent page reloading with every change
// module.hot.accept takes a path
if (module.hot) {
    module.hot.accept()
}
