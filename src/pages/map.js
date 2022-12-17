import React, { Component } from "react"
import './index.css';
import './App.css';
import * as styles from './Home.module.css'
import Header from '../components/Header'
import gsap from 'gsap'

import { Helmet } from "react-helmet"


export default class App extends Component {
  constructor() {
    super()

  }


  componentDidMount() {


    gsap.to("#card1", {
      opacity: 1,
      duration: 1,

    });

    gsap.to("#card2", {
      delay: 1,
      opacity: 1,
      duration: 1,

    });

    gsap.to("#card3", {
      delay: 2,
      opacity: 1,
      duration: 1,

    });



  }

  render() {

    return (
      <>

        <Helmet>
          <link rel="apple-touch-icon" sizes="180x180" href="../images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="../images/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="theme-color" content="#ffffff" />
          <title>Mind Map | Keys</title>
        </Helmet>
        <div style={{ backgroundColor: "#000", color: "#FFF" }} className={styles.bg}>
        <Header />
          <div id="overlay" style={{
            backgroundColor: 'inherit',
            color: 'inherit'
          }} className={styles.overlay}>
            <div id="card1" className={styles.maxboxcard}>
              <h2> CrownZ Society Mission Statement</h2>
              <h7>(click to expand)</h7>
              <h5>CrownZ society is a collective focused on cultivating enlightenment in the human family. With cosmic symbols of Sun, Moon and Stars that represent your universal power, we align ourselves with the purpose of elevating the collective psyche. Our mission is to raise the level of consciousness in each Crown bearer while connecting them with a tribe of like-minded, like-spirited, individuals. We appeal to thinkers, creatives, and paradigm shifters driven by purpose.</h5>
            </div>

            <div id="card2" className={styles.boxcard}>
              <h3>DIGITAL SOCIETY</h3>
              <h6>CrownZ NFT (available)
                <br />
                <br />
                The Crown is recognized worldwide and each of our members are CrownZ Holders. This token serves as a proof of membership and grants exclusive access to CrownZ Society.
                IN PROGRESS
                <br />
                <br />
                Exclusive Content:
                <br />
                As an example of productivity and execution, 19Keys works around the clock architecting, creating and packaging informative and applicable content to deliver consistently.

                <br />
                <br />
                Gaming:
                <br />
                Our developer team is building interactive user experiences for our members to learn from and engage in.
              </h6>
            </div>

            <div id="card3" className={styles.boxcard}>
              <h3>PHYSICAL SOCIETY</h3>
              <h6>Physical CrownZ (available)
                <br />
                <br />
                Clothing & Collectibles (IN PROGRESS)
                <br />
                <br />
                High Level Attire and Collectible items are essential in how we represent ourselves as a collective. We are constantly designing new options fit for a Royal Society.
                <br />
                <br />
                Events
                <br />
                We are building a calendar for retreats, lectures, concerts, signings, pop ups, workshops and more as we establish real world connections amongst our community.
              </h6>
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
