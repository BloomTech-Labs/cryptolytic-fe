import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const data = [
  {
    title: "Bitfinex",
    Features: "",
    Access_to_arbitrage_dashboard: true,
    Trade_recommendations: true,
    Arbitrage_predictions: true,
    API_access: true,
    Downloadable_dataset: true,
    Email_recommendation_alerts: "Coming soon!",
    Trading_Pairs: "",
    color: "rgba(14, 177, 93, 0.8)",
    BCH_BTC: true,
    BCH_USD: true,
    BCH_USDT: true,
    BTC_USD: true,
    BTC_USDC: true,
    BTC_USDT: true,
    DASH_BTC: true
  },
  {
    title: "Coinbase Pro",
    features: "",
    Access_to_arbitrage_dashboard: true,
    Trade_recommendations: true,
    Arbitrage_predictions: true,
    API_access: true,
    Downloadable_dataset: true,
    Email_recommendation_alerts: "Coming soon!",
    Trading_Pairs: "",
    color: "rgba(16, 83, 236, 0.8)",
    BCH_BTC: true,
    BCH_USD: true,
    BCH_USDT: true,
    BTC_USD: true,
    BTC_USDC: true,
    BTC_USDT: true,
    DASH_BTC: true
  },
  {
    title: "Gemini",
    features: "",
    Access_to_arbitrage_dashboard: true,
    Trade_recommendations: true,
    Arbitrage_predictions: true,
    API_access: true,
    Downloadable_dataset: true,
    Email_recommendation_alerts: "Coming soon!",
    Trading_Pairs: "",
    color: "rgba(28, 221, 248, 0.8)",
    BCH_BTC: true,
    BCH_USD: true,
    BCH_USDT: true,
    BTC_USD: true,
    BTC_USDC: true,
    BTC_USDT: true,
    DASH_BTC: true
  },
  {
    title: "HitBTC",
    features: "",
    Access_to_arbitrage_dashboard: true,
    Trade_recommendations: true,
    Arbitrage_predictions: true,
    API_access: true,
    Downloadable_dataset: true,
    Email_recommendation_alerts: "Coming soon!",
    Trading_Pairs: "",
    color: "rgba(63, 172, 217, 0.8)",
    BCH_BTC: true,
    BCH_USD: true,
    BCH_USDT: true,
    BTC_USD: true,
    BTC_USDC: true,
    BTC_USDT: true,
    DASH_BTC: true
  },
  {
    title: "Kraken",
    features: "",
    Access_to_arbitrage_dashboard: true,
    Trade_recommendations: true,
    Arbitrage_predictions: true,
    API_access: true,
    Downloadable_dataset: true,
    Email_recommendation_alerts: "Coming soon!",
    Trading_Pairs: "",
    color: "rgba(87, 66, 214, 0.7)",
    BCH_BTC: true,
    BCH_USD: true,
    BCH_USDT: true,
    BTC_USD: true,
    BTC_USDC: true,
    BTC_USDT: true,
    DASH_BTC: true
  }
];

const useStyles = makeStyles({
  servicesFeaturesContainer: {
    width: "90%",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "1.6em",
    paddingBottom: "3em"
  },
  servicesFeaturesRow: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around"
  },
  servicesFeaturesHeadersContainer: {
    width: "20%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    fontSize: ".6em",
    textAlign: "right",
    flexWrap: "wrap",
    marginRight: "1em"
  },
  servicesFeaturesHeadersText: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    whiteSpace: "nowrap",
    lineHeight: "2em"
  },
  servicesFeaturesHeadersTitle: {
    marginTop: -20
  },
  servicesFeaturesHeadersFeatures: {
    fontSize: "1.4em",
    padding: 5,
    textDecoration: "bold"
  },
  servicesFeaturesHeadersTradingPair: {
    marginTop: 20,
    fontSize: "1.4em",
    textDecoration: "bold"
  },
  servicesFeaturesRowContainer: {
    display: "flex",
    flexDirection: "column",
    width: "14%",
    background: "white",
    borderRadius: 50
  },
  servicesFeatureRow: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderRadius: 50,
    padding: "1%"
  },
  servicesFeatureRowTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: ".6em",
    textAlign: "right",
    flexWrap: "wrap",
    whiteSpace: "nowrap"
  },
  servicesFeaturesRowText: {
    padding: 5,
    fontSize: "2em",
    lineHeight: "1em"
  },
  servicesFeaturesRowTextTitle: {
    position: "absolute",
    marginTop: -20,
    fontSize: "1.6em",
    padding: 5
  },
  servicesFeaturesRowTextFeatures: {
    padding: 5,
    marginTop: 10
  },
  servicesFeaturesRowTextEmail: {
    paddingBottom: 10,
    marginBottom: 30,
    marginTop: 10
  }
});

export default function ServicesFeatures() {
  const classes = useStyles();
  return (
    <div className={classes.servicesFeaturesContainer}>
      <h2>Features & Support</h2>
      <div className={classes.servicesFeaturesRow}>
        <div className={classes.servicesFeaturesHeadersContainer}>
          <div className={classes.servicesFeaturesHeadersText}>
            {Object.keys(data[0]).map(e =>
              e === Object.keys(data[0])[0] ? (
                // key for title is hidde+styling
                <span className={classes.servicesFeaturesHeadersTitle}></span>
              ) : e === Object.keys(data[0])[1] ? (
                // key for features formatting+styling
                <span className={classes.servicesFeaturesHeadersFeatures}>
                  {e.replace(/_/g, " ")}
                </span>
              ) : e === Object.keys(data[0])[8] ? (
                // key for tradingPair formatting+styling
                <span className={classes.servicesFeaturesHeadersTradingPair}>
                  {e.replace(/_/g, " ")}
                </span>
              ) : e === Object.keys(data[0])[9] ? (
                // key for color is hidden
                (e = null)
              ) : (
                <span style={{ padding: 5 }}>{e.replace(/_/g, " ")}</span>
              )
            )}
          </div>
        </div>
        {data.map((e, i) => (
          <div className={classes.servicesFeaturesRowContainer}>
            <div
              style={{ background: e.color }}
              className={classes.servicesFeatureRow}
            >
              {Object.values(e).map((ee, ii) => (
                <div className={classes.servicesFeatureRowTextContainer}>
                  {ee === true ? (
                    <span className={classes.servicesFeaturesRowText}>✔</span>
                  ) : ee === false ? (
                    <span className={classes.servicesFeaturesRowText}>-</span>
                  ) : ee === Object.values(e)[0] ? (
                    <span className={classes.servicesFeaturesRowTextTitle}>
                      {ee}
                    </span>
                  ) : ee === Object.values(e)[1] ? (
                    <span className={classes.servicesFeaturesRowTextFeatures}>
                      {ee}
                    </span>
                  ) : ee === Object.values(e)[7] ? (
                    <span className={classes.servicesFeaturesRowTextEmail}>
                      {ee}
                    </span>
                  ) : ee === Object.values(e)[9] ? (
                    <span></span>
                  ) : (
                    <span>{ee}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
