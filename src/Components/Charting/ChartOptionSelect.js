import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SelectDropdown from "./SelectDropdown";
import ToggleSwitch from "../../Components/Charting/ToggleSwitch";
import { connect } from "react-redux";
import {
  getChartData,
  getCompareChartData,
  setToggled
} from "../../store/actions";

const useStyles = makeStyles({
  form: {
    display: "flex",
    justifyContent: "flex-start",
    margin: "2em 0 2em 28.5em",
    padding: "0.5em",
    width: "35%",
    backgroundColor: "rgba(35, 32, 44, 0.8)",
    borderRadius: "5px"
  }
});

const ChartOptionSelect = props => {
  const classes = useStyles();
  const { options, compareOptions, toggled } = props;

  // Exchanges that have candlestick data
  const [exchanges] = useState(["coinbase", "binance", "hitbtc", "bitfinex"]);

  // Binance only has BTC_USDT trading pair
  // All other exchanges have all trading pairs but BTC_USDT
  const [tradingPair] = useState(["btc_usd", "eth_btc", "btc_usdt"]);

  // Time frames for amount of candlestick data to view
  const [timeFrames] = useState(["Day", "Week", "Month"]);

  // When component mounts it will pass in the options/compareOptions ie. Exchanges, trading pair, time frame,
  // that is set as default in redux and call the action creators to fetch the data from api. It also watches for
  // changes of any of the options and fires off the action creator to fetch the new data.
  useEffect(() => {
    props.getChartData(options);
    props.getCompareChartData(compareOptions);
  }, [options, compareOptions]);

  const handleSubmit = event => {
    event.preventDefault();
    props.getChartData(options);
  };

  const handleCompareSubmit = event => {
    event.preventDefault();
    props.getCompareChartData(compareOptions);
  };

  console.log("switch>>>>>>", toggled);

  // If the switch is toggled by user to compare exchanges then the extra select drop-down for the second
  // exchange will render. If the switch is then toggled back to single exchange it with render just the
  // first exchange select drop-down.
  if (toggled) {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <form onSubmit={handleCompareSubmit} className={classes.form}>
          <SelectDropdown
            id={"exchangeLabel"}
            label={"Exchange 1"}
            selectId={"exchange"}
            data={exchanges}
            val={options.exchange}
          />
          <SelectDropdown
            id={"exchangeLabel2"}
            label={"Exchange 2"}
            selectId={"exchange"}
            data={exchanges}
            val={compareOptions.exchange}
          />
          <SelectDropdown
            id={"tradingPairLabel"}
            label={"Trading Pair"}
            selectId={"trading_pair"}
            data={tradingPair}
            val={options.trading_pair}
          />
          <SelectDropdown
            id={"timeFrameLabel"}
            label={"Time Frame"}
            selectId={"timeFrame"}
            data={timeFrames}
            val={options.timeFrame}
          />
        </form>
        <ToggleSwitch />
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <form onSubmit={handleSubmit} className={classes.form}>
          <SelectDropdown
            id={"exchangeLabel"}
            label={"Exchange"}
            selectId={"exchange"}
            data={exchanges}
            val={options.exchange}
          />
          <SelectDropdown
            id={"tradingPairLabel"}
            label={"Trading Pair"}
            selectId={"trading_pair"}
            data={tradingPair}
            val={options.trading_pair}
          />
          <SelectDropdown
            id={"timeFrameLabel"}
            label={"Time Frame"}
            selectId={"timeFrame"}
            data={timeFrames}
            val={options.timeFrame}
          />
        </form>
        <ToggleSwitch />
      </div>
    );
  }
};

const mapStateToProps = ({ project }) => {
  return {
    cryptoData: project.cryptoData,
    options: project.options,
    compareOptions: project.compareOptions,
    toggled: project.switchToggled
  };
};

export default connect(mapStateToProps, {
  getChartData,
  getCompareChartData,
  setToggled
})(ChartOptionSelect);
