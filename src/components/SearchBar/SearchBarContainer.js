// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  let style = {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '20%'
  }
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper" style={style}>
        <i className="fab fa-instagram" />
        <h2>InstaPix</h2>
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
