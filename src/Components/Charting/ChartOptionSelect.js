import React, { useEffect } from "react";
import SelectDropdown from "./SelectDropdown";
import ToggleChartSwitch from "./ToggleSwitch";
import { connect } from "react-redux";
import { getChartData, getCompareChartData, setToggled } from "../../actions";

const exchanges = ["Coinbase", "Binance", "HITBTC", "Bitfinex"];
const tradingPair = ["BTC/USD", "ETH/BTC"];
const timeFrames = ["Day", "Week", "Month"];

const ChartOptionSelect = props => {
  const { options, compareOptions, toggled } = props;

  // useEffect(() => {
  //   props.getCompareChartData(compareOptions);
  // }, [compareOptions]);

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

  if (toggled) {
    return (
      <form onSubmit={handleCompareSubmit} style={{ margin: "2em 0 2em 20em" }}>
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
          selectId={"tradingPair"}
          data={tradingPair}
        />
        <SelectDropdown
          id={"timeFrameLabel"}
          label={"Time Frame"}
          selectId={"timeFrame"}
          data={timeFrames}
        />
        <ToggleChartSwitch />
      </form>
    );
  } else {
    return (
      <form onSubmit={handleSubmit} style={{ margin: "2em 0 2em 20em" }}>
        <SelectDropdown
          id={"exchangeLabel"}
          label={"Exchange"}
          selectId={"exchange"}
          data={exchanges}
        />
        <SelectDropdown
          id={"tradingPairLabel"}
          label={"Trading Pair"}
          selectId={"tradingPair"}
          data={tradingPair}
        />
        <SelectDropdown
          id={"timeFrameLabel"}
          label={"Time Frame"}
          selectId={"timeFrame"}
          data={timeFrames}
        />
        <ToggleChartSwitch />
      </form>
    );
  }
};

const mapStateToProps = state => {
  return {
    cryptoData: state.cryptoData,
    options: state.options,
    compareOptions: state.compareOptions,
    toggled: state.switchToggled
  };
};

export default connect(mapStateToProps, {
  getChartData,
  getCompareChartData,
  setToggled
})(ChartOptionSelect);
