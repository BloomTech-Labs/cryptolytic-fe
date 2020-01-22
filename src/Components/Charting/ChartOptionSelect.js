import React, { useEffect } from "react";
import SelectDropdown from "./SelectDropdown";
import { connect } from "react-redux";
import { getChartData, getCompareChartData, setToggled } from "../../actions";

const exchanges = ["coinbase", "binance", "hitbtc", "bitfinex"];
const tradingPair = ["btc_usd", "eth_btc"];
const timeFrames = ["Day", "Week", "Month"];

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
  const { options, compareOptions, toggled } = props;

<<<<<<< HEAD
=======

  // useEffect(() => {
  //   props.getCompareChartData(compareOptions);
  // }, [compareOptions]);

>>>>>>> 9b317d604fc5b1bea441c25da1c5d1f542494496
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
    );
  } else {
    return (
      <form onSubmit={handleSubmit} style={{ margin: "2em 0 2em 20em" }}>
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
