import React, { Component } from "react";
import axios from "axios";
import * as jwd_decode from "jwt-decode";
import { Link } from "react-router-dom";
import {AiFillLike} from 'react-icons/ai';
import NavBar from "../Navbar/Navbar";
import Moment from "react-moment";
import Spinner from "../spinner/spinner";
import "./HomePage.css";
import Carrousel from "../carousel/Carrousel";
import Heroes from "../heroes/hereos";
import CardArticle from "../card/CardArticle";
import { Card } from 'react-bootstrap';
import Footter from './../Footer/Footter';

export default class HomePage extends Component {
  state = {
    ArticlesList: [],
    name: "",
    role: "",
    isBlocked: false,
    filteredTitle: "",
    filteredCategory: "",
    filteredLikes: false,
    loading: false,
  };

  componentDidMount() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem("token");
      const decoded = jwd_decode(token);
      this.setState({ name: decoded.name });
      this.setState({ role: decoded.role });
      this.setState({ isBlocked: decoded.isBlocked });    }
   
    this.getArticlesList();
    this.getUserList();
  }

  /* request for getting all article */
  getArticlesList = () => {
    let token = localStorage.getItem("token");
    this.setState({ loading: true });
    axios
      .get("/articles/display_Article")
      .then((res) => this.setState({ ArticlesList: res.data, loading: false }))
      .catch((err) => console.error(err));
  };

  /* request for delete article */
  DeleteArticle = (_id) => {
    let token = localStorage.getItem("token");
    axios
      .delete(`/articles/Delete_Article/${_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(this.getArticlesList());
  };

  /* request for getting all users */
  getUserList = () => {
    let token = localStorage.getItem("token");
    axios
      .get("/users/display_Users", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => this.setState({ UserList: res.data }))
      .catch((err) => console.error(err));
  };



  // Call Back Function for Name Filter
  handleSearchName = (input) => {
    this.setState({ filteredTitle: input });
  };

  //  Call Back Function for Category Filter
  handleSearchCategory = (input) => {
    this.setState({ filteredCategory: input });
  };

  //  Call Back Function For Likes Filter
  handleLikesFilter = () => {
    if (this.state.filteredLikes) {
      this.setState({ filteredLikes: !this.state.filteredLikes });
      this.getArticlesList();
    } else {
      let token = localStorage.getItem("token");
      axios
        .get("/articles/mostliked", { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          this.setState({ ArticlesList: res.data, filteredLikes: !this.state.filteredLikes });
        });
    }
  };

  render() {
    
    let filteredArticles = [];
    filteredArticles = this.state.ArticlesList.filter(
      (article) =>
        article.title.toUpperCase().includes(this.state.filteredTitle.toUpperCase()) &&
        article.category.toUpperCase().includes(this.state.filteredCategory.toUpperCase())
    );
    return (
      <div  >
        <NavBar
          searchName={this.handleSearchName}
          searchCategory={this.handleSearchCategory}
          LikesFilter={this.handleLikesFilter}
          Logout={this.Logout}
        />
        <div style={{backgroundColor:'#E6E6FA'}} >
        <Carrousel/>

        <div style={{marginTop:'3%'}} >
        <b><h1 style={{textAlign:'center',marginBottom:'2%',fontFamily:'League Gothic, sans-serif'}} >Our principles</h1></b>  
          <Heroes/>
        </div>

        </div>


        <div className="container ">
        <div className="row">
          <Spinner loading={this.state.loading} />
          {filteredArticles.map((article) => (
           
           <CardArticle id={article._id} category={article.category} content={article.content.slice(0,180)} title={article.title} image={article.image} />
       
          ))}
          </div>       
        </div>
        <div style={{marginTop:'6%'}} >
        <Footter/>

        </div>
      </div>
    );
  }
}
