import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { getIcons } from "../Utilities/tradingPairIcons"

import axios from "axios";


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
              let styling = null
              //// if statements should be nested in array of strings or integers that try to match on each iteration
              //// Converts trading pair from btc_usd to "BTC/USD"
                props.tradingPairArray.map(ee => {
                  if(i === ee){
                  b = b.toUpperCase().replace(/\_/, "/");
                  let icons = getIcons(b)
                  b = <div className={classes.tradingPair}><img src={icons.icon1} className={classes.pairIcon}/><img src={icons.icon2} className={classes.pairIcon}/> {b} </div>
                  }
                })
                //// Converts buy_exchange and sell_exchange rows from "coinbase_pro" to "Coinbase Pro"
                props.exchangeArray.map(ee => {
                  if(i === ee)
                    b = b.toString().replace(/\_/, " ").split(" ").map(e => {
                      return e.charAt(0).toUpperCase() + e.substr(1);
                    }).join(" ")
                    /// should convert this into a reusable imported function
                    if(b === "Binance")
                      b = <p className={classes.binanceColor}>{b}</p>
                    if(b === "Coinbase Pro")
                      b = <p className={classes.coinbaseColor}>{b}</p>
                    if(b === "Bitfinex")
                      b = <p className={classes.bitfinexColor}>{b}</p>
                })
                props.fiatArray.map(ee => {
                  if(i === ee)
                b = <span className={classes.fiat}>$ {b.toFixed(2)}</span>
                })
                props.percentageArray.map(ee => {
                  if(i === ee)
                    if(b > 0)
                      b = <p style={{ color: 'green', width: '100%' }}>{b.toFixed(2)} %</p>
                    else if(b < 0)
                    b = <p style={{ color: 'red', width: '100%' }}>{b.toFixed(2)} %</p>
                  else
                  b = `${b.toFixed(2)} %`
                })
                  return <TableCell component="th" scope="row" align="center" className={classes.tableData}> {b} </TableCell>
                })}
          </TableRow>)
        :
          <h1>Loading</h1>}
    </TableBody>
    )
}