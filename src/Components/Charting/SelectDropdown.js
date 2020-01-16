import React, { useState } from "react";
import { connect } from "react-redux";
import { setOptions } from "../../actions";
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
    options
  } = props;

  console.log("options", options);

  const handleChanges = event => {
    console.log("event>>>>>>", event.target.id);
    let newOptions;
    switch (event.target.id) {
      case "exchange":
        const exchange = event.target.value.toLowerCase();
        newOptions = { ...options, exchange };
        props.setOptions(newOptions);
        break;
      case "tradingPair":
        const trading_pair = event.target.value.toLowerCase().replace("/", "_");
        newOptions = { ...options, trading_pair };
        props.setOptions(newOptions);
        break;
      case "timeFrame":
        newOptions = { ...options, timeFrame: event.target.value };
        props.setOptions(newOptions);
        break;
    }
  };

  return (
    <FormControl className={classes.select}>
      <InputLabel id={id} className={classes.label}>
        {label}
      </InputLabel>
      <Select
        labelId={id}
        id={selectId}
        native
        style={{ color: "#fff" }}
        // value={exchange}
        onChange={handleChanges}
      >
        {data.map(ex => {
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
  );
};

const mapStateToProps = state => {
  return {
    cryptoData: state.cryptoData,
    options: state.options
  };
};

export default connect(mapStateToProps, { setOptions })(SelectDropdown);
