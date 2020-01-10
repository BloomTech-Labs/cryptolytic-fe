import React from "react";
import TableData from "./TableData";
import { getIcons } from "../../Utilities/tradingPairIcons";

import { makeStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  tablerow: {
    background: "rgba(0, 0, 0, 0.8)",
    color: "rgb(255, 255, 255)"
  },
  positive: {
    color: "green",
    padding: "0.5em 0",
    borderBottom: "1px solid rgba(35, 32, 44, 0.9)"
  },
  negative: {
    color: "red",
    padding: "0.5em 0",
    borderBottom: "1px solid rgba(35, 32, 44, 0.9)"
  }
});

const TableDataRow = ({ dataRow }) => {
  console.log(dataRow, `arb`);
  const classes = useStyles();

  dataRow.buy_exchange = dataRow.buy_exchange
    .replace(/\_/, " ")
    .split(" ")
    .map(word => {
      return word.charAt(0).toUpperCase() + word.substr(1);
    })
    .join(" ");

  dataRow.sell_exchange = dataRow.sell_exchange
    .replace(/\_/, " ")
    .split(" ")
    .map(word => {
      return word.charAt(0).toUpperCase() + word.substr(1);
    })
    .join(" ");

  dataRow.trading_pair = dataRow.trading_pair.toUpperCase();
  dataRow.trading_pair = dataRow.trading_pair.replace(/\_/, "/");

  if (String(dataRow.price_difference).length <= 3) {
    dataRow.price_difference =
      "$ " + String(dataRow.price_difference.toFixed(2));
  } else {
    dataRow.price_difference = "$ " + String(dataRow.price_difference);
  }

  if (String(dataRow.arbritage_percentage).length <= 3) {
    dataRow.arbritage_percentage = dataRow.arbritage_percentage.toFixed(2);
  }

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
