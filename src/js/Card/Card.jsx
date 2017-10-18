import React from 'react';
import Data from '../data/data';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      data: Data
    }
  }
  render() {
    var firstLetter = Data.user.l_name.charAt(0);
    console.log(firstLetter);
    return <div>
      <div className="content">
        <div className="row">
          <div className="col-md-12">
            <div className="my-card card-top">
              <span className="name-letter">
                { firstLetter }
              </span>
              <div className="row">
                <div className="col-md-4">
                  <h1>Profile</h1>
                  <p>Choose which card you'd like to view</p>
                </div>
                <div className="col-md-8">
                  <div className="panel panel-default">
                    <img src="" alt="" className="img-responsive thumbnail"/>
                    <p className="text-center">{Data.user.f_name} {Data.user.l_name}</p>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="divider"></div><div className="divider"></div>
            <div className="my-card card-bottom">

            </div>
          </div>
        </div>
        
      </div>
    </div>
  }
 }
export default Card;