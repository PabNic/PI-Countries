import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import  style  from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <SearchBar />
      <NavLink  className={style.button} to={"/form"}>Create Activity</NavLink>
      <NavLink  className={style.button} to={"/"}>Go Landing</NavLink>
    </nav>
  );
};

export default NavBar;
