import React from 'react';
import {render} from 'react-dom';

import Routes from './routes';
import NavBar from './NavBar/NavBar.jsx';
import Dashboard from './Dashboard/Dashboard.jsx'

class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}

render(<App />, window.document.getElementById('app'));