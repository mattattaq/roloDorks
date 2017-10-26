import React from 'react';
import Data from '../data/data';

class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      data: Data,
    }
  }
  render() {
    return <div>
      <div className="card-page">
        <div className="content">
        {Data.cards.map(function(item, i){
                return (
                <div>
                  <div className="row container-fluid" ontouchstart="this.classList.toggle('hover');">
                    <div className="card">
                      <div className="col-md-6">
                      <div className={"flip-container " + (Data.cards[i].flipped ? "flipped": '')} ontouchstart="this.classList.toggle('hover');">
                          <div className="flipper">
                            <div className="front">
                              <img src={Data.cards[i].img_front} alt=""/>
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
      </div>
    </div>
  }
 }
export default Deck;