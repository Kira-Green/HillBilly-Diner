import React from "react";
import css from "./MenuItem.module.css";

const MenuItem = props => (
  <li className={css.MenuItemContainer}>
    <img />
    <div className={css.name}> {props.name}</div>
    <div className={css.description}> {props.description}</div>
    <div className={css.price}> {props.price}</div>
  </li>
);

export default MenuItem;
