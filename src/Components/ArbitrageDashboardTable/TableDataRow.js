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
  const classes = useStyles();

  dataRow.buy_exchange =
    dataRow.buy_exchange.charAt(0).toUpperCase() +
    dataRow.buy_exchange.substr(1);
  dataRow.sell_exchange =
    dataRow.sell_exchange.charAt(0).toUpperCase() +
    dataRow.sell_exchange.substr(1);
  dataRow.trading_pair = dataRow.trading_pair.toUpperCase();
  dataRow.trading_pair = dataRow.trading_pair.replace(/\_/, "/");

  const data = Object.values(dataRow);
  return (
    <TableRow className={classes.tablerow}>
      {data.map(item => (
        <TableData item={item} />
      ))}
    </TableRow>
  );
};

export default TableDataRow;
