import React,{useState} from 'react';
import Logo from './siteLogo.jpg';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import {IoIosSend} from 'react-icons/io';
import {GrFacebook} from 'react-icons/gr';
import {IoLogoTwitter} from 'react-icons/io';
import {AiFillInstagram} from 'react-icons/ai';
import './Footter.css';

 
function Footter () {
  

      const location = useLocation() ;
      const [email,setEmail] = useState('');
     

      function checkEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


      const addEmail=async()=>{

        if (!checkEmail(email)) {
          return  alert('Adresse e-mail not valide');
        } else{
          await axios.post('/newsletters/add_newsletter',{email}).then((res)=>{
            if(res.data === ' conflict'){
              alert('We have already received your email !')
            }else{
              alert('we have received you email , we will inform you of our novelty soon . thank you')
            }
          }).catch((err)=>console.log(err))
        }      
      };

        return (
          <div className={ location.pathname==='/' || location.pathname.includes('/Detail') ?  'MyFooter' : 'ShadowNav'}>
                  {/* Footer */}
                  <div>
        {/* For demo purpose */}
     
     
        {/* End */}
        {/* Footer */}
        <footer style={{backgroundColor:'#F8F9FA'}}>
          <div className="container py-5">
            <div className="row ">
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src={Logo} alt="" style={{ borderRadius: "70%", width: "180px" }}className="mb-3" />
                <p className="font-italic text-muted">welcome to our newspapers, our site is created to announce the latest news from
            around the world, we cover the latest news from different categories: sport,
            health, politics, movies ... now don't miss any news</p>
                <ul className="list-inline mt-4">
                  <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><IoLogoTwitter size={25}/></a></li>
                  <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><GrFacebook size={25} /></a></li>
                  <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><AiFillInstagram size={32} /></a></li>
                  <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest" /></a></li>
                  <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fa fa-vimeo" /></a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4"> Content</h6>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><a href="#" className="text-muted">Economic</a></li>
                  <li className="mb-2"><a href="#" className="text-muted">Sport</a></li>
                  <li className="mb-2"><a href="#" className="text-muted">Politic</a></li>
                  <li className="mb-2"><a href="#" className="text-muted">Culture</a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4">Latest news</h6>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><a href="/login" className="text-muted">Login</a></li>
                  <li className="mb-2"><a href="/register" className="text-muted">Register</a></li>
                  <li className="mb-2"><a href="/#ShowCase" className="text-muted">Our articles</a></li>
                  <li className="mb-2"><a href="#" className="text-muted">About-us</a></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
                <p className="text-muted mb-4">To not miss any of our new articles as well as the rest of the news, subscribe to our newsletter.</p>
                <div className="p-1 rounded border">
                  <div className="input-group">
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0" />
                    <div className="input-group-append">
                      <button onClick={()=>addEmail()} id="button-addon1"  className="btn btn-link"><IoIosSend size={25}/></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Copyrights */}
          <div className="bg-light ">
            <hr/>
            <div className="container text-center">
              <p className="text-muted mb-0 py-2">© 2021 Latest news.</p>
            </div>
          </div>
        </footer>
        {/* End */}
      </div>
                {/* Footer */}
            </div>
        );
    
}
 
export default Footter;