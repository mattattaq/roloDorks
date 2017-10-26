import React from 'react';
import Data from '../data/data';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      data: Data,
      websiteArray: Data.user.websites
    }
  }
  render() {
    var firstLetter = Data.user.l_name.charAt(0);
    var websiteOutput = window.document.getElementById("websites");
    
    for (var i = 0; i < this.state.websiteArray; i++){
    websiteOutput.innerHTML += '<a href="' + this.state.websiteArray[i] + '\">'+ this.state.websiteArray[i] + '<br/>';
    }
    return <div className="card-page">
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
                  <p>Below is you card information</p>
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
              <div className="row">
                <div className="col-md-6 text-center">
                  <div className={Data.user.flipped ? 'flip-container flipped': 'flip-container'} >
                    <div className="flipper">
                      <div className="front">
                        <img src={Data.user.img_front} alt="Image front" />
                      </div>
                      <div className="back">
                      <img src={Data.user.img_back} alt="Image back" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="user-info">
                    <h4>Name: <span>{Data.user.f_name} {Data.user.l_name} </span></h4>
                    <h4>Business: <span>{Data.user.business}</span></h4>
                    <h4>Websites: <span id="websites"><br/>
                      {Data.user.websites.map(function(item, i){
                          return <a href={item}>{item} <br/></a>
                        })}
                      </span></h4>
                    <h4>Tel:</h4>
                    <h4>Info:</h4>
                    <a href={Data.user.img_front} target="_blank">Front</a> <br/>
                    <a href={Data.user.img_back} target="_blank">Back</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  }
 }
export default Card;