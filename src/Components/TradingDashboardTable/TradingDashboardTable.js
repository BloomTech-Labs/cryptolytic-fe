import React from "react";
import TableHeaderRow from "./TableHeaderRow";
import TableDataRow from "./TableDataRow";

import { makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";

const useStyles = makeStyles({
  table: {
    width: "50%",
    margin: "5rem auto",
    background: "rgba(35, 32, 44, 0.8)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  },
  tableContainer: {
    maxHeight: 700
  }
});

const TradingDashboardTable = () => {
  const classes = useStyles();

  const tradingData = [
    {
      exchange: "binance",
      trading_pair: "btc_usd",
      trade_time: 1576537495,
      period: 60,
      percentage: 0.1,
      trade_price: 0.02
    },
    {
      exchange: "binance",
      trading_pair: "btc_eth",
      trade_time: 1576538496,
      period: 60,
      percentage: -0.2,
      trade_price: 0.2
    },
    {
      exchange: "binance",
      trading_pair: "btc_bnb",
      trade_time: 1576538499,
      period: 60,
      percentage: 1.0,
      trade_price: 1.0
    },
    {
      exchange: "binance",
      trading_pair: "btc_eos",
      trade_time: 1576539796,
      period: 60,
      percentage: 1.2,
      trade_price: 1.2
    },
    {
      exchange: "binance",
      trading_pair: "btc_xrp",
      trade_time: 1576538400,
      period: 60,
      percentage: 2.2,
      trade_price: 2.2
    },
    {
      exchange: "binance",
      trading_pair: "btc_xmr",
      trade_time: 1576538414,
      period: 60,
      percentage: 3.0,
      trade_price: 3.0
    },
    {
      exchange: "binance",
      trading_pair: "btc_vet",
      trade_time: 1576538500,
      period: 60,
      percentage: -1.2,
      trade_price: 1.2
    },
    {
      exchange: "binance",
      trading_pair: "usd_eth",
      trade_time: 1576537496,
      period: 60,
      percentage: -0.5,
      trade_price: 0.5
    },
    {
      exchange: "binance",
      trading_pair: "usd_xrp",
      trade_time: 1577538496,
      period: 60,
      percentage: -0.2,
      trade_price: 0.2
    },
    {
      exchange: "binance",
      trading_pair: "usd_trx",
      trade_time: 1576538490,
      period: 60,
      percentage: -1.2,
      trade_price: 1.2
    },
    {
      exchange: "binance",
      trading_pair: "usd_bch",
      trade_time: 1576548470,
      period: 60,
      percentage: 2.2,
      trade_price: 2.2
    },
    {
      exchange: "binance",
      trading_pair: "usd_bnb",
      trade_time: 1576538480,
      period: 60,
      percentage: -1.2,
      trade_price: 1.2
    },
    {
      exchange: "binance",
      trading_pair: "usd_matic",
      trade_time: 1576538494,
      period: 60,
      percentage: 2.2,
      trade_price: 2.2
    },
    {
      exchange: "binance",
      trading_pair: "usd_link",
      trade_time: 1576538492,
      period: 60,
      percentage: 4.2,
      trade_price: 5.2
    },
    {
      exchange: "binance",
      trading_pair: "usd_tomo",
      trade_time: 1576538495,
      period: 60,
      percentage: 2.2,
      trade_price: 3.2
    },
    {
      exchange: "Coinbase Pro",
      trading_pair: "btc_usd",
      trade_time: 1576607897,
      period: 60,
      percentage: 1.6,
      trade_price: 6758.0
    },
    {
      exchange: "Coinbase Pro",
      trading_pair: "eos_usd",
      trade_time: 1576607897,
      period: 60,
      percentage: 1.01,
      trade_price: 405.12
    },
    {
      exchange: "Coinbase Pro",
      trading_pair: "xrp_usd",
      trade_time: 1576607897,
      period: 60,
      percentage: 2.06,
      trade_price: 1.05
    },
    {
      exchange: "Coinbase Pro",
      trading_pair: "dash_usd",
      trade_time: 1576607897,
      period: 60,
      percentage: 0.08,
      trade_price: 255.81
    },
    {
      exchange: "Coinbase Pro",
      trading_pair: "btc_ltc",
      trade_time: 1576607897,
      period: 60,
      percentage: 5.21,
      trade_price: 10.65
    },
    {
      exchange: "Coinbase Pro",
      trading_pair: "bch_usd",
      trade_time: 1576608323,
      period: 60,
      percentage: 4.2,
      trade_price: 708.35
    },
    {
      exchange: "Coinbase Pro",
      trading_pair: "btc_bch",
      trade_time: 1576608323,
      period: 60,
      percentage: 3.1,
      trade_price: 26.27
    },
    {
      exchange: "Coinbase Pro",
      trading_pair: "btc_dash",
      trade_time: 1576608323,
      period: 60,
      percentage: 2.21,
      trade_price: 6387.22
    },
    {
      exchange: "Coinbase Pro",
      trading_pair: "ltc_usd",
      trade_time: 1576608323,
      period: 60,
      percentage: 1.51,
      trade_price: 896.48
    },
    {
      exchange: "Coinbase Pro",
      trading_pair: "eth_usd",
      trade_time: 1576608323,
      period: 60,
      percentage: 1.36,
      trade_price: 202.45
    },
    {
      exchange: "Coinbase Pro",
      trading_pair: "btc_eth",
      trade_time: 1576607041,
      period: 60,
      percentage: 2.89,
      trade_price: 78.01
    },
    {
      exchange: "Coinbase Pro",
      trading_pair: "eth_ltc",
      trade_time: 1576607041,
      period: 60,
      percentage: 1.41,
      trade_price: 245.87
    },
    {
      exchange: "Coinbase Pro",
      trading_pair: "eth_dash",
      trade_time: 1576607041,
      period: 60,
      percentage: 3.11,
      trade_price: 196.77
    },
    {
      exchange: "Coinbase Pro",
      trading_pair: "btc_xrp",
      trade_time: 1576607041,
      period: 60,
      percentage: 9.19,
      trade_price: 7820.86
    },
    {
      exchange: "Coinbase Pro",
      trading_pair: "xmr_usd",
      trade_time: 1576607041,
      period: 60,
      percentage: 4.77,
      trade_price: 63.52
    },
    {
      exchange: "bitfinex",
      trading_pair: "btc_usd",
      trade_time: 1576606173,
      period: 60,
      percentage: 0.05,
      trade_price: 6500.02
    },
    {
      exchange: "bitfinex",
      trading_pair: "eth_usd",
      trade_time: 1576606173,
      period: 60,
      percentage: -0.1,
      trade_price: 178.02
    },
    {
      exchange: "bitfinex",
      trading_pair: "ltc_usd",
      trade_time: 1576606173,
      period: 60,
      percentage: -0.02,
      trade_price: 38.73
    },
    {
      exchange: "bitfinex",
      trading_pair: "matic_usd",
      trade_time: 1576606173,
      period: 60,
      percentage: -0.02,
      trade_price: 0.01227
    },
    {
      exchange: "bitfinex",
      trading_pair: "btc_usd",
      trade_time: 1576616250,
      period: 60,
      percentage: 0.05,
      trade_price: 6560.02
    },
    {
      exchange: "bitfinex",
      trading_pair: "eth_usd",
      trade_time: 1576616250,
      period: 60,
      percentage: 0.15,
      trade_price: 196.02
    },
    {
      exchange: "bitfinex",
      trading_pair: "ltc_usd",
      trade_time: 1576616250,
      period: 60,
      percentage: -0.03,
      trade_price: 35.62
    },
    {
      exchange: "bitfinex",
      trading_pair: "matic_usd",
      trade_time: 1576616250,
      period: 60,
      percentage: -0.04,
      trade_price: 0.01207
    },
    {
      exchange: "bitfinex",
      trading_pair: "btc_usd",
      trade_time: 1576626250,
      period: 60,
      percentage: -0.05,
      trade_price: 6530.02
    },
    {
      exchange: "bitfinex",
      trading_pair: "eth_usd",
      trade_time: 1576626250,
      period: 60,
      percentage: -0.1,
      trade_price: 180.06
    },
    {
      exchange: "bitfinex",
      trading_pair: "ltc_usd",
      trade_time: 1576626250,
      period: 60,
      percentage: 0.13,
      trade_price: 39.62
    },
    {
      exchange: "bitfinex",
      trading_pair: "matic_usd",
      trade_time: 1576626250,
      period: 60,
      percentage: 0.2,
      trade_price: 0.01807
    },
    {
      exchange: "bitfinex",
      trading_pair: "btc_usd",
      trade_time: 1576636250,
      period: 60,
      percentage: 0.04,
      trade_price: 6589.02
    },
    {
      exchange: "bitfinex",
      trading_pair: "eth_usd",
      trade_time: 1576636250,
      period: 60,
      percentage: 0.2,
      trade_price: 205.04
    },
    {
      exchange: "bitfinex",
      trading_pair: "ltc_usd",
      trade_time: 1576636250,
      period: 60,
      percentage: 0.18,
      trade_price: 48.62
    },
    {
      exchange: "bitfinex",
      trading_pair: "matic_usd",
      trade_time: 1576636250,
      period: 60,
      percentage: -0.13,
      trade_price: 0.01697
    }
  ];

  const headerData = Object.keys(tradingData[0]);

  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableHead>
          <TableHeaderRow headerData={headerData} />
        </TableHead>
        <TableBody>
          {tradingData.map(items => (
            <TableDataRow dataRow={items} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TradingDashboardTable;
