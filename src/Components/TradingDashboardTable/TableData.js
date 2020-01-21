import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  binanceColor: {
    color: "rgb(78, 185, 255)",

  },
  coinbaseColor: {
    color: "rgb(83, 207, 215)",
 
  },
  bitfinex: {
    color: "rgb(98, 227, 171)",
  },
  positive: {
    color: "green",
  },
  negative: {
    color: "red"
  },
  tradingPair: {
    display: "flex",
    marginLeft: "33%",

  }
});

const TableData = ({ item, positive, negative, icon1, icon2 }) => {
  const classes = useStyles();

  if (positive && item >= 0) {
    return <td className={positive}>{item + " %"}</td>;
  } else if (negative && negative) {
    return <td className={negative}>{item + " %"}</td>;
  } else if (item === "Binance") {
    return <td className={classes.binanceColor}>{item}</td>;
  } else if (item === "Coinbase Pro") {
    return <td className={classes.coinbaseColor}>{item}</td>;
  } else if (item === "Bitfinex") {
    return <td className={classes.bitfinex}>{item}</td>;
  } else if (icon1 && icon2) {
    return (
      <td className={classes.tradingPair}>
        <img src={icon1} />
        <img src={icon2} />

        {item}
      </td>
    );
  } else {
    return <td>{item}</td>;
  }
};

export default TableData;
