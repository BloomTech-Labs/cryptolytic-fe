import React, { useState } from "react";
import { connect } from "react-redux";
import { setOptions, setCompareOptions } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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

const SelectDropdown = props => {
  const classes = useStyles();
  const {
    exchange,
    trading_pair,
    timeFrame,
    id,
    label,
    selectId,
    data,
    options,
    compareOptions,
    toggled
  } = props;

  console.log("options", options);

  const handleChanges = event => {
    let newOptions;
    switch (event.target.id) {
      case "exchange":
        const exchange = event.target.value.toLowerCase();
        if (toggled) {
          newOptions = { ...compareOptions, exchange };
          props.setCompareOptions(newOptions);
        } else {
          newOptions = { ...options, exchange };
          props.setOptions(newOptions);
        }
        break;
      case "tradingPair":
        const trading_pair = event.target.value.toLowerCase().replace("/", "_");
        if (toggled) {
          newOptions = { ...compareOptions, trading_pair };
          props.setCompareOptions(newOptions);
          newOptions = { ...options, trading_pair };
          props.setOptions(newOptions);
        } else {
          newOptions = { ...options, exchange };
          props.setOptions(newOptions);
        }
        break;
      case "timeFrame":
        if (toggled) {
          newOptions = { ...compareOptions, timeFrame: event.target.value };
          props.setCompareOptions(newOptions);
          newOptions = { ...options, timeFrame: event.target.value };
          props.setOptions(newOptions);
        } else {
          newOptions = { ...options, timeFrame: event.target.value };
          props.setOptions(newOptions);
        }
        break;
    }
  };

  return (
    <FormControl className={classes.select}>
      <InputLabel id={id} htmlFor={id} className={classes.label}>
        {label}
      </InputLabel>
      <Select
        native
        labelId={id}
        id={selectId}
        style={{ color: "#fff" }}
        onChange={handleChanges}
      >
        {data.map(ex => {
          return (
            <option key={ex} style={{ borderRadius: "5px", color: "#000" }}>
              {ex}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};

const mapStateToProps = state => {
  return {
    cryptoData: state.cryptoData,
    options: state.options,
    compareOptions: state.compareOptions,
    toggled: state.switchToggled
  };
};

export default connect(mapStateToProps, { setOptions, setCompareOptions })(
  SelectDropdown
);
