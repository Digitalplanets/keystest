import React, { Component } from "react"
import './index.css';
import './App.css';
import * as styles from './Home.module.css'
import Header from '../components/Header'
import Typed from "typed.js"
import keycard from '../images/keycard.png'
import "../components/Card.css"
import Card from "../components/card"

import { Helmet } from "react-helmet"
import Checkbox from "../components/checkbox";


export default class App extends Component {
  constructor() {
    super();

    this.abouthead = ["19keys is a St. Louis Born, West Oakland-raised Thought leader, Entrepreneur and Public Speaker."]

    this.about = ["'Curating and Presenting thoughts to Enlighten the Mind.'",
    "'We are living in a #ParadigmShift within the subconscious and conscious mind'",
    "'yet there is a difference in our levels of awareness -- which means there is a difference in our perception of life.'",
    "'Often times, we are limited by our pattern of thinking, how we perceive ideas and the world.'",
    "'What sets one man or woman apart from the other, is how he or she thinks.'",
    "'What sets man apart from other forms of life is our higher thinking and our higher consciousness.'"]

  }

  componentDidMount() {


    var typed = new Typed('#abouthead', {
      strings: this.abouthead,
      typeSpeed: 40,
      backSpeed: 15,
      loop: false,
      cursorChar: '',
      

    });

    var typed = new Typed('#about', {
      strings: this.about,
      typeSpeed: 40,
      backSpeed: 15,
      backDelay: 2000,
      startDelay: 8000,
      loop: true,
      cursorChar: '🔑'

    });
  }

  render() {

    return (
      <><Helmet>
        <link rel="apple-touch-icon" sizes="180x180" href="../images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="../images/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#ffffff" />
        <title>About | Keys</title>
      </Helmet>
        <div style={{ backgroundColor: "#000", color: "#FFF" }} className={styles.bg}>
        <Header />
        <div className={styles.aboutbox}>
        <div>
            <Card/>
          </div>
          <div className={styles.aboutblock}>
          <span className={styles.about} id="abouthead"></span>
          <br/> <br/>
            <span className={styles.about} id="about"></span>
          </div>
        </div>
        <div id="footer" className={styles.footer}>
            19 Keys | ALL RIGHTS RESERVED.
        </div>
        </div>
      </>
    )
  }
}