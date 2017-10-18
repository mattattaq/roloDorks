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
            <div className="my-card-top">
              <span className="name-letter">
                { firstLetter }
              </span>
            </div>
            <div className="my-card-bottom"></div>
          </div>
        </div>
        
      </div>
    </div>
  }
 }
export default Card;