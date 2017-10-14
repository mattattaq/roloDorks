import React from 'react';
import ReactDom from 'react-dom';
import { NavBar } from 'NavBar/NavBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
      
  )}
}

ReactDom.render(<App />, document.getElementById('app'));