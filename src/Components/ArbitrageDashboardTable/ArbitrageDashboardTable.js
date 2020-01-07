import React, { useState, useEffect } from "react";
import TableHeaderRow from "./TableHeaderRow";
import TableDataRow from "./TableDataRow";
import axios from "axios";
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
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(255,255,255,1.0)",
      outline: "1px solid slategrey"
    }
  },
  tableContainer: {
    // maxHeight: 440
    maxHeight: 800
    // width: "100%",
    // maxWidth: "99vw"
  }
});

const ArbitrageDashboardTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://cryptolytic-starter.herokuapp.com/arbitrage")
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err.response));
  }, []);

  const arbitrageData = data.map(obj => {
    let {
      buy_exchange,
      sell_exchange,
      trading_pair,
      arbitrage_percentage,
      trade_time,
      price_difference
    } = obj;

    let date, time;
    trade_time = new Date(obj.trade_time * 1000);

    date = trade_time.toLocaleDateString();
    time = trade_time.toLocaleTimeString();

    return {
      date,
      time,
      buy_exchange,
      sell_exchange,
      trading_pair,
      price_difference,
      arbitrage_percentage
    };
  });

  const headerData = [];

  for (let key in arbitrageData[0]) {
    headerData.push(key);
  }

  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableHead>
          <TableHeaderRow headerData={headerData} />
        </TableHead>
        <TableBody>
          {arbitrageData.map(dataRow => (
            <TableDataRow dataRow={dataRow} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ArbitrageDashboardTable;
