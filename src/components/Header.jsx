import React, { useState } from "react";
import "../pages/App.css";
import * as styles from "../pages/Home.module.css";
import { navigate } from "gatsby";
import * as auth from "../helpers/auth";

function jumpTo(link) {
  link.charAt(0) == "/" ? navigate(link) : (window.location.href = link);
}

const Header = (props) => {
  const [addy, setAddy] = useState(auth.getAddress());

  const [verify, setVerify] = useState();

  if (addy !== 0) {
    auth.getVerification().then((v) => {
      setVerify(v);
    });
  }

  function disconnectWallet() {
    auth.clearAddress();
    setAddy(0);
  }

  function connectWallet() {
    auth.connectAddress().then((addy) => {
      setAddy(addy);
/*
      window.ethereum.on("accountsChanged", function (accounts) {
        // Time to reload your interface with accounts[0]!
        window.sessionStorage.clear();
        connectWallet();
      });
      */
    });
  }

  return (
    <>
      <div id="header" className={styles.header}>
        <button onClick={() => jumpTo("/")} className={styles.headerlink}>
          HOME
        </button>

        <div className={styles.dropdown}>
          <button className={styles.headerlink}>MENU</button>
          <div className={styles.dropdowncontent}>
            {addy !== 0 ? (
              <>
                <div>
                  <small style={{ color: "#ffcc00" }}>
                    ...{addy.slice(-10)}
                  </small>
                </div>

                {verify != undefined ? (
                  <>
                    <button
                      style={{
                        border:
                          "1px solid " + (verify == true ? "green" : "red"),
                      }}
                      className={styles.headerlink}
                    >
                      {verify == true ? (
                        <small>VERIFIED ✅</small>
                      ) : (
                        <small
                          onClick={() =>
                            jumpTo("https://rarible.com/crownz/secondary")
                          }
                        >
                          NOT AUTHORIZED
                        </small>
                      )}
                    </button>
                    {verify == true ? (
                      <button
                        onClick={() => navigate("/claim")}
                        className={styles.headerlink}
                      >
                        Claim Items
                      </button>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </>
            ) : (
              ""
            )}

            <button
              onClick={() => jumpTo("/map")}
              className={styles.headerlink}
            >
              Mind Map
            </button>
            <button
              onClick={() => jumpTo("/about")}
              className={styles.headerlink}
            >
              About
            </button>
          </div>
        </div>
      </div>

      <div className={styles.headerright}>
        <button
          onClick={() => (addy !== 0 ? disconnectWallet() : connectWallet())}
          className={styles.walletlink}
        >
          {addy !== 0 ? "DISCONNECT" : "CONNECT WALLET"}
        </button>
      </div>
    </>
  );
};
export default Header;
