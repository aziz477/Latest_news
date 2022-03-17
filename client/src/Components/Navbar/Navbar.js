import React, { Component } from "react";
import { GiAmericanFootballBall } from "react-icons/gi";
import { GiHeartBeats } from "react-icons/gi";
import { FcFilmReel } from "react-icons/fc";
import { AiFillBank } from "react-icons/ai";
import { GiEarthAfricaEurope } from "react-icons/gi";
import logoo from "./siteLogo.jpg";
import * as jwd_decode from "jwt-decode";
import { withRouter } from "react-router-dom";
import {AiFillHome} from 'react-icons/ai';
import {AiFillSetting} from 'react-icons/ai';
import {FaUserFriends} from 'react-icons/fa';
import {FaNewspaper} from 'react-icons/fa';
import {AiFillFileAdd} from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';
import {AiFillApi} from 'react-icons/ai';
import {FiLogOut} from 'react-icons/fi';
import {AiOutlineLogin} from 'react-icons/ai';
import {BsFillPersonPlusFill} from 'react-icons/bs';
import {AiFillQuestionCircle} from 'react-icons/ai';
class NavBar extends Component {
  state = {
    role: "",
  };

  componentDidMount() {
    if (!localStorage.token) {
      this.props.history.push("/");
    } else {
      const token = localStorage.getItem("token");
      const decoded = jwd_decode(token);
      this.setState({ role: decoded.role });
    }
  }

  render() {

      //  Logout Function
 const Logout = () => {
  localStorage.removeItem('token');
  window.location.replace("/");
};

    return (
      <div>
        <nav
          className="navbar navbar-expand-sm navbar-light bg-light"
          style={{ boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px ',position: "fixed", top: 0, width: "100%", zIndex: "9999" }}
        >
          <a className="navbar-brand" href="/">
            <img src={logoo} alt="Logo" style={{ borderRadius: "50%", width: "70px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
                <a className="nav-link" href="/">
                 <AiFillHome size={25}/>
                </a>
              </li>
              <li className="nav-item dropdown">
                
                <a className="nav-link" href="/about-us">
                 <AiFillQuestionCircle size={25}/>
                </a>
                
              </li>
              {this.state.role === "admin" && (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                  <AiFillSetting size={25} />
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="UserList">
                      <FaUserFriends size={25} />{" "}
                      User list
                    </a>
                    <a className="dropdown-item" href="Add_Article">
                      <AiFillFileAdd size={25} />{" "}
                      Add Article
                    </a>
                    <a className="dropdown-item" href="autofetch">
                      <AiFillApi size={25} />
                     {" "}
                      Auto Fetch
                    </a>
                  </div>
                </li>
              )}
            </ul>
            <input
              className="form-control"
              onChange={(e) => this.props.searchName(e.target.value)}
              placeholder="Search..."
            />

            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                 <FaNewspaper size={25} />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  <a
                    className="dropdown-item"
                    href="#"
                    name=""
                    onClick={(e) => this.props.searchCategory(e.target.name)}
                  >
                    <GiEarthAfricaEurope /> All
                  </a>
                  <a
                    className="dropdown-item"
                    href="#national"
                    name="National"
                    onClick={(e) => this.props.searchCategory(e.target.name)}
                  >
                    <AiFillBank /> National
                  </a>
                  <a
                    className="dropdown-item"
                    href="#sports_news"
                    name="Sport"
                    onClick={(e) => this.props.searchCategory(e.target.name)}
                  >
                    <GiAmericanFootballBall /> Sport
                  </a>
                  <a
                    className="dropdown-item"
                    href="#health_news"
                    name="health"
                    onClick={(e) => this.props.searchCategory(e.target.name)}
                  >
                    <GiHeartBeats /> Health
                  </a>
                  <a
                    className="dropdown-item"
                    href="#films_news"
                    name="film"
                    onClick={(e) => this.props.searchCategory(e.target.name)}
                  >
                    <FcFilmReel /> Film
                  </a>

                  <div className="dropdown-divider"></div>
                  <div
                    className="custom-control custom-checkbox"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="like"
                      onClick={(e) => this.props.LikesFilter()}
                    />{" "}
                    <label className="custom-control-label" htmlFor="like">
                      Most Liked{" "}
                    </label>{" "}
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <BsFillPersonFill size={25} />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  {
                    localStorage.getItem('token') ?
                  (  <div className="dropdown-item">
                    <span onClick={()=>Logout()}  style={{cursor:"pointer"}} >
                    <FiLogOut size={25} />{' '}
                      Logout
                    </span>
                  </div>)
                   :

                   (
                   <div>
  <div className="dropdown-item">
                    <span onClick={()=>window.location.replace('/Login')} style={{cursor:"pointer"}} >
                    <AiOutlineLogin  size={25} />{' '}
                      Login
                    </span>
                  </div>
                  <div onClick={()=>window.location.replace('/SignUp')}  className="dropdown-item">
                    <span style={{cursor:"pointer"}} >
                    <BsFillPersonPlusFill  size={25} />{' '}
                      Sign up
                    </span>
                   </div>
                   </div>
                   )}
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default withRouter(NavBar);
