import React from "react";
import TableData from "./TableData";
import { getIcons } from "../../Utilities/tradingPairIcons";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  tablerow: {
    background: "rgba(0, 0, 0, 0.8)",
    color: "rgb(255, 255, 255)",
    borderBottom: "0.5px solid rgba(35, 32, 44, 0.8)"
  },
  positive: {
    color: "green"
  },
  negative: {
    color: "red"
  }
});

const TableDataRow = ({ dataRow }) => {
  const classes = useStyles();

  dataRow.exchange =
    dataRow.exchange.charAt(0).toUpperCase() + dataRow.exchange.substr(1);
  dataRow.trading_pair = dataRow.trading_pair.toUpperCase();
  dataRow.trading_pair = dataRow.trading_pair.replace(/\_/, "/");

  const data = Object.values(dataRow);

  const icons = getIcons(dataRow.trading_pair);

  return (
    <TableRow className={classes.tablerow}>
      {data.map((item, i) => {
        if (i === 6) {
          return (
            <TableData
              item={item}
              positive={classes.positive}
              negative={classes.negative}
            />
          );
        } else if (i === 4) {
          return (
            <TableData item={item} icon1={icons.icon1} icon2={icons.icon2} />
          );
        }
        return <TableData item={item} />;
      })}
    </TableRow>
  );
};

export default TableDataRow;
