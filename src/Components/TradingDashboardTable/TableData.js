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
  }
});

const TableData = ({ item }) => {
  const classes = useStyles();

  return <td>{item}</td>;
};

export default TableData;
