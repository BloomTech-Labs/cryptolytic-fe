import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { getIcons } from "../Utilities/tradingPairIcons"

const useStyles = makeStyles({
    tableRow: {
        background: 'rgba(0, 0, 0, 0.8)',
        borderBottom: '1px solid rgba(35, 32, 44, 0.9)'
      },
      tableCell: {
        padding: '0.5em 0',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      },
      tableData: {
        color: 'rgb(255, 255, 255)',
        borderBottom: '1px solid rgba(35, 32, 44, 0.9)',
      },
      tradingPair: {
        display: 'flex',
        alignSelf: 'flex-start',
        alignItems: 'center',
        width: '80px'
      },
      pairIcon: {
        padding: '5px'
      },
      binanceColor: {
        color: "rgb(78, 185, 255)",
      },
      coinbaseColor: {
        color: "rgb(83, 207, 215)",
      },
      bitfinexColor: {
        color: "rgb(98, 227, 171)",
      },
      fiat: {
        whiteSpace: 'nowrap'
      }
  });

export default function DashboardTableRow(props) {
    const classes = useStyles();

    return(
    <TableBody className={classes.tableBody}>
        {props.loading.formatData ?
          props.data.map(e => 
          <TableRow className={classes.tableRow}>
            {Object.values(e).map((b, i) => {
              //// if statements should be nested in array of strings or integers that try to match on each iteration
              //// Converts trading pair from btc_usd to "BTC/USD"
                props.tradingPairArray.forEach(ee => {
                  if(i === ee){
                  b = b.toUpperCase().replace(/\_/, "/");
                  let icons = getIcons(b)
                  b = <div className={classes.tradingPair}><img src={icons.icon1} className={classes.pairIcon}/><img src={icons.icon2} className={classes.pairIcon}/> {b} </div>
                  }
                })
                // Converts buy_exchange and sell_exchange rows from "coinbase_pro" to "Coinbase Pro"
                props.exchangeArray.forEach(ee => {
                  if(i === ee)
                    b = b.toString().replace(/\_/, " ").split(" ").map(e => {
                      return e.charAt(0).toUpperCase() + e.substr(1);
                    }).join(" ")
                    // should convert this into a reusable imported function
                    if(b === "Binance")
                      b = <p className={classes.binanceColor}>{b}</p>
                    if(b === "Coinbase Pro")
                      b = <p className={classes.coinbaseColor}>{b}</p>
                    if(b === "Bitfinex")
                      b = <p className={classes.bitfinexColor}>{b}</p>
                    if(b === "Gemini")
                      b = <p className={classes.coinbaseColor}>{b}</p>
                    if(b === "Kraken")
                      b = <p style={{ color: 'purple'}}>{b}</p>
                    if(b === "Hitbtc")
                      b = <p style={{ color: 'orange' }}>{b}</p>
                    if(b === "Poloniex")
                      b = <p style={{ color: 'yellow' }}>{b}</p>
                })
                // Converts integer to display only up to the hundredths (rounded) ex: 10.1070589238 = $10.11
                props.fiatArray.forEach(ee => {
                  if(i === ee)
                b = <span className={classes.fiat}>$ {b.toFixed(2)}</span>
                })
                // Converts integer >= 1 million AND 1 billion to shorter readable format 
                props.largeNumberArray.forEach(ee => {
                  if(i === ee)
                    if(Math.abs(b) > 999,999 && Math.abs(b) < 1000000000) 
                      return b = Math.sign(b)*((Math.abs(b)/1000000).toFixed(1)) + " M"
                    else if(Math.abs(b) > 999,999,999) 
                      return b = Math.sign(b)*((Math.abs(b)/1000000000).toFixed(1)) + " B"
                })
                // Converts string to all caps for ticker symbols (btc = BTC)
                props.tickerArray.forEach(ee => {
                  if(i === ee)
                    b = b.toUpperCase();
                })
                // Converts and styles datascience output into strings (Gain and Loss) instead of (-1.0 and 1.0)
                props.predictionsArray.forEach(ee => {
                  if(i === ee)
                    if(b === "1")
                    b = <p style={{  color: 'green' }}>Gain</p>
                    if(b === "-1")
                    b = <p style={{ color: 'red' }}>Loss</p>
                })
                // Converts and styles percentage gain/loss into styled ones
                props.percentageArray.forEach(ee => {
                  if(i === ee)
                    if(b > 0)
                      b = <p style={{ color: 'green' }}>{b.toFixed(2)} %</p>
                    else if(b < 0)
                      b = <p style={{ color: 'red' }}>{b.toFixed(2)} %</p>
                    else
                    b = `${b.toFixed(2)} %`
                  })
                // Add new formatter here
                /////////////////////////
                  return <TableCell component="th" scope="row" align="center" className={classes.tableData}> {b} </TableCell>
                })}
          </TableRow>)
        :
          <></>}
    </TableBody>
    )
}