import React, { Component } from "react"
import './index.css';
import './App.css';
import * as styles from './Home.module.css'
import Header from '../components/Header'
import gsap from 'gsap'

import black from '../images/black.mp4'

import { Helmet } from "react-helmet"

export default class App extends Component {
  constructor() {
    super();

  }

  componentDidMount() {

    gsap.to("#vid", {
      duration: 5,
      filter: 'blur(0px)'
    });

    const vid = document.getElementById('vid')
    vid.addEventListener('suspend', () => {
      vid.play();
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
        <title>Home | Keys</title>
      </Helmet>
        <div style={{ backgroundColor: "#000", color: "#FFF" }} className={styles.bg}>
          <Header />
          <div id="overlay" style={{ paddingTop: '45vh' }} className={styles.overlay}>
            <h2 style={{opacity: '70%'}}>Welcome to Crownz Society</h2>
          </div>
          <video id="vid" className={styles.bgvideo} src={black} autoPlay loop muted playsInline />
          <div id="footer" className={styles.footer}>
            19 Keys | ALL RIGHTS RESERVED.
          </div>
        </div>
      </>
    )
  }
}
