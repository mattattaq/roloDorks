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
      <div className="row">
          <div className="col-md-12 mast-bg">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <h1 className="text-center">
                  <i className="fa fa-lg fa-address-card-o" aria-hidden="true"></i>
                  <br/>
                  Dashboard
                </h1>
                <p className="text-center">
                  Check out your <NavLink to="./card">profile</NavLink> or view your <NavLink to="./deck">deck</NavLink>.
                </p>
              </div>
              <div className="col-md-4"></div>
            </div>
            
          </div>
        </div>
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
                              <img src={(Data.cards[i].img_back == "") ? Data.cards[i].img_front : Data.cards[i].img_back} alt=""/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="user-info">
                          <h3>{Data.cards[i].c_name}</h3>
                          <h4>{Data.cards[i].full_name}</h4>
                          <p><a href={Data.cards[i].url}> {Data.cards[i].url} </a></p>
                          <h4>Met @: {Data.cards[i].met}</h4>
                          <h4><a href={Data.cards[i].img_front} target="_new"> Front</a> <a href={(Data.cards[i].img_back == "") ? 
                          Data.cards[i].img_front : Data.cards[i].img_back} target="_new"> Back</a></h4>
                        </div>
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