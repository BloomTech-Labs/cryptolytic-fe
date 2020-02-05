import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import background from "../../../src/images/Vector 1.png";

import featureOne from "../../../src/images/artboard_1 (1) 2.png";
import featureTwo from "../../../src/images/arb graphic.png";
import featureThree from "../../../src/images/Crypto_compute (1) 1.png";
import featureFour from "../../../src/images/cryptocurrency-hero 1.png";

const data = [
  {
    title: "Arbitrage Forecasts",
    subTitle:
      "Finding opportunities to profit in exciting cryptocurrency markets doesn’t have to be difficult. Introducing Cryptolytic’s Arbitrage trading strategy, which provides users with in-advance, lower risk, profitable trade suggestions.",
    image: featureOne,
    reverse: false
  },
  {
    title: "What is arbitrage?",
    subTitle:
      "Arbitrage is the practice of taking advantage of price discrepancies in different markets. When an arbitrage opportunity exists, you could purchase an item from the lower priced market, and sell in the higher priced market simultaneously to make a profit.  Arbitrage commonly occurs in financial markets and is a completely legal trading strategy for cryptocurrencies.",
    image: featureTwo,
    reverse: true
  },
  {
    title: "Trade Recommendations",
    subTitle:
      "Cryptolytic’s Trade Recommender provides users with advance insights into market movements based off of millions of data points and an assortment of technical indicators. Take more control of your investments today by incorporating Cryptolytic’s machine learning algorithms into your strategy.",
    image: featureThree,
    reverse: false
  }
];

const useStyles = makeStyles({
  homeFeatureContainer: {
    width: "100%",
    height: "300vh",
    backgroundImage: `url("${background}")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    marginTop: "-12vh",
    color: "white",
    fontFamily: "Titillium Web",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "29px",
    textShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)"
  },
  homeFeatureRow: {
    width: "100%",
    height: "50vh",
    display: "flex",
    alignItems: "center",
    padding: "8vh 0"
  },
  homeFeatureRowImage: {
    width: "60%",
    display: "flex"
  },
  homeFeatureRowText: {
    width: "60%",
    textAlign: "left",
    display: "flex"
  },
  homeFeatureRowTitle: {
    fontSize: "45px",
    lineHeight: "45px",
    letterSpacing: "0.03em"
  },
  homeFeatureLastRow: {
    width: "100%",
    height: "50vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "5vh 0"
  },
  homeFeatureLastRowText: {
    width: "30%",
    textAlign: "left",
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: "10vw"
  },
  homeFeatureLastRowTitle: {
    fontSize: "45px",
    lineHeight: "45px",
    letterSpacing: "0.03em",
    position: "absolute"
  },
  homeFeatureLastRowSubtitle: {
    marginTop: "6em"
  },
  homeFeatureLastRowImage: {
    width: "70%",
    display: "flex",
    justifyContent: "flex-start"
  }
});
export default function HomeFeatures() {
  const classes = useStyles();
  let reverse = {
    row: "",
    leftJustify: "",
    rightJustify: "",
    textAlign: ""
  };

  return (
    <div className={classes.homeFeatureContainer}>
      <div style={{ paddingTop: "30vh" }}>
        {data.map(e => {
          if (e.reverse) {
            reverse.row = "row-reverse";
            reverse.leftJustify = "flex-start";
            reverse.rightJustify = "flex-end";
            reverse.textAlign = "right";
          } else {
            reverse.row = "row";
            reverse.leftJustify = "flex-end";
            reverse.rightJustify = "flex-start";
            reverse.textAlign = "left";
          }
          return (
            <div
              className={classes.homeFeatureRow}
              style={{ flexDirection: reverse.row }}
            >
              <div
                className={classes.homeFeatureRowImage}
                style={{ justifyContent: reverse.leftJustify }}
              >
                <img src={e.image} alt={e.title} />
              </div>
              <div
                className={classes.homeFeatureRowText}
                style={{
                  justifyContent: reverse.rightJustify,
                  textAlign: reverse.textAlign
                }}
              >
                <div>
                  <h2 className={classes.homeFeatureRowTitle}>{e.title}</h2>
                  <p>{e.subTitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.homeFeatureLastRow}>
        <div className={classes.homeFeatureLastRowText}>
          <div>
            <h2 className={classes.homeFeatureLastRowTitle}>
              Automate your trading process
            </h2>
            <p className={classes.homeFeatureLastRowSubtitle}>
              The cryptocurrency market doesn’t sleep and neither should your
              money! Connect the Cryptolytic API to a trading bot and act on
              trading and arbitrage opportunities automatically 24/7!
            </p>
          </div>
        </div>
        <div className={classes.homeFeatureLastRowImage}>
          <img src={featureFour} alt='Cryptocurrency Hero' />
        </div>
      </div>
    </div>
  );
}
