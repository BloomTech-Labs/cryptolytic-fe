import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  binanceColor: {
    color: "rgb(78, 185, 255)"
  },
  coinbaseColor: {
    color: "rgb(83, 207, 215)"
  },
  bitfinex: {
    color: "rgb(98, 227, 171)"
  },
  positive: {
    color: "green"
  },
  negitive: {
    color: "red"
  }
});

const TableData = ({ item }) => {
  const classes = useStyles();

  if (item === "Binance") {
    return <td className={classes.binanceColor}>{item}</td>;
  } else if (item === "Coinbase Pro") {
    return <td className={classes.coinbaseColor}>{item}</td>;
  } else if (item === "Bitfinex") {
    return <td className={classes.bitfinex}>{item}</td>;
  } else {
    return <td>{item}</td>;
  }
};

export default TableData;
