import React, { useState,useEffect } from 'react';
import Logo from "./siteLogo.jpg";
import {Parallax} from 'react-parallax';
import {Image} from 'react-bootstrap';
import Team from './our-team.jpg';
import Footter from '../Footer/Footter';

function ArticlePage (props){



        return (

          
            <div>
                      <div style={{height:'89px',backgroundColor:'#517CA4',boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} >
                        <div  style={{display:'flex',justifyContent:'center',cursor:'pointer'}} >
                        <img onClick={()=>window.location.replace('/')} style={{ borderRadius: "50%", width: "70px",marginTop:'10px' }}  src={Logo} />
                        </div>                  
                      </div>
                      <Parallax
                      bgImage={Team}
                      blur={5}
                      bgImageAlt="the dog"
    >


        <div className='container' style={{ height: '368px' }} >
          <div style={{marginTop:"200px"}} className='row'>
<div className='col-md-12' >
<h5 style={{textAlign:'center',color:'white',fontSize:'3em'}} >About us</h5>
          <h1 style={{textAlign:'center',color:'white',fontSize:'5em'}} >Who we are ?</h1>
</div>
          </div>
       
        </div>
    </Parallax>

<div className='container' >
  <h1 style={{marginTop:'5%',textAlign:'center',color:'#517CA4'}} >Stories</h1>
  <div style={{marginTop:'30px'}}  className='row' >
    <div align="center" className='col-md-6 py-4' >
<h5 style={{textAlign:'start'}} >
Latest news is an electronic journal founded in May 2020 by 2 developers during the period of 
the first global contamination of the corona virus, for the purpose of sharing all the information 
from any place in the world by professional bloggers who publish daily articles
 from different subjects (sport, economy, politics, culture, etc.)
 the idea is inspired by several electronic newspapers that post articles, 
 but in a more local way so we decided to 
 share all the news from around the world with all the people who follow us on our website
 you are welcome, do not hesitate to interact with our articles and write comments .
</h5>
    </div>
    <div align="center" className='col-md-6' >
<Image style={{boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} src={'https://img.freepik.com/photos-gratuite/composition-journee-mondiale-du-livre-creatif_23-2148883779.jpg?w=740'} width={'95%'}  fluid/>
    </div>

  </div>



  <h1 style={{marginTop:'12%',textAlign:'center',color:'#517CA4'}} >What we do ?</h1>
  <div style={{marginTop:'30px'}}  className='row ' >
  <div align="center" className='col-md-6' >
<Image style={{boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} src={'https://img.freepik.com/photos-gratuite/main-question-maintien-marque_1134-114.jpg?w=740'} width={'100%'}  fluid/>
    </div>
    
    <div align="center" className='col-md-6 py-3' >
<h5 style={{textAlign:'start'}} >
the idea is to have two main parts in our electronic journal,
 the readers (users) and the journalist bloggers who post the articles, 
 each blogger has an admin space account where he can post articles,
  either an article written by his own sources, or by an API that detects the latest news 
  most followed around the world, and then he can choose the article that he will post of
   course after seeing to be sure of its reliability,
 and then it will be available from our users, who can interact with the article through comments 
 after having created their account in our website either with their real name or anonymously by their nickname .
</h5>
    </div>
 

  </div>


  <h1 style={{marginTop:'12%',textAlign:'center',color:'#517CA4'}} >Working here</h1>
  <div style={{marginTop:'30px'}}  className='row' >
    <div align="center" className='col-md-6 py-5' >
<h5 style={{textAlign:'start'}} >
we give the opportunity to all journalists working in media companies, freelancers, 
independent bloggers the opportunity to post articles in our platform and share their news 
with the rest of the world on one and only condition, that their information are reliable 
and come from a safe and trusted source, to avoid as much as possible of falling into rumors 
and remain in a relationship of trust with our followers. just send us 
a request and fill out a form, it will be reviewed by our judges. then we send our response.
</h5>
    </div>
    <div align="center" className='col-md-6' >
<Image style={{boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} src={'https://img.freepik.com/photos-gratuite/gai-jeune-caucasien-homme-affaires_171337-727.jpg?w=740'} width={'100%'}  fluid/>
    </div>

  </div>


</div>
<div style={{marginTop:'6%'}} >
<Footter/>

</div>

                      </div>
                
        );
    
}
 
export default ArticlePage;