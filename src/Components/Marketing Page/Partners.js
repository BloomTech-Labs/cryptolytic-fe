import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import exchangeOne from "../../../src/images/bitfinex_logo 1.svg";
import exchangeTwo from "../../../src/images/coinbase_logo.svg";
import exchangeThree from "../../../src/images/hitbtc_logo.svg";
import exchangeFour from "../../../src/images/kraken_logo.svg";
import exchangeFive from "../../../src/images/gemini_logo.svg";

import coinOne from "../../../src/images/btc logo.png";
import coinTwo from "../../../src/images/ltc logo.png";
import coinThree from "../../../src/images/z logo.png";
import coinFour from "../../../src/images/dash logo.png";
// import coinFive from "../../../src/images/bitc logo.png"
import coinSix from "../../../src/images/usd logo.png";
import coinSeven from "../../../src/images/eos logo.png";
import coinEight from "../../../src/images/ripple logo.png";
import coinNine from "../../../src/images/eth logo.png";
import coinTen from "../../../src/images/ethc coin.png";
import coinEleven from "../../../src/images/sia coin.png";

const useStyles = makeStyles({
  partnersContainer: {
    width: "100%",
    height: "70vh",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: "white"
  },
  partnersTitle: {
    fontSize: "2.8em",
    marginTop: "2em"
  },
  partnersTopRow: {
    width: "90%",
    display: "flex",
    justifyContent: "space-around"
  },
  partnersBottomRow: {
    width: "70%",
    height: "13%",
    display: "flex",
    justifyContent: "space-around"
  }
});

export default function Partners() {
  const classes = useStyles();
  return (
    <div className={classes.partnersContainer}>
      <h2 className={classes.partnersTitle}>Supported Exchanges</h2>
      <div className={classes.partnersTopRow}>
        <img src={exchangeOne} alt='Exchange One' />
        <img src={exchangeTwo} alt='Exchange Two' />
        <img src={exchangeThree} alt='Exchange Three' />
        <img src={exchangeFour} alt='Exchange Four' />
        <img src={exchangeFive} alt='Exchange Five' />
      </div>
      <div className={classes.partnersBottomRow}>
        <img src={coinOne} alt='Coin One' />
        <img src={coinTwo} alt='Coin Two' />
        {/* <img src={coinThree} /> */}
        <img src={coinFour} alt='Coin Four' />
        {/* <img src={coinFive} /> */}
        {/* <img src={coinSix} /> */}
        <img src={coinSeven} alt='Coin Seven' />
        <img src={coinEight} alt='Coin Eight' />
      </div>
    </div>
  );
}
