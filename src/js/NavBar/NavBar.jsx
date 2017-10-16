import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return <div>
      <div className="row rd-navbar">
        <div className="col-md-12">
          <h1 className="mast"><em>Roli</em><span className="mast-accent">dorks</span></h1>
          <ul>
            <li><NavLink strict to="/">Home</NavLink></li>
            <li><NavLink strict to="/deck" activeClassName="selected">Deck</NavLink></li>
            <li><NavLink exact to="/card" activeClassName="selected">My Card</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  }
 }
export default NavBar;