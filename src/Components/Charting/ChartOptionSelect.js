import React, { useEffect, useState } from "react";
import SelectDropdown from "./SelectDropdown";
import { connect } from "react-redux";
import { getChartData, getCompareChartData, setToggled } from "../../actions";
import Container from "@material-ui/core/Container";

const ChartOptionSelect = props => {
  const { options, compareOptions, toggled } = props;
  const [exchanges, setExchanges] = useState([
    "coinbase",
    "binance",
    "hitbtc",
    "bitfinex"
  ]);
  const [tradingPair, setTradingPair] = useState(["btc_usd", "eth_btc"]);
  const [timeFrames, setTimeFrames] = useState(["Day", "Week", "Month"]);

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
      <Container>
        <form
          onSubmit={handleCompareSubmit}
          style={{ margin: "2em 0 2em 20em" }}
        >
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
      </Container>
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
