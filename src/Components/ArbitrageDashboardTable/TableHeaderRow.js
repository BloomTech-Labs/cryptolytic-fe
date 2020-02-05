import React from "react";
import TableHeader from "./TableHeader";

import { makeStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  tablerow: {
    background: "#23282D",
    color: "rgb(112, 112, 112)"
  }
});

const TableHeaderRow = ({ headerData }) => {
  headerData = headerData.map(header => {
    return header.replace(/_/, " ");
  });

  const classes = useStyles();

  return (
    <TableRow className={classes.tablerow}>
      {headerData.map(header => (
        <TableHeader header={header} />
      ))}
    </TableRow>
  );
};

export default TableHeaderRow;
