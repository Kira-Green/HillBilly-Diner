import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Menu from "../components/Menu";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItem: [
        {
          name: "Possum Pancakes",
          description: "Sky high pancakes with a side of griddled possum",
          price: "£8.99",
          course: "breakfast"
        },

        {
          name: "Raccoon Reuben",
          description:
            "Delicious sandwich with freshly seared raccoon, sauerkraut, Thousand Island Dressing, and Swiss Cheese",
          price: "£10.99",
          course: "lunch"
        },

        {
          name: "Squirrel Caesar Salad",
          description:
            "No more than day old squirrel, boiled with lettuce, croutons, and homemade dressing",
          price: "£12.99",
          course: "dinner"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="columnContainer">
          <div className="title"> MENU ITEMS </div>
          <Menu
            menuItem={this.state.menuItem.filter(
              item => item.course === "breakfast"
            )}
          />
          <Menu
            menuItem={this.state.menuItem.filter(
              item => item.course === "lunch"
            )}
          />
          <Menu
            menuItem={this.state.menuItem.filter(
              item => item.course === "dinner"
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
