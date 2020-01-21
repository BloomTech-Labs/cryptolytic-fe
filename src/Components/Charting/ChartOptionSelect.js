import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const exchanges = ["Coinbase", "Binance", "HITBTC", "Bitfinex"];
const tradingPair = ["BTC/USD", "ETH/BTC"];
const range = ["Day", "Week", "Month"];

const useStyles = makeStyles({
  select: {
    width: "200px",
    margin: "0 5px",
    padding: "0.5em",
    border: "1px solid #62e3ab",
    borderRadius: "5px",
    textAlign: "center"
  },
  label: {
    width: "100%",
    padding: "0.5em",
    color: "#62e3ab"
  }
});




const ChartOptionSelect = () => {

const [ fields, setFields ] = useState({exchange: 'Coinbase', trading_pair: 'BTC/USD', timeFrame: 'Day' });


const handleChanges = (event) => {

 console.log("event>>>>>>", event.target.id)

  let newFields; 
  switch ( event.target.id ) {
    case "exchange":
      newFields = { ...fields, exchange: event.target.value } 
      setFields(newFields)
      break;
    case "tradingPair":
      newFields = { ...fields, trading_pair: event.target.value } 
      setFields(newFields)
      break;
    case "timeFrame":
      newFields = { ...fields, timeFrame: event.target.value } 
      setFields(newFields)
      break;
  }

};

const handleSubmit = (event) => {
  event.preventDefault();
  // formSubmit(fields);

};



console.log("field>>>>>>", fields)

  const classes = useStyles();




  return (
    <form onSubmit={handleSubmit} style={{ margin: "2em 0 2em 20em" }}>
      <FormControl className={classes.select}>
        <InputLabel id='exchangeLabel' className={classes.label}>
          Exchange
        </InputLabel>
        <Select
          labelId='exchangeLabel'
          id='exchange'
          native
          style={{ color: "#fff" }}
          // value={exchange}
          onChange={handleChanges}
        >
          {exchanges.map(ex => {
            return (
              <option
                key={ex}
                value={ex}
                style={{ borderRadius: "5px", color: "#000" }}
              >
                {ex}
              </option>
            );
          })}
        </Select>
      </FormControl>

      <FormControl className={classes.select}>
        <InputLabel id='tradingPairLabel' className={classes.label}>
          Trading Pair
        </InputLabel>
        <Select
          labelId='tradingPairLabel'
          id='tradingPair'
          native
          style={{ color: "#fff" }}
          // value={exchange}
          onChange={handleChanges}
        >
          {tradingPair.map(tp => {
            return (
              <option
                key={tp}
                value={tp}
                style={{ borderRadius: "5px", color: "#000" }}
              >
                {tp}
              </option>
            );
          })}
        </Select>
      </FormControl>
      <FormControl className={classes.select}>
        <InputLabel id='timeFrameLabel' className={classes.label}>
          Range
        </InputLabel>
        <Select
          labelId='timeFrameLabel'
          id='timeFrame'
          native
          style={{ color: "#fff" }}
          // value={exchange}
          onChange={handleChanges}
        >
          {range.map(r => {
            return (
              <option
                key={r}
                value={r}
                style={{ borderRadius: "5px", color: "#000" }}
              >
                {r}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </form>
  );
};

export default ChartOptionSelect;
