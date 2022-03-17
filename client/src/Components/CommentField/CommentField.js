import React, { Component } from 'react';
import {BsFillPersonFill} from 'react-icons/bs';
import './CommentField';
import Moment from "react-moment";
 import axios from 'axios';




class CommentField extends Component {

  state={
    article:''
  }

  componentDidMount(){

    axios.get(`/articles/display_Article/${this.props.id}`)
    .then((res)=>this.setState({article:res.data}))
    .catch((err)=>console.log(err));

  };

  

    render() { 

      const {article} = this.state;

      if(article.length===0 || article.comment.length === 0){
        return null
      }
        return (
            <div style={{marginTop:'1%'}} >
                    <div style={{width:'100%'}} className="container justify-content-center mt-100 mb-100">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Recent Comments</h4>
                <h6 className="card-subtitle">Latest Comments section by users</h6>
              </div>
              <div className="comment-widgets m-b-20">
    {
      article.comment.map((art)=>
      <div style={{border:'black '}} className="d-flex flex-row comment-row ">
      <div className="p-2"><span className="round"><BsFillPersonFill size={30} /></span></div>
      <div  className="comment-text active w-100">
        <h5>{art.author}</h5>
        <div className="comment-footer"> <span className="date" ><Moment format='DD-MM-YY HH:MM' >{art.date_comment}</Moment></span> </div>
        <div style={{width:'80%'}}>
        <p className="m-b-5 m-t-10">{art.content_comment}</p>
        <hr className="my-4"></hr>

        </div>
      </div>
      
    </div>
      )
      
    }
              
              
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
        );
    }
}
 
export default CommentField;