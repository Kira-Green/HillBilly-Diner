import React from "react";
import "./index.css";
import racoon from "./images/racoon.png";
import chicken from "./images/chicken.png";
import snake from "./images/snake.png";
import steak from "./images/steak.png";
import squirrel from "./images/squirrel.png";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Hillbilly Diner</h1>
          <div className="Animal-container">
            <img className="animals" src={racoon} alt="racoon" />
            <img className="animals" src={chicken} alt="chicken" />
            <img className="animals" src={snake} alt="snake" />
            <img className="animals" src={steak} alt="steak" />
            <img className="animals" src={squirrel} alt="squirrel" />
          </div>
        </header>
        <h2>Scraping the best food from the highway since 1989</h2>
      </div>
    );
  }
}

export default Header;
