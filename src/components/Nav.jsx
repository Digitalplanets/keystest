import React from "react";
import "../pages/App.css";
import * as styles from "../pages/Home.module.css";
import { navigate } from "gatsby";

function jumpTo(dest, id) {
  navigate(dest);
}
const Nav = (props) => {
  return (
    <>
    <center>
      <div id="nav" onClick={props.onClick} className={styles.navbar} >
        {props.text}
      </div></center>
    </>
  );
};
export default Nav;
