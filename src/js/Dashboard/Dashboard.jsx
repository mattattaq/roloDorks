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
    var DataArr = Data.cards.slice(0, 3);
    return <div>
      <div className="content">
        <div className="container row">
          <div className="col-md-10 portal">
            <h2>View deck</h2>
            <h4><NavLink to="./deck">View More</NavLink></h4>
              {DataArr.map(function(item, i){
                return (
                <div>
                  <div className="row container-fluid" ontouchstart="this.classList.toggle('hover');">
                    <div className="card">
                      <div className="col-md-6">
                      <div className={"flip-container " + (DataArr[i].flipped ? "flipped": '')} ontouchstart="this.classList.toggle('hover');">
                          <div className="flipper">
                            <div className="front">
                              <img src={DataArr[i].img_front} alt=""/>
                            </div>
                            <div className="back">
                              <img src={DataArr[i].img_back} alt=""/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        that
                      </div>
                    </div>
                  </div>
                </div>
              )
              })}
            </div>
            <NavLink to="./card" replace><div className="col-md-1 portal">
            <h2>View my card</h2>
            <p>{Data.user.f_name} {Data.user.l_name}</p>
          </div></NavLink>
          </div>
          
        </div>
      </div>
  }
 }
export default Dashboard;