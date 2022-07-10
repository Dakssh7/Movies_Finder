import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import { setSearchTerm } from "../../features/searchTerm/searchTermSlice";
import user from "../../images/user.png";
import "./Header.css";

const Header = () => {
  const term = useSelector(state => state.term)
  console.log(term);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (text === "") return alert("Please enter search term!");
    dispatch(fetchAsyncMovies(text));
    dispatch(fetchAsyncShows(text));
    dispatch(setSearchTerm(text));
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={text}
            placeholder="Search Movies or Shows"
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
