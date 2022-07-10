import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route exact path="/movie/:imdbID" component={MovieDetail} />
            <Route exact component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
