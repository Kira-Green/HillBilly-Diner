import React from "react";
import css from "./Menu.module.css";
import MenuItem from "../MenuItem";

const Menu = props => (
  <ul className={css.column}>
    {props.menuItem.map(menuItem => (
      <MenuItem
        name={menuItem.name}
        description={menuItem.description}
        price={menuItem.price}
      />
    ))}
  </ul>
);

export default Menu;
