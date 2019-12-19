import React from "react";
import TableHeaderRow from "./TableHeaderRow";
import TableDataRow from "./TableDataRow";

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

  const headerData = Object.key(data[0]);

  return (
    <div>
      <table>
        <div>
          <TableHeaderRow headerData={headerData} />
        </div>
        <div>
          {data.map(item => {
            <TableDataRow items={item} />;
          })}
        </div>
      </table>
    </div>
  );
};

export default ArbitrageDashboardTable;
