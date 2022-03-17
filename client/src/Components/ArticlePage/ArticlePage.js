import React, { useState,useEffect } from 'react';
import './ArticlePage.css';
import Moment from 'react-moment';
import axios from 'axios';
import CommentField from '../CommentField/CommentField';
import {AiFillLike} from 'react-icons/ai';
import {FaCommentDots} from 'react-icons/fa';
import jwtDecode from 'jwt-decode';
import Logo from './siteLogo.jpg';



function ArticlePage (props){

  const [article,setArticle] = useState('');
  const [comment,setComment] = useState('');
  const [user,setUser] = useState('');
  const [id,setId] = useState('');
  const token = localStorage.getItem('token')
  
  useEffect(()=>{
 

    if(localStorage.getItem('token')){
      const token = localStorage.getItem('token');
     const decode = jwtDecode(token) ;
     setId(decode.id);
     axios.get(`/articles/get_user/${id}`)
          .then((res)=>setUser(res.data))
          .catch((err=>console.log(err)))
    }

    getArticle();
  });

  const getArticle=async()=>{
   await axios.get(`/articles/display_Article/${props.match.params.id}`,{headers:{Authorization:`Bearer ${token}`}})
    .then((res)=>setArticle(res.data))
    .catch((err)=>console.log(err));

  }

  console.log(user);

  const AddComment=async()=>{
await axios.put(`/articles/add_comment/${props.match.params.id}`,{author:user.name,authorID:id,content_comment:comment})
           .then((res)=>console.log('comment added'))
           .catch((err)=>console.log(err));
           setComment('');
           window.location.reload();
  }

  const AddLike=async()=>{
    await axios.put(`/articles/like/${props.match.params.id}`)
          .then((res)=>console.log(res.data))
          .catch((err)=>console.log(err))
  };

  if(article.length ===0 ){
            return null
  }

        return (

          
            <div>
              
                {
                      <div style={{height:'170px',backgroundColor:'#517CA4'}} >
                        <div  style={{display:'flex',justifyContent:'center',cursor:'pointer'}} >
                        <img onClick={()=>window.location.replace('/')} style={{ borderRadius: "50%", width: "70px",marginTop:'10px' }}  src={Logo} />
                        </div>
                                             

                     <h3 style={{color:'white',fontWeight:'bold',paddingTop:'10px',textAlign:'center'}}>{article.title.slice(0,50)}</h3>

                      <div className="container ">
                    <div className="jumbotron text-white jumbotron-image shadow" style={{ backgroundImage: `url(${article.image})`}}>
                    
                    </div>
                    
                  </div>
                  <div className={'container'}>
                    <div className="row ">
                    <div className="col-md-12">
                      <h5 style={{textAlign:'justify'}}>
                    {article.content}
                      </h5>
                      <div style={{marginTop:'5px'}} >
                        
                      </div>
                      <hr/>
                      <p><FaCommentDots/> : {article.comment.length} <AiFillLike/> :{article.like}</p>
                        
                      <p style={{color:'black !important'}}>Author : Mike jonson</p>
                      <p style={{color:'black !important'}}>Date post :{' '} 
                      <Moment format='YYYY-MM-DD HH:mm'>
                           {article.date}
                          </Moment>
                          </p>

                    </div>
                    
                  </div>
                    </div>
                    
                    <div style={{marginLeft:'10%'}} className='container' >
                  <div className='row' >
                    <div className='col-md-10' >
                    <input value={comment} onChange={(e)=>setComment(e.target.value)} placeholder='Write your comment ...' type='text' className='form-control' />
                    </div>
<div className='col-md-2' >
<button onClick={()=>AddComment()} style={{borderRadius:'0px',backgroundColor:'#507BA3',color:'white'}} className='btn ' >Comment</button><AiFillLike size={43} onClick={()=>AddLike()}  />

</div>
                  </div>
                </div>

                    <div>
                      <CommentField id={props.match.params.id} />
                    </div>
            
                        </div>
                 }

            </div>
        );
    
}
 
export default ArticlePage;