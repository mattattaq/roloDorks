import React from 'react';
import Data from '../data/data';
import {NavLink} from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      data: Data
    }
  }
  
  render() {
    return <div>
      <div className="content">
        <div className="container row">
          <div className="col-md-10 portal ml5">
            <h2>View deck</h2>
            <div className="card container-fluid">
              <div className="col-md-4">
              <img src={Data.cards[0].img_front} alt="" className={"img-responsive thumbnail " +  (Data.cards[0].flipped ? 'flipped': '')}/>
              </div>
              <div className="col-md-8">
                <h3>{Data.cards[0].c_name}</h3>
                <h4>{Data.cards[0].full_name}</h4>
                <p><a href={Data.cards[0].url}> {Data.cards[0].url} </a></p>
                
              </div>
            </div>
            <h4><NavLink to="./deck">View More</NavLink></h4>
          </div>
          <NavLink to="./card" replace><div className="col-md-2 portal">
            <h2>View my card</h2>
            <p>{Data.user.f_name} {Data.user.l_name}</p>
          </div></NavLink>
        </div>
      </div>
      
    </div>
  }
 }
export default Dashboard;