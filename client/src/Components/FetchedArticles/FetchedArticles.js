import React, { Component } from "react";
import axios from "axios";
import Spinner from "../spinner/spinner";
import CardArticle from './../card/CardArticle';

export default class FetchedArticles extends Component {
  state = {
    newArticles: [],
    category: "politic",
    loading: false,
  };
  componentDidMount() {
    let token = localStorage.getItem("token");
    this.setState({ loading: true });
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=us&apiKey=609859951f9844b3a6c61304442c73c2",
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => this.setState({ newArticles: res.data.articles, loading: false }));
  }

  addArticle = ({ title, image, content, category, date }) => {
    let token = localStorage.getItem("token");
    axios
      .post(
        "/articles/Add_Article",
        { headers: { Authorization: `Bearer ${token}` } },
        { title, image, content, category, date }
      )
      .then((response) => {
        if (response.status === 200) {
          alert("Article Added");
        }
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div>
        <div
          style={{
            position: "fixed",
            width: "100%",
            top: "0",
            display: "flex",
            justifyContent: "center",
            zIndex: "10000",
          }}
          className="bg-light"
        >
          <img
            style={{ marginRight: "2%", cursor: "pointer" }}
            onClick={() => window.location.replace("/")}
            width="40"
            height="40"
            src="https://image.flaticon.com/icons/svg/526/526917.svg"
            className="loaded"
          />
          <h2 style={{ color: "#008B8B" }}>
            Data fetched from news API{" "}
            <img
              width="60"
              height="60"
              src="https://image.flaticon.com/icons/png/512/2996/2996310.png"
              className="loaded"
            />{" "}
          </h2>
        </div>

        <div>
          <div className="container list">
            <div className="row" >

            </div>
            
            <Spinner loading={this.state.loading} />
            {this.state.newArticles.map((article) => (
               <CardArticle image={article.urlToImage}
                title={article.title} 
                content={article.content} 
                addFetch={ 
                this.addArticle({
                  title: article.title,
                  image: article.urlToImage,
                  content: article.content,
                  category: this.state.category,
                  date: article.publishedAt,
                })
              }
              category={'politics'} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
