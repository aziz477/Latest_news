import React from 'react';
import { Link } from 'react-router-dom';
import "./CardArticle.css";
import { useLocation,useHistory } from 'react-router-dom';

 
function CardArticle (props) {

      const location = useLocation();
      const history = useHistory();
      const token = localStorage.getItem('token');

      const RedirectLogin=()=>{
        alert('You must be logged to read this article .') ;
        history.push('/login');

      };

        return (
          <div style={{marginTop:'5%'}}  className="col-md-4">
                      <Link style={{textDecoration:'none'}}  onClick={()=>token ? history.push(`/articles/display_Article/${props.id}`) : RedirectLogin() } >

          <div style={{height:'450px'}} id='UiCard' className="card-content">
            <div  className="card-img">
              <img style={{height:'220px'}} src={props.image} alt="" />
              <span><h4>{props.category}</h4></span>
            </div>
            <div className="card-desc">
              <h3>{props.title.slice(0,20)}</h3>
              <p>{props.content}...</p>
              <div style={{display:'flex',justifyContent:'center'}} >
        
               {
                 location.pathname === '/autofetch' ? (
                  <a style={{textDecoration:'none',color:"white"}} onClick={()=>props.addFetch} className="btn-card">Add article</a>   
                  ):('')
               }
              </div>
            </div>
          </div>
          </Link>

        </div>
        
            
        );
    }

 
export default CardArticle;