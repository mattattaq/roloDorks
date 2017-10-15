import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './NavBar/NavBar.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>App</h1>
      </div>
      
  )}
}

ReactDom.render(<App />, document.getElementById('app'));