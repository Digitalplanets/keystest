import React from "react";
import { useEffect } from "react";
import * as styles from "../pages/Home.module.css";
import { navigate } from "gatsby";

export default ({ Links }) => {
  return (
    <div className={styles.links} id="links">
      {Links &&
        Links.map(({ title, desc, link, backcolor, txtcolor }, index) => (
          <div className={styles.linkbut}>
            <div
              className={styles.linkmin}
              onClick={() => (link.charAt(0) == '/' ? navigate(link) : window.location.href = link)}
              style={{ color: txtcolor, textAlign: "left" }}
            >
              <center>
              <h3 className="text-uppercase">{title}</h3>
  
      {desc && (
        <h4>{desc}</h4>
      )}
              
              <h4></h4>
              </center>
            </div>
          </div>
        ))}
    </div>
  );
};
