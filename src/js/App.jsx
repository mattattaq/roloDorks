import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './NavBar/NavBar.jsx';
import Routes from './routes';

class App extends React.Component {
  render() {
    return (
        <Routes />
  )}
}

ReactDom.render(<App />, document.getElementById('app'));