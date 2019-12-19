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
    width: "80%",
    margin: "5rem auto",
    background: "rgba(35, 32, 44, 0.8)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px 10px 0px 0px"
  }
});

const ArbitrageDashboardTable = () => {
  const data = [
    {
      buy_exchange: "binance",
      sell_exchange: "coinbase_pro",
      trading_pair: "btc_eth",
      arbitrage_percentage: 0.02,
      trade_time: 1576537496,
      price_difference: 0.00012364
    },
    {
      buy_exchange: "binance",
      sell_exchange: "bitfinex",
      trading_pair: "btc_bnb",
      arbitrage_percentage: 0.07,
      trade_time: 1576537496,
      price_difference: 0.00034719
    },
    {
      buy_exchange: "binance",
      sell_exchange: "coinbase_pro",
      trading_pair: "btc_eur",
      arbitrage_percentage: 0.04,
      trade_time: 1576537496,
      price_difference: 0.000136841
    },
    {
      buy_exchange: "bitfinex",
      sell_exchange: "coinbase_pro",
      trading_pair: "btc_usd",
      arbitrage_percentage: 0.06,
      trade_time: 1576537496,
      price_difference: 0.0001369108
    },
    {
      buy_exchange: "binance",
      sell_exchange: "coinbase_pro",
      trading_pair: "btc_vet",
      arbitrage_percentage: 0.03,
      trade_time: 1576537496,
      price_difference: 0.0008103917
    },
    {
      buy_exchange: "bitfinex",
      sell_exchange: "coinbase_pro",
      trading_pair: "usd_xrp",
      arbitrage_percentage: 0.03,
      trade_time: 1576537496,
      price_difference: 0.0000136917
    },
    {
      buy_exchange: "bitfinex",
      sell_exchange: "binance",
      trading_pair: "btc_trx",
      arbitrage_percentage: 0.07,
      trade_time: 1576537496,
      price_difference: 0.0036912391
    },
    {
      buy_exchange: "coinbase_pro",
      sell_exchange: "bitfinex",
      trading_pair: "ltc_usd",
      arbitrage_percentage: 0.03,
      trade_time: 1576537496,
      price_difference: 0.0007369123
    },
    {
      buy_exchange: "bitfinex",
      sell_exchange: "coinbase_pro",
      trading_pair: "btc_bch",
      arbitrage_percentage: 0.07,
      trade_time: 1576537496,
      price_difference: 0.0000391364
    },
    {
      buy_exchange: "binance",
      sell_exchange: "bitfinex",
      trading_pair: "btc_ltc",
      arbitrage_percentage: 0.03,
      trade_time: 1576537496,
      price_difference: 0.00001369123
    },
    {
      buy_exchange: "bitfinex",
      sell_exchange: "coinbase_pro",
      trading_pair: "btc_usd",
      arbitrage_percentage: 0.06,
      trade_time: 1576537496,
      price_difference: 0.00018369184
    },
    {
      buy_exchange: "binance",
      sell_exchange: "bitfinex",
      trading_pair: "matic_usd",
      arbitrage_percentage: 0.02,
      trade_time: 1576537496,
      price_difference: 0.00006913613
    },
    {
      buy_exchange: "bitfinex",
      sell_exchange: "coinbase_pro",
      trading_pair: "btc_eth",
      arbitrage_percentage: 0.05,
      trade_time: 1576537496,
      price_difference: 0.0001698136
    },
    {
      buy_exchange: "binance",
      sell_exchange: "coinbase_pro",
      trading_pair: "eth_ltc",
      arbitrage_percentage: 0.03,
      trade_time: 1576537496,
      price_difference: 0.00006369813
    },
    {
      buy_exchange: "coinbase_pro",
      sell_exchange: "bitfinex",
      trading_pair: "matic_xmr",
      arbitrage_percentage: 0.02,
      trade_time: 1576537496,
      price_difference: 0.000236913
    },
    {
      buy_exchange: "binance",
      sell_exchange: "bitfinex",
      trading_pair: "dash_ltc",
      arbitrage_percentage: 0.02,
      trade_time: 1576537496,
      price_difference: 0.0003691321
    },
    {
      buy_exchange: "binance",
      sell_exchange: "bitfinex",
      trading_pair: "btc_dash",
      arbitrage_percentage: 0.07,
      trade_time: 1576537496,
      price_difference: 0.000631362114
    },
    {
      buy_exchange: "coinbase_pro",
      sell_exchange: "binance",
      trading_pair: "ltc_usd",
      arbitrage_percentage: 0.03,
      trade_time: 1576537496,
      price_difference: 0.00036124211
    },
    {
      buy_exchange: "bitfinex",
      sell_exchange: "coinbase_pro",
      trading_pair: "btc_xrp",
      arbitrage_percentage: 0.06,
      trade_time: 1576537496,
      price_difference: 0.000062136219
    },
    {
      buy_exchange: "binance",
      sell_exchange: "coinbase_pro",
      trading_pair: "ltc_btc",
      arbitrage_percentage: 0.05,
      trade_time: 1576537496,
      price_difference: 0.0003611362114
    },
    {
      buy_exchange: "coinbase_pro",
      sell_exchange: "bitfinex",
      trading_pair: "btc_usd",
      arbitrage_percentage: 0.04,
      trade_time: 1576537496,
      price_difference: 0.000813621485
    },
    {
      buy_exchange: "bitfinex",
      sell_exchange: "binance",
      trading_pair: "eth_usd",
      arbitrage_percentage: 0.02,
      trade_time: 1576537496,
      price_difference: 0.0005322146958
    },
    {
      buy_exchange: "binance",
      sell_exchange: "bitfinex",
      trading_pair: "xrp_usd",
      arbitrage_percentage: 0.03,
      trade_time: 1576537496,
      price_difference: 0.0000813662164
    },
    {
      buy_exchange: "bitfinex",
      sell_exchange: "coinbase_pro",
      trading_pair: "btc_usd",
      arbitrage_percentage: 0.07,
      trade_time: 1576537496,
      price_difference: 0.00085226614988
    }
  ];

  const arbitrageData = data.map(obj => {
    let {
      buy_exchange,
      sell_exchange,
      trading_pair,
      arbitrage_percentage,
      trade_time,
      price_difference
    } = obj;
  });

  const headerData = Object.keys(data[0]);

  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableHeaderRow headerData={headerData} />
        </TableHead>
        <TableBody>
          {data.map(dataRow => (
            <TableDataRow dataRow={dataRow} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ArbitrageDashboardTable;
