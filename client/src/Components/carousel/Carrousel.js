import React, { Component } from 'react';
import GoogleApp from './icons/Google_Play_Store_badge_FR.svg';
import AppStore from './icons/Download_on_the_App_Store_Badge (2).svg';
import './Carrousel.css';

class Caroussel extends Component {
    render() { 
        return (
         
      <div className="container-fluid">
      <div className="row">
        
        {/* slider banner	 */}
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="info">
                <h1 style={{marginTop:'10%'}} >Follow the global <br/>economy</h1>
                <div className='storeButton' >
                <a href='https://play.google.com/' ><p><img src={GoogleApp} width="150" height="40" /></p></a>
               <a href='https://www.apple.com/fr/ios/app-store/' > <p><img src={AppStore} width="150" height="40"  /></p></a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="info">
              <h1 style={{marginTop:'10%'}} >Be in the <br/>sports world</h1>
                <a href='https://play.google.com/' >  <p><img src={GoogleApp} width="150" height="40" /></p></a>
                <a href='https://www.apple.com/fr/ios/app-store/' ><p><img src={AppStore} width="150" height="40"  /></p></a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="info">
              <h1 style={{marginTop:'10%'}} >as well as the<br/> political world</h1>
                <a href='https://play.google.com/' > <p><img src={GoogleApp} width="150" height="40"  /></p></a>
                <a href='https://www.apple.com/fr/ios/app-store/' > <p><img src={AppStore} width="150" height="40"  /></p></a>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      
    </div>
        );
    }
}
 
export default Caroussel;