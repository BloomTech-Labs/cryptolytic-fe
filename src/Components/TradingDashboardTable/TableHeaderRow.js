import React from "react";
import TableHeader from "./TableHeader";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles({
  tablerow: {
    background: "#23282D",
    color: "rgb(112, 112, 112)"
  }
});

const TableHeaderRow = ({ headerData }) => {
  const classes = useStyles();

  headerData = headerData.map(header => {
    return header.charAt(0).toUpperCase() + header.substr(1);
  });

  return (
    <TableRow className={classes.tablerow}>
      {headerData.map(header => (
        <TableHeader className={classes.tableHead} header={header} />
      ))}
    </TableRow>
  );
};

export default TableHeaderRow;
