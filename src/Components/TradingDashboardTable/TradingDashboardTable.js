import React, { useState, useEffect } from "react";
import axios from "axios";
import TableHeaderRow from "./TableHeaderRow";
import TableDataRow from "./TableDataRow";
import { makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";

const useStyles = makeStyles({
  table: {
    marginLeft: "20vw",
    width: "70%",
    background: "rgba(35, 32, 44, 0.8)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  },
  tableContainer: {
    maxHeight: 850
  },
  tableHeaderStyle: {}
});

const TradingDashboardTable = () => {
  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://cryptolytic-starter.herokuapp.com/trading")
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  const tradingData = data.map(obj => {
    let {
      exchange,
      trade_time,
      trade_price,
      period,
      percentage,
      trading_pair
    } = obj;

    let date, time;
    trade_time = new Date(obj.trade_time * 1000);

    date = trade_time.toLocaleDateString();
    time = trade_time.toLocaleTimeString();

    console.log(date);
    return {
      date,
      time,
      period,
      exchange,
      trading_pair,
      trade_price,
      percentage
    };
  });

  const headerData = [];

  for (let key in tradingData[0]) {
    headerData.push(key);
  }

  return (
    <TableContainer className={classes.tableContainer}>
      <Table stickyHeader aria-label='sticky table' className={classes.table}>
        <TableHead className={classes.tableHeaderStyle}>
          <TableHeaderRow headerData={headerData} />
        </TableHead>
        <TableBody className={classes.tableBody}>
          {tradingData.map(items => (
            <TableDataRow className={classes.tableDataRow} dataRow={items} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TradingDashboardTable;
