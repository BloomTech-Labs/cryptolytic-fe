import React from "react";
import TableData from "./TableData";

import { makeStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  tablerow: {
    background: "rgba(0, 0, 0, 0.8)",
    color: "rgb(255, 255, 255)",
    borderBottom: "0.5px solid rgba(35, 32, 44, 0.8)"
  }
});

const TableDataRow = ({ dataRow }) => {
  const data = Object.values(dataRow);

  const classes = useStyles();

  return (
    <TableRow className={classes.tablerow}>
      {data.map(item => (
        <TableData item={item} />
      ))}
    </TableRow>
  );
};

export default TableDataRow;
