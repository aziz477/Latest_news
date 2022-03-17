import React, { Component } from 'react';
 
class Heroes extends Component {
    render() { 
        return (
            <div>
                
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
            <img width={'100%'}height='225' src={'https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} />
              <div className="card-body">
                <p style={{textAlign:'center'}} className="card-text">Professional and high-level bloggers and journalists on site .</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
            <img width={'100%'}height='225' src={'https://img.freepik.com/vecteurs-libre/bleu-fond-nouvelles-nouvelles-television_1017-14201.jpg?w=740'} />
              <div className="card-body">
                <p style={{textAlign:'center'}} className="card-text">Be aware of all, we post every moment new articles of world news .</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img width={'100%'}height='225' src={'https://img.freepik.com/vecteurs-libre/tampons-caoutchouc-approuves-rejetes-ensemble-deux_1017-25907.jpg?w=740'} />
              <div className="card-body">
                <p style={{textAlign:'center'}} className="card-text">No rumors ! all of our posted articles are from trusted sources</p>
              </div>
            </div>
          </div>
        
        </div>
      </div>
            </div>
        );
    }
}
 
export default Heroes;