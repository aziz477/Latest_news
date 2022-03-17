import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import HomePage from "./Components/HomePage/HomePage";
import AddArticle from "./Components/AddArticle/AddArticle";
import ArticlePage from "./Components/ArticlePage/ArticlePage";
import UpdateArticle from "./Components/UpdateArticle/UpdateArticle";
import FetchedArticles from "./Components/FetchedArticles/FetchedArticles";
import UserList from "./Components/UserList/UserList";
// import Spinner from "./Components/Spinner/Spinner"
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Login" component={SignIn} />
          <Route exact path="/add_article" component={AddArticle} />
          <Route exact path={"/articles/display_Article/:id"} component={ArticlePage} />
          <Route exact path={"/edit/:id"} component={UpdateArticle} />
          <Route exact path="/UserList" component={UserList} />
          <Route exact path={"/autofetch"} component={FetchedArticles} />
          <Route exact path={"/about-us"} component={AboutUs} />
        </Switch>
        {/* <Spinner/> */}
      </div>
    </div>
  );
}

export default App;
