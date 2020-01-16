import React, { useState, useEffect } from "react";
import SelectDropdown from "./SelectDropdown";
import { connect } from "react-redux";
import { getChartData } from "../../actions";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

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

const ToggleChartSwitch = withStyles(theme => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: 20
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main
      }
    }
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none"
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white
  },
  checked: {}
}))(Switch);

const exchanges = ["Coinbase", "Binance", "HITBTC", "Bitfinex"];
const tradingPair = ["BTC/USD", "ETH/BTC"];
const timeFrames = ["Day", "Week", "Month"];

const ChartOptionSelect = props => {
  const { options } = props;
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    props.getChartData(options);
  }, [options]);

  const handleSubmit = event => {
    event.preventDefault();
    props.getChartData(options);
  };

  const handleToggleChanges = () => {
    setToggled(!toggled);
  };

  // console.log("field>>>>>>", fields);
  console.log("switch>>>>>>", toggled);

  if (toggled) {
    return (
      <form onSubmit={handleSubmit} style={{ margin: "2em 0 2em 20em" }}>
        <SelectDropdown
          id={"exchangeLabel"}
          label={"Exchange 1"}
          selectId={"exchange"}
          data={exchanges}
        />
        <SelectDropdown
          id={"exchangeLabel"}
          label={"Exchange 2"}
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
        <ToggleChartSwitch
          checked={toggled}
          onChange={handleToggleChanges}
          value='toggled'
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
        <ToggleChartSwitch
          checked={toggled}
          onChange={handleToggleChanges}
          value='toggled'
        />
      </form>
    );
  }
};

const mapStateToProps = state => {
  return {
    cryptoData: state.cryptoData,
    options: state.options
  };
};

export default connect(mapStateToProps, { getChartData })(ChartOptionSelect);
