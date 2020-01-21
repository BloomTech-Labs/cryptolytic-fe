import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getChartData, toggleView } from "../../actions";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


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
  },
  textField: {
    width: "200px",
    margin: "0 5px",
    padding: "0.5em",
    border: "1px solid #62e3ab",
    borderRadius: "5px",
    textAlign: "center"
  }
});

const ChartViewSwitch = withStyles(theme => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},

}))(Switch);


const ChartOptionSelect = props => {
  const { exchange, trading_pair, timeFrame } = props;
  const [fields, setFields] = useState({
    exchange: "coinbase",
    trading_pair: "btc_usd",
    timeFrame: "Week"
  });

  useEffect(() => {
    props.getChartData(fields);
  }, [fields]);

  
  const chartViewChange = (event) => {
    console.log(event.target.value);
   props.toggleView(event.target.checked)
 };

  const handleChanges = event => {
    console.log("event>>>>>>", event.target.id);

    let newFields;
    switch (event.target.id) {
      case "exchange":
        const exchange = event.target.value.toLowerCase();
        newFields = { ...fields, exchange };
        setFields(newFields);
        break;
      case "tradingPair":
        const trading_pair = event.target.value.toLowerCase().replace("/", "_");
        newFields = { ...fields, trading_pair };
        setFields(newFields);
        break;
      case "timeFrame":
        newFields = { ...fields, timeFrame: event.target.value };
        setFields(newFields);
        break;
    }
  };

 

  const handleSubmit = event => {
    event.preventDefault();
    props.getChartData(fields);
  };

  console.log("field>>>>>>", fields);

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


    <Typography component="span">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>Off</Grid>
          <Grid item>
            <ChartViewSwitch
              checked={props.comparativeView}
              onChange={chartViewChange}
              // value=
            />
           </Grid>
          <Grid item>On</Grid>
        </Grid>
      </Typography>


    </form>
  );
};

const mapStateToProps = state => {
  return {
    cryptoData: state.cryptoData,
    comparativeView: state.comparativeView
  };
};

export default connect(mapStateToProps, { getChartData, toggleView })(ChartOptionSelect);
