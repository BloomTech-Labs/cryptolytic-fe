import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  headings: {
    padding: "0.5em 0",
    position: "sticky",
    top: 0,
    background: "#191E23",

    "@media(max-width: 1600px)": {
      padding: "1em"
    }
  }
});

const TableHeader = ({ header }) => {
  const classes = useStyles();

  header = header
    .split(" ")
    .map(word => {
      return word.charAt(0).toUpperCase() + word.substr(1);
    })
    .join(" ");

  return <th className={classes.headings}>{header}</th>;
};

export default TableHeader;
